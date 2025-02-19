/*:
-------------------------------------------------------------------------
@title Movement Direction Lock
@author Hime --> HimeWorks (http://himeworks.com)
@date Dec 31, 2015
@filename HIME_MovementDirectionLock.js
@url  http://himeworks.com/2015/12/movement-direction-lock/

If you enjoy my work, consider supporting me on Patreon!

* https://www.patreon.com/himeworks

If you have any questions or concerns, you can contact me at any of
the following sites:

* Main Website: http://himeworks.com
* Facebook: https://www.facebook.com/himeworkscom/
* Twitter: https://twitter.com/HimeWorks
* Youtube: https://www.youtube.com/c/HimeWorks
* Tumblr: http://himeworks.tumblr.com/

-------------------------------------------------------------------------------
@plugindesc v1.0 - Prevents you from moving the player in certain directions.
@help 
-------------------------------------------------------------------------------
== Description ==

This plugin allows you to restrict player movement temporarily using events.

By default, they can move in all four, or eight, directions. By using certain
plugin commands, you can "lock" certain directions if you didn't want to allow
them to move in those directions.

== Terms of Use ==

- Free for use in non-commercial projects with credits
- Contact me for commercial use

== Change Log ==

Dec 31, 2015 -  initial release

== Usage ==

Here are some direction names that you can use:

  UP
  DOWN
  LEFT
  RIGHT
  UPLEFT
  UPRIGHT
  DOWNLEFT
  DOWNRIGHT

To lock a movement direction, use the plugin command

  lock_move_dir DIR1 DIR2 DIR3 ...
  
To unlock a movement direction, use the plugin command

  unlock_move_dir DIR1 DIR2 DIR3
 
For convenience, you can lock multiple directions in one command.
So for example, if you wanted to prevent players from moving up or down,
you can write

  lock_move_dir UP DOWN
  
And afterwards, you can unlock those directions with

  unlock_move_dir UP DOWN
 
-------------------------------------------------------------------------------
 */ 
var Imported = Imported || {} ;
var TH = TH || {};
Imported.MovementDirectionLock = 1;
TH.MovementDirectionLock = TH.MovementDirectionLock || {};

(function ($) {

  $.DirMap = {
    DOWNLEFT  : 1,
    DOWN      : 2,
    DOWNRIGHT : 3,
    LEFT      : 4,
    RIGHT     : 6,
    UPLEFT    : 7,
    UP        : 8,
    UPRIGHT   : 9    
  }

  var TH_GameSystem_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function() {
    TH_GameSystem_initialize.call(this);
    this._moveDirLocked = {};
  };

  Game_System.prototype.isMoveDirectionLocked = function(dir) {
    return this._moveDirLocked[dir];
  };
  
  Game_System.prototype.setMoveDirectionLocked = function(dir, bool) {
    if (bool) {
      this._moveDirLocked[dir] = true;
    }
    else {
      delete this._moveDirLocked[dir];
    }
  };
  
  /* This should support 8-dir as well */
  var TH_GamePlayer_getInputDirection = Game_Player.prototype.getInputDirection;
  Game_Player.prototype.getInputDirection = function() {
    if (this.isMoveDirectionLocked(Input.dir4) || this.isMoveDirectionLocked(Input.dir8)) {
      return 0;
    }
    return TH_GamePlayer_getInputDirection.call(this);
  };
   
  Game_Player.prototype.isMoveDirectionLocked = function(dir) {
    if (dir === 0) {
      return 0;
    }
    return $gameSystem.isMoveDirectionLocked(dir);
  };
  
  var TH_GameInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    var cmd = command.toLowerCase();
    if (cmd === "lock_move_dir") {
      for (var i = 0; i < args.length; i++) {
        dir = $.DirMap[args[i].toUpperCase()]
        $gameSystem.setMoveDirectionLocked(dir, true);
      }      
    }
    else if (cmd === "unlock_move_dir") {
      for (var i = 0; i < args.length; i++) {
        dir = $.DirMap[args[i].toUpperCase()]
        $gameSystem.setMoveDirectionLocked(dir, false);
      }            
    }
    else {
      TH_GameInterpreter_pluginCommand.call(this, command, args);
    };
  };
})(TH.MovementDirectionLock);