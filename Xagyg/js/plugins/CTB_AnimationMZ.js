//=============================================================================
/*:
 * @target MZ
 * @plugindesc CT_Bolt's AnimationMZ System v0.80
 * @author CT_Bolt
 *
 * @help
 *
 * CT_Bolt's AnimationMZ
 * Version 0.80
 
 * CT_Bolt
 *
 * ***************** Description **********************
 * Script Calls:
 *  CTB.PlayAnimationOnEvents(<Array> EventIDs, animationId, [mirror], [abovePictures])
 *  CTB.playAnimationXY(x, y, animationId, [mirror], [abovePictures])
 *
 * Examples:
 *  CTB.PlayAnimationOnEvents([1, 2, 3], 12)
 *  CTB.PlayAnimationOnEvents(4, 20)
 *  CTB.PlayAnimationOnEvents(4, 20, false, true)
 *
 *  CTB.PlayAnimationXY(6.35, 12.264, 18)
 *  CTB.PlayAnimationXY(12, 16, 18, true)
 *  CTB.PlayAnimationXY(12, 16, 18, true, true)
 *
 *
 * ****************************************************
 * History Log:
 *    v0.70 Alpha Release                  (09/08/2020)
 *    v0.80 Beta Release                   (09/09/2020)
 *
 * ****************************************************
 * Terms of Use:
 *   Free to use commercial or non-commercial
 *   Credit would be nice.
 *
 *  Copyright [2020] [N. Giem] (Aka. CT_Bolt)
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

//=============================================================================
// Parameter Variables
//=============================================================================
var CTB = CTB || {}; CTB.AnimationMZ = CTB.AnimationMZ || {}; CTB.AnimationMZ.sceneSettings = [];
var Imported = Imported || {}; Imported["CTB_AnimationMZ"] = 0.80;

(($_$) => {
	// Core
	String.prototype.isJSON = function(){if (/^[\],:{}\s]*$/.test(this.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {return true;}return false;}	
    function getPluginParameters() {var a = document.currentScript || (function() { var b = document.getElementsByTagName('script'); return b[b.length - 1]; })(); return PluginManager.parameters(a.src.substring((a.src.lastIndexOf('/') + 1), a.src.indexOf('.js')));} $_$.par = getPluginParameters();
	
	// New
	Game_Temp.prototype.playAnimationOnEvents = function(targetIds, animationId, mirror = false, abovePictures = false) {
		if (targetIds.constructor.name !== 'Array'){targetIds = [targetIds];};
		var targets = []; for (const id of targetIds) {if ($gameMap.event(id)) {targets.push($gameMap.event(id))};};
		CTB.AnimationMZ.abovePictures = abovePictures;
		this.requestAnimation(targets, animationId, mirror);
	};
	
	// New
	Game_Temp.prototype.playAnimationXY = function(x, y, animationId, mirror = false, abovePictures = false) {
		const id = $gameMap._animationEventId;
		$gameMap.event(id)._x     = x; $gameMap.event(id)._y    = y;
		$gameMap.event(id)._realX = x;$gameMap.event(id)._realY = y;
		this.playAnimationOnEvents(id, animationId, mirror, abovePictures);
	};
	
	// Alias
	$_$['DataManager.onLoad'] = DataManager.onLoad;
	DataManager.onLoad = function(object) {
		$_$['DataManager.onLoad'].apply(this, arguments);
		if (this.isMapObject(object)) {
			if ($dataMap){
				$gameMap._animationEventId=$dataMap.events.length;
				$dataMap.events.push({
					id: $gameMap._animationEventId,
					name: "Animation Event",
					note: "", 
					pages: [{
							conditions:{},
							directionFix:true,
							image:{
								characterIndex: 0,
								characterName: '',
								direction: 2,
								pattern: 1,
								tileId: 0
							},
							list:[{code: 0, indent: 0, parameters: []}],
							moveFrequency:0,
							moveRoute:[{list:[{code:0,parameters:[]}],repeat:false,skippable:true,wait:false}],
							moveSpeed:0,
							moveType:0,
							priorityType:0,
							stepAnime:false
						}],
					meta: {},
					x: 0,
					y: 0
				});
			};
		};
	};

	// Alias
	$_$['Spriteset_Map.prototype.createAnimationSprite'] = Spriteset_Map.prototype.createAnimationSprite;
	Spriteset_Map.prototype.createAnimationSprite = function(targets, animation, mirror, delay) {
		$_$['Spriteset_Map.prototype.createAnimationSprite'].apply(this, arguments);
		if (eval(CTB.AnimationMZ.abovePictures)){
			const mv = this.isMVAnimation(animation);
			const sprite = new (mv ? Sprite_AnimationMV : Sprite_Animation)();
			const targetSprites = this.makeTargetSprites(targets);
			const baseDelay = this.animationBaseDelay();
			const previous = delay > baseDelay ? this.lastAnimationSprite() : null;
			if (this.animationShouldMirror(targets[0])) {
				mirror = !mirror;
			}
			sprite.targetObjects = targets;
			sprite.setup(targetSprites, animation, mirror, delay, previous);
			
			this._effectsContainer.removeChild(sprite);
			this._pictureContainer.addChild(sprite);
		};
	};

	// Alias
	$_$['Spriteset_Map.prototype.removeAnimation'] = Spriteset_Map.prototype.removeAnimation;
	Spriteset_Map.prototype.removeAnimation = function(sprite) {
		this._pictureContainer.removeChild(sprite);
		$_$['Spriteset_Map.prototype.removeAnimation'].apply(this, arguments);
	};
	
	// Public Functions
	CTB.PlayAnimationOnEvents = function(eventId, animationId, mirror, abovePictures){$gameTemp.playAnimationOnEvents(eventId, animationId, mirror, abovePictures);};
	CTB.PlayAnimationXY = function(x, y, id, mirror, abovePictures){$gameTemp.playAnimationXY(x, y, id, mirror, abovePictures);};

})(CTB.AnimationMZ, this);