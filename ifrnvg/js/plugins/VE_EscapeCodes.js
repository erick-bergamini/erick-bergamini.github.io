/*
 * ==============================================================================
 * ** Victor Engine MV - Escape Codes
 * ------------------------------------------------------------------------------
 * Version History:
 *  v 1.00 - 2015.12.31 > First release.
 *  v 1.01 - 2016.03.25 > Added escape code for 'floor variable'.
 * ==============================================================================
 */

var Imported = Imported || {};
Imported['VE - Escape Codes'] = '1.01';

var VictorEngine = VictorEngine || {};
VictorEngine.EscapeCodes = VictorEngine.EscapeCodes || {};

(function() {

	VictorEngine.EscapeCodes.loadDatabase = DataManager.loadDatabase;
	DataManager.loadDatabase = function() {
		VictorEngine.EscapeCodes.loadDatabase.call(this);
		PluginManager.requiredPlugin.call(PluginManager, 'VE - Escape Codes', 'VE - Basic Module', '1.06');
		PluginManager.requiredPlugin.call(PluginManager, 'VE - Escape Codes', 'VE - Control Text');
	};

	VictorEngine.EscapeCodes.requiredPlugin = PluginManager.requiredPlugin;
	PluginManager.requiredPlugin = function(name, required, version) {
		if (!VictorEngine.BasicModule) {
			var msg = 'The plugin ' + name + ' requires the plugin ' + required;
			msg += ' v' + version + ' or higher installed to work properly.';
			msg += ' Go to http://victorenginescripts.wordpress.com/ to download the plugin.';
			throw new Error(msg);
		} else {
			VictorEngine.EscapeCodes.requiredPlugin.call(this, name, required, version)
		};
	};
	
})();

/*:
*------------------------------------------------------------------------------ 
 * @plugindesc v1.01 - Adds new escape codes to be used on texts.
 * @author Victor Sant
 *
 * ------------------------------------------------------------------------------
 * @help 
 * ------------------------------------------------------------------------------
 *  
 *  Escape codes are codes such as \c[x], \n[x], \i[x] and others, that
 *  can be used on messages and some other windows.
 *  The following codes can be used as escape codes.
 *
 *  Color Codes:
 *  \c[#rrggbb] : change color using hexadecimal values. (00-FF)
 *  \c[r,g,b]   : change color using RGB values. (0-255)
 *
 * ---------------
 *
 *  Font Codes:
 *  \fn[x] : change font name. (fontname)
 *  \fs[x] : change font size.
 *  \ft[x] : change font transparency. (0-255)
 *  \fb    : toggle font bold.
 *  \fi    : toggle font italtic.
 *  \fs    : toggle font shadow.
 *  \fo[x] : change font outline color, hexadecimal or rgb value.
 *  \fw[x] : change font outline width.
 *
 * ---------------
 *
 *  Actor Codes:
 *  \an[x]    : display actor nickname.   (actor ID)
 *  \ac[x]    : display actor class name. (actor ID)
 *  \al[x]    : display actor level.      (actor ID)
 *  \ap[x, y] : display actor paramenter. (actor ID, parameter ID)
 *
 * ---------------
 * 
 *  Icon Coldes:
 *  \ii[x] : Display item icon.   (Item ID)
 *  \iw[x] : Display weapon icon. (Weapon ID)
 *  \ia[x] : Display armor icon.  (Armor ID)
 *  \is[x] : Display skill icon.  (Skill ID)
 *  \it[x] : Display state icon.  (State ID)
 *
 * ---------------
 *
 *  Name Codes:
 *  \nc[x]  : display class name.  (Class ID)
 *  \ni[x]  : display item name.   (Item ID)
 *  \nw[x]  : display weapon name. (Weapon ID)
 *  \na[x]  : display armor name.  (Armor ID)
 *  \ns[x]  : display skill name.  (Skill ID)
 *  \nt[x]  : display state name.  (State ID)
 *  \np[x]  : display parameter name. (Parameter ID)
 *  \nsw[x] : display switch name.    (Switch ID)
 *  \nvr[x] : display variable name.  (Variable ID)
 *  \nev[x] : display event name.     (Event ID)
 *  \nen[x] : display enemy name.     (Enemy ID)
 *  \nel[x] : display element name.   (Element ID)
 *  \nwt[x] : display weapon type name. (Weapon Type ID)
 *  \nat[x] : display armor type name.  (Armor Type ID)
 *  \nst[x] : display skill type name.  (Skill Type ID)
 *  \nmp    : display current map name.
 *
 * ---------------
 *
 *  Misc Codes:
 *  \n or \br : break line.
 *  \r  : reset font settings.
 *  \tg : display the total gold held by the party.
 *  \fv[x]  : draw variable value using 'floor format'.
 *            if variable is 0 or higher draws 'FX'.  Ex.: 15F
 *            if variable is lower than 0 draws 'XB'. Ex.: B12
 *  \e['x'] : evaluate code x. The code must be always inside quotations.
 *           Ex.: \e['$gameSystem.playtimeText()']
 * ------------------------------------------------------------------------------
 */

(function() {
	
	//=============================================================================
	// Bitmap
	//=============================================================================

	Object.defineProperty(Bitmap.prototype, 'fontBold', {
		get: function() { return this._fontBold },
		set: function(bold) { this._fontBold = bold },
		configurable: true
	});
	
	VictorEngine.EscapeCodes.drawText = Bitmap.prototype.drawText;
	Bitmap.prototype.drawText = function(text, x, y, maxWidth, lineHeight, align) {
		if (this.fontBold) {
			VictorEngine.EscapeCodes.drawText.call(this, text, x + 1, y + 1, maxWidth, lineHeight, align);
			VictorEngine.EscapeCodes.drawText.call(this, text, x - 1, y - 1, maxWidth, lineHeight, align);
			VictorEngine.EscapeCodes.drawText.call(this, text, x + 1, y - 1, maxWidth, lineHeight, align);
			VictorEngine.EscapeCodes.drawText.call(this, text, x - 1, y + 1, maxWidth, lineHeight, align);
		}
		VictorEngine.EscapeCodes.drawText.call(this, text, x, y, maxWidth, lineHeight, align);
	};

	//=============================================================================
	// Window_Base
	//=============================================================================

	VictorEngine.EscapeCodes.obtainEscapeCode = Window_Base.prototype.obtainEscapeCode;
	Window_Base.prototype.obtainEscapeCode = function(textState) {
		var regex = /^(?:F(?:N|Z|D|B|I|O|S|V)|R|E|N|BR)/i;
		var arr   = regex.exec(textState.text.slice(textState.index + 1));
		if (arr) {
			textState.index += arr[0].length + 1;
			return arr[0].toUpperCase();
		} else {
			return VictorEngine.EscapeCodes.obtainEscapeCode.call(this, textState)
		}
	};
	
	VictorEngine.EscapeCodes.convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
	Window_Base.prototype.convertEscapeCharacters = function(text) {
		text = this.convertNewEscapeCharacters(text);
		text = VictorEngine.EscapeCodes.convertEscapeCharacters.call(this, text);
		return text;
	};
	
	VictorEngine.EscapeCodes.resetFontSettings = Window_Base.prototype.resetFontSettings;
	Window_Base.prototype.resetFontSettings = function() {
		VictorEngine.EscapeCodes.resetFontSettings.call(this);
		this.contents.fontBold     = this.standardFontBold();
		this.contents.fontItalic   = this.standardFontItalic();
		this.contents.outlineColor = this.standardOutlineColor();
		this.contents.outlineWidth = this.standardOutlineWidth();
		this.changePaintOpacity(true);
	};
	
	VictorEngine.EscapeCodes.processEscapeCharacter = Window_Base.prototype.processEscapeCharacter;
	Window_Base.prototype.processEscapeCharacter = function(code, textState) {
		switch (code) {
		case 'N': case 'BR':
			this.processNewLine(textState);
			break;
		case 'C':
			this.changeTextColor(this.processTextColor(textState));
			break;
		case 'FN':
			this.contents.fontFace = this.obtainFontName(textState);
			break;
		case 'FS':
			this.contents.fontSize = this.obtainEscapeParam(textState);
			break;
		case 'FT':
			this.contents.paintOpacity = this.obtainEscapeParam(textState);
			break;
		case 'FB':
			this.contents.fontBold = !this.contents.fontBold;
			break;
		case 'FI':
			this.contents.fontItalic = !this.contents.fontItalic;
			break;
		case 'FO':
			this.contents.outlineColor = this.processTextColor(textState, 'rgba(0, 0, 0, 0.5)');
			break;
		case 'FW':
			this.contents.outlineWidth = this.obtainEscapeParam(textState);
			break;
		case 'II': case 'IW': case 'IA': case 'IS': case 'IT':
			this.precessIconSettings(code, textState);
			break;
		case 'R':
			this.resetFontSettings();
			break;
		default:
			VictorEngine.EscapeCodes.processEscapeCharacter.call(this, code, textState)
			break;
		}
	};
	
	Window_Base.prototype.standardOutlineWidth = function() {
		return 4;
	};

	Window_Base.prototype.standardOutlineColor = function() {
		return 'rgba(0, 0, 0, 0.5)';
	};

	Window_Base.prototype.standardFontItalic = function() {
		return false;
	};
	
	Window_Base.prototype.standardFontBold = function() {
		return false;
	};

	Window_Base.prototype.convertNewEscapeCharacters = function(text) {
		text = text.replace(/\\/g, '\x1b');
		text = text.replace(/\x1b\x1b/g, '\\');
		text = text.replace(/\x1bTG/gi, function() {
			return $gameParty.gold();
		}.bind(this));
		text = text.replace(/\x1bE\[('[^\']+'|\"[^\"]+\")\]/gi, function() {
			return eval(arguments[1].slice(1, -1)) || '';
		}.bind(this));
		text = text.replace(/\x1bAN\[(\d+)\]/gi, function() {
			return this.actorNickname(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bAC\[(\d+)\]/gi, function() {
			return this.actorClass(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bAL\[(\d+)\]/gi, function() {
			return this.actorLevel(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bAP\[(\d+)[ ]*,[ ]*(\d+)\]/gi, function() {
			return this.actorParam(parseInt(arguments[1]), parseInt(arguments[2]));
		}.bind(this));
		text = text.replace(/\x1bNC\[(\d+)\]/gi, function() {
			return this.className(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNI\[(\d+)\]/gi, function() {
			return this.itemName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNW\[(\d+)\]/gi, function() {
			return this.weaponName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNA\[(\d+)\]/gi, function() {
			return this.armorName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNS\[(\d+)\]/gi, function() {
			return this.skillName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNS\[(\d+)\]/gi, function() {
			return this.skillName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNT\[(\d+)\]/gi, function() {
			return this.stateName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNP\[(\d+)\]/gi, function() {
			return this.paramName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNEV\[(\d+)\]/gi, function() {
			return this.eventName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNEN\[(\d+)\]/gi, function() {
			return this.enemyName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNSW\[(\d+)\]/gi, function() {
			return this.switchName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNVR\[(\d+)\]/gi, function() {
			return this.variableName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNEL\[(\d+)\]/gi, function() {
			return this.elementName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNWT\[(\d+)\]/gi, function() {
			return this.weaponTypeName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNAT\[(\d+)\]/gi, function() {
			return this.armorTypeName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNST\[(\d+)\]/gi, function() {
			return this.skillTypeName(parseInt(arguments[1]));
		}.bind(this));
		text = text.replace(/\x1bNMP/gi, function() {
			return $gameMap.displayName();
		}.bind(this));
		text = text.replace(/\x1bFV\[(\d+)\]/gi, function() {
			return this.floorVariable(parseInt(arguments[1]));
		}.bind(this));
		return text;
	};
	
	Window_Base.prototype.processTextColor = function(textState, defaultColor) {
		var num = this.obtainEscapeParam(textState);
		var rgb = this.obtainRgbColor(textState);
		var hex = this.obtainHexColor(textState);
		if (num !== '') return this.textColor(num);
		if (rgb !== '') return rgb;
		if (hex !== '') return hex;
		if (defaultColor) return defaultColor;
		return this.textColor(0)
	};
	
	Window_Base.prototype.precessIconSettings = function(code, textState) {
		switch (code) {
		case 'II':
			var item = $dataItems[this.obtainEscapeParam(textState)];
			break;
		case 'IW':
			var item = $dataWeapons[this.obtainEscapeParam(textState)];
			break;
		case 'IA':
			var item = $dataArmors[this.obtainEscapeParam(textState)];
			break;
		case 'IS':
			var item = $dataSkills[this.obtainEscapeParam(textState)];
			break;
		case 'IT':
			var item = $dataStates[this.obtainEscapeParam(textState)];
			break;
		}
		this.processDrawIcon(item ? item.iconIndex : 0, textState);
	};
	
	Window_Base.prototype.obtainRgbColor = function(textState) {
		var regex = /^\[(?:\d+[ ]*,?[ ]*){3}\]/;
		var color = regex.exec(textState.text.slice(textState.index));
		if (color) {
			textState.index += color[0].length;
			var rgb = eval('[' + color[0].slice(1, -1) + ']');
			return VictorEngine.rgbToHex(rgb[0], rgb[1], rgb[2]);
		} else {
			return '';
		}
	};
	
	Window_Base.prototype.obtainHexColor = function(textState) {
		var regex = /^\[\#[abcdef\d]{6}\]/i;
		var color = regex.exec(textState.text.slice(textState.index));
		if (color) {
			textState.index += color[0].length;
			return color[0].slice(1, -1);
		} else {
			return '';
		}
	};
	
	Window_Base.prototype.obtainFontName = function(textState) {
		var regex = /^\[[^\]]+\]/i;
		var name  = regex.exec(textState.text.slice(textState.index));
		if (name) {
			textState.index += name[0].length;
			return name[0].slice(1, -1);
		} else {
			return this.standardFontFace();
		}
	};
	
	Window_Base.prototype.actorNickname = function(n) {
		var actor = n >= 1 ? $gameActors.actor(n) : null;
		return actor ? actor.nickname() : '';
	};
	
	Window_Base.prototype.actorClass = function(n) {
		var actor = n >= 1 ? $gameActors.actor(n) : null;
		return actor ? actor.currentClass().name : '';
	};
	
	Window_Base.prototype.actorLevel = function(n) {
		var actor = n >= 1 ? $gameActors.actor(n) : null;
		return actor ? actor.level : '';
	};
	
	Window_Base.prototype.actorParam = function(n, paramId) {
		var actor = n >= 1 ? $gameActors.actor(n) : null;
		return actor ? actor.param(paramId) : '';
	};
		
	Window_Base.prototype.className = function(n) {
		var item = n >= 1 ? $dataClasses[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.itemName = function(n) {
		var item = n >= 1 ? $dataItems[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.weaponName = function(n) {
		var item = n >= 1 ? $dataWeapons[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.armorName = function(n) {
		var item = n >= 1 ? $dataArmors[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.skillName = function(n) {
		var item = n >= 1 ? $dataSkills[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.stateName = function(n) {
		var item = n >= 1 ? $dataStates[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.paramName = function(n) {
		return TextManager.param(n)
	};

	Window_Base.prototype.eventName = function(n) {
		var mapEvent = n >= 1 ? $gameMap.events(n) : null;
		return mapEvent ? mapEvent.event.name : '';
	};
	
	Window_Base.prototype.enemyName = function(n) {
		var item = n >= 1 ? $dataEnemies[n] : null;
		return item ? item.name : '';
	};
	
	Window_Base.prototype.switchName = function(n) {
		var item = n >= 1 ? $dataSystem.switches[n] : null;
		return item ? item : '';
	};
	
	Window_Base.prototype.variableName = function(n) {
		var item = n >= 1 ? $dataSystem.variables[n] : null;
		return item ? item : '';
	};
	
	Window_Base.prototype.elementName = function(n) {
		var item = n >= 1 ? $dataSystem.elements[n] : null;
		return item ? item : '';
	};
	
	Window_Base.prototype.weaponTypeName = function(n) {
		var item = n >= 1 ? $dataSystem.weaponTypes[n] : null;
		return item ? item : '';
	};
	
	Window_Base.prototype.armorTypeName = function(n) {
		var item = n >= 1 ? $dataSystem.armorTypes[n] : null;
		return item ? item : '';
	};
	
	Window_Base.prototype.skillTypeName = function(n) {
		var item = n >= 1 ? $dataSystem.skillTypes[n] : null;
		return item ? item : '';
	};

	Window_Base.prototype.floorVariable = function(n) {
		var value = $gameVariables.value(n);
		return value < 0 ? 'B' + String(Math.abs(value)) : String(value) + 'F';
	};
	
})(); 