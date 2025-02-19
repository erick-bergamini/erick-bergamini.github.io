// =============================================== =============================
// TMPlugin-Back button
// Version: 1.0.0
// Last updated: 2016/10/28
// Distributor: http://hikimoki.sakura.ne.jp/
// ------------------------------------------------ // ------------------------------------------------ -----------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
// =============================================== =============================

/*:
 * @plugindesc Displays a back button for tap operation in the menu scene.
 *
 * @author tomoaky (http://hikimoki.sakura.ne.jp/)
 *
 * @param buttonImage
 * Image to display as @desc button.
 * Initial value: backButton
 * @default backButton
 * @require 1
 * @dir img / system /
 * @type file
 *
 * @param sceneMenuX
 * Back button X coordinate of @desc Scene_Menu.
 * Initial value: 0
 * @default 0
 *
 * @param sceneMenuY
 * Back button Y coordinate of @desc Scene_Menu.
 * Initial value: 0
 * @default 0
 *
 * @param sceneItemX
 * Back button X coordinate of @desc Scene_Item.
 * Initial value: 0
 * @default 0
 *
 * @param sceneItemY
 * Back button Y coordinate of @desc Scene_Item.
 * Initial value: 0
 * @default 0
 *
 * @param sceneSkillX
 * @desc Scene_Skill back button X coordinates.
 * Initial value: 0
 * @default 0
 *
 * @param sceneSkillY
 * @desc Scene_Skill back button Y coordinate.
 * Initial value: 0
 * @default 0
 *
 * @param sceneEquipX
 * @desc Scene_Equip back button X coordinates.
 * Initial value: 0
 * @default 0
 *
 * @param sceneEquipY
 * @desc Scene_Equip back button Y coordinate.
 * Initial value: 0
 * @default 0
 *
 * @param sceneStatusX
 * Back button X coordinate of @desc Scene_Status.
 * Initial value: 0
 * @default 0
 *
 * @param sceneStatusY
 * @desc Scene_Status back button Y coordinate.
 * Initial value: 0
 * @default 0
 *
 * @param sceneOptionsX
 * Back button X coordinates of @desc Scene_Options.
 * Initial value: 0
 * @default 0
 *
 * @param sceneOptionsY
 * Back button Y coordinate of @desc Scene_Options.
 * Initial value: 0
 * @default 0
 *
 * @param sceneSaveX
 * @desc Scene_Save back button X coordinates.
 * Initial value: 0
 * @default 0
 *
 * @param sceneSaveY
 * @desc Scene_Save back button Y coordinate.
 * Initial value: 0
 * @default 0
 *
 * @param sceneLoadX
 * Back button X coordinate of @desc Scene_Load.
 * Initial value: 0
 * @default 0
 *
 * @param sceneLoadY
 * Back button Y coordinate of @desc Scene_Load.
 * Initial value: 0
 * @default 0
 *
 * @param sceneGameEndX
 * @desc Scene_GameEnd back button X coordinates.
 * Initial value: 0
 * @default 0
 *
 * @param sceneGameEndY
 * @desc Scene_GameEnd back button Y coordinate.
 * Initial value: 0
 * @default 0
 *
 * @param sceneShopX
 * @desc Scene_Shop back button X coordinates.
 * Initial value: 0
 * @default 0
 *
 * @param sceneShopY
 * @desc Scene_Shop back button Y coordinates.
 * Initial value: 0
 * @default 0
 *
 * @param sceneNameX
 * Back button X coordinate of @desc Scene_Name.
 * Initial value: 0
 * @default 0
 *
 * @param sceneNameY
 * Back button Y coordinate of @desc Scene_Name.
 * Initial value: 0
 * @default 0
 *
 * @help
 * Preparation:
 *
 * Put the button image distributed with the plugin in the img / system folder.
 * Please save. The file name is backButton.png.
 * When using the original button image, use the one with the same name as the above file name.
 * Prepare or change the plugin parameter buttonImage.
 *
 *
 * How to use:
 *
 * With the button image in the img / system folder, run this plugin
 * Once installed, the back button will be displayed automatically.
 *
 * Since the display position of the button can be adjusted for each scene with the plug-in parameter.
 * Please change it to your liking.
 *
 * The transparent part of the button image (alpha value is 0) does not respond to taps.
 *
 * There are no plugin commands.
 *
 * This plug-in has been confirmed to work with RPG Maker MV Version 1.3.3.
 */ 

var Imported = Imported || {};
Imported.TMBackButton = true;

var TMPlugin = TMPlugin || {};
TMPlugin.BackButton = {};
TMPlugin.BackButton.Parameters = PluginManager.parameters('TMBackButton');
TMPlugin.BackButton.ButtonImage = TMPlugin.BackButton.Parameters['buttonImage'] || 'backButton';
TMPlugin.BackButton.SceneMenuX = +(TMPlugin.BackButton.Parameters['sceneMenuX'] || 0);
TMPlugin.BackButton.SceneMenuY = +(TMPlugin.BackButton.Parameters['sceneMenuY'] || 0);
TMPlugin.BackButton.SceneItemX = +(TMPlugin.BackButton.Parameters['sceneItemX'] || 0);
TMPlugin.BackButton.SceneItemY = +(TMPlugin.BackButton.Parameters['sceneItemY'] || 0);
TMPlugin.BackButton.SceneSkillX = +(TMPlugin.BackButton.Parameters['sceneSkillX'] || 0);
TMPlugin.BackButton.SceneSkillY = +(TMPlugin.BackButton.Parameters['sceneSkillY'] || 0);
TMPlugin.BackButton.SceneEquipX = +(TMPlugin.BackButton.Parameters['sceneEquipX'] || 0);
TMPlugin.BackButton.SceneEquipY = +(TMPlugin.BackButton.Parameters['sceneEquipY'] || 0);
TMPlugin.BackButton.SceneStatusX = +(TMPlugin.BackButton.Parameters['sceneStatusX'] || 0);
TMPlugin.BackButton.SceneStatusY = +(TMPlugin.BackButton.Parameters['sceneStatusY'] || 0);
TMPlugin.BackButton.SceneOptionsX = +(TMPlugin.BackButton.Parameters['sceneOptionsX'] || 0);
TMPlugin.BackButton.SceneOptionsY = +(TMPlugin.BackButton.Parameters['sceneOptionsY'] || 0);
TMPlugin.BackButton.SceneSaveX = +(TMPlugin.BackButton.Parameters['sceneSaveX'] || 0);
TMPlugin.BackButton.SceneSaveY = +(TMPlugin.BackButton.Parameters['sceneSaveY'] || 0);
TMPlugin.BackButton.SceneLoadX = +(TMPlugin.BackButton.Parameters['sceneLoadX'] || 0);
TMPlugin.BackButton.SceneLoadY = +(TMPlugin.BackButton.Parameters['sceneLoadY'] || 0);
TMPlugin.BackButton.SceneGameEndX = +(TMPlugin.BackButton.Parameters['sceneGameEndX'] || 0);
TMPlugin.BackButton.SceneGameEndY = +(TMPlugin.BackButton.Parameters['sceneGameEndY'] || 0);
TMPlugin.BackButton.SceneShopX = +(TMPlugin.BackButton.Parameters['sceneShopX'] || 0);
TMPlugin.BackButton.SceneShopY = +(TMPlugin.BackButton.Parameters['sceneShopY'] || 0);
TMPlugin.BackButton.SceneNameX = +(TMPlugin.BackButton.Parameters['sceneNameX'] || 0);
TMPlugin.BackButton.SceneNameY = +(TMPlugin.BackButton.Parameters['sceneNameY'] || 0);

(function() {

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //

  var _Window_Selectable_processTouch = Window_Selectable.prototype.processTouch;
  Window_Selectable.prototype.processTouch = function() {
    if (this.isOpenAndActive() && TouchInput.isTriggered()) {
      var backButton = SceneManager._scene._backButtonSprite;
      if (this.isCancelEnabled() && backButton && backButton.width) {
        var x = backButton.x;
        var y = backButton.y;
        if (TouchInput.x >= x && TouchInput.x < x + backButton.width &&
            TouchInput.y >= y && TouchInput.y < y + backButton.height &&
            +backButton.bitmap.getAlphaPixel(TouchInput.x - x, TouchInput.y - y) > 0) {
          this.processCancel();
          return;
        }
      }
    }
    _Window_Selectable_processTouch.call(this);
  };

  //-----------------------------------------------------------------------------
  // Scene_MenuBase
  //

  var _Scene_MenuBase_create = Scene_MenuBase.prototype.create;
  Scene_MenuBase.prototype.create = function() {
    _Scene_MenuBase_create.call(this);
    this.createBackButton();
  };

  Scene_MenuBase.prototype.createBackButton = function() {
    this._backButtonSprite = new Sprite();
    this._backButtonSprite.bitmap = ImageManager.loadSystem(TMPlugin.BackButton.ButtonImage);
    this._backButtonSprite.x = this.backButtonX();
    this._backButtonSprite.y = this.backButtonY();
    this.addChild(this._backButtonSprite);
  };

  Scene_MenuBase.prototype.backButtonX = function() {
    return 0;
  };

  Scene_MenuBase.prototype.backButtonY = function() {
    return 0;
  };

  //-----------------------------------------------------------------------------
  // Scene_Menu
  //

  Scene_Menu.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneMenuX;
  };

  Scene_Menu.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneMenuY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  Scene_Item.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneItemX;
  };

  Scene_Item.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneItemY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Skill
  //

  Scene_Skill.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneSkillX;
  };

  Scene_Skill.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneSkillY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Equip
  //

  Scene_Equip.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneEquipX;
  };

  Scene_Equip.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneEquipY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Status
  //

  Scene_Status.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneStatusX;
  };

  Scene_Status.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneStatusY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Options
  //

  Scene_Options.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneOptionsX;
  };

  Scene_Options.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneOptionsY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Save
  //

  Scene_Save.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneSaveX;
  };

  Scene_Save.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneSaveY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Load
  //

  Scene_Load.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneLoadX;
  };

  Scene_Load.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneLoadY;
  };

  //-----------------------------------------------------------------------------
  // Scene_GameEnd
  //

  Scene_GameEnd.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneGameEndX;
  };

  Scene_GameEnd.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneGameEndY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  Scene_Shop.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneShopX;
  };

  Scene_Shop.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneShopY;
  };

  //-----------------------------------------------------------------------------
  // Scene_Name
  //

  Scene_Name.prototype.backButtonX = function() {
    return TMPlugin.BackButton.SceneNameX;
  };

  Scene_Name.prototype.backButtonY = function() {
    return TMPlugin.BackButton.SceneNameY;
  };

})();
