//-----------------------------------------------------------------------------
//  Galv's Picture Animations
//-----------------------------------------------------------------------------
//  For: RPGMAKER MV
//  GALV_PictureAnims.js
//-----------------------------------------------------------------------------
//  2019-10-27 - Version 1.3 - Temp fix for erasing picture while anim playing
//  2017-01-18 - Version 1.2 - fixed a crash when erasing picture before battle
//  2016-08-22 - Version 1.1 - fixed crash when transferring to another map
//  2016-08-17 - Version 1.0 - release
//-----------------------------------------------------------------------------
// Terms can be found at:
// galvs-scripts.com
//-----------------------------------------------------------------------------

var Imported = Imported || {};
Imported.Galv_PictureAnims = true;

var Galv = Galv || {};              // Galv's main object
Galv.PIC = Galv.PIC || {};      // Galv's stuff

//-----------------------------------------------------------------------------
/*:
 * @plugindesc (v.1.3) Play database animations on pictures made with "Show Picture"
 * 
 * @author Galv - galvs-scripts.com
 *
 * @param
 * @desc
 * @default
 *
 * @help
 *   Galv's Picture Animations
 * ----------------------------------------------------------------------------
 * This plugin allows you to play animation on pictures created with the
 * "Show Picture" event command. To do this, use a script call:
 *
 *    Galv.PIC.anim(picId,animId);   // picId = Picture number to play anim on
 *                                   // animId = animation id from the database
 *
 * There is an issue when using 'Erase Picture' while an animation is playing.
 * A temporary fix for this is: before you erase a picture, you must use the
 * below script call, then use a wait of 1 frame, then erase the picture.
 *
 *    Galv.PIC.stopAnim(picId);      // Stops the animation playing on the
 *                                   // picture. USE THIS BEFORE ERASE PICTURE
 * 
 * Don't forget the 1 wait after this script call and before erasing picture!
 */

//-----------------------------------------------------------------------------
//  CODE STUFFS
//-----------------------------------------------------------------------------

(function() {

Galv.PIC.stopAnim = function(picId) {
	Galv.PIC.anim(picId,0);
};


Galv.PIC.anim = function(picId,animId) {
	var pic = $gameScreen._pictures[picId];
	if (pic) {
		pic._animationId = animId;
		if (animId <= 0) pic._animationId = -1;
	}
};


/*
// Need to get it working here. Temporary fix with script call.
Galv.PIC.Game_Screen_erasePicture = Game_Screen.prototype.erasePicture;
Game_Screen.prototype.erasePicture = function(pictureId) {
	Galv.PIC.stopAnim(this.realPictureId(pictureId));
	Galv.PIC.Game_Screen_erasePicture.call(this,pictureId);
};
*/




Galv.PIC.Sprite_Picture_initialize = Sprite_Picture.prototype.initialize;
Sprite_Picture.prototype.initialize = function(pictureId) {
	this._animationSprites = [];
	this._effectTarget = this;
	this._hiding = false;
    Galv.PIC.Sprite_Picture_initialize.call(this,pictureId);
};

Galv.PIC.Sprite_Picture_updateOther = Sprite_Picture.prototype.updateOther;
Sprite_Picture.prototype.updateOther = function() {
	Galv.PIC.Sprite_Picture_updateOther.call(this);
	this.updateAnimation();
	this.updateVisibility();
	this.updateAnimationSprites();
};

Sprite_Picture.prototype.updateAnimation = function() {
    this.setupAnimation();
    if (!this.isAnimationPlaying()) {
    	this._animationPlaying = false;
    }
};

Sprite_Picture.prototype.setupAnimation = function() {
	var pic = this.picture();
    if (pic && pic._animationId > 0) {
		this._animId = $gameScreen._pictures[this._pictureId]._animationId;
        var animation = $dataAnimations[this._animId];
        this.startAnimation(animation, false, 0);   
		$gameScreen._pictures[this._pictureId]._animationId = 0;
		this._animationPlaying = true;
    } else if (pic._animationId == -1) {
		this._animationPlaying = false;
		this.stopAnimationSprites();
		pic._animationId = 0;
	}
};

Sprite_Picture.prototype.startAnimation = function(animation, mirror, delay) {
    var sprite = new Sprite_Animation();
    sprite.setup(this._effectTarget, animation, mirror, delay);
	sprite.opaque = true;
    this.parent.addChild(sprite);
    this._animationSprites.push(sprite);
};

Sprite_Picture.prototype.isAnimationPlaying = function() {
    return this._animationSprites.length > 0;
};

Sprite_Picture.prototype.updateAnimationSprites = function() {
	if (this.picture()._animationId === -1) return;
    if (this._animationSprites.length > 0) {
        var sprites = this._animationSprites.clone();
        this._animationSprites = [];
        for (var i = 0; i < sprites.length; i++) {
            var sprite = sprites[i];
            if (sprite.isPlaying()) {
                this._animationSprites.push(sprite);
            } else {
                sprite.remove();
            }
        }
    }
};

Sprite_Picture.prototype.stopAnimationSprites = function() {
    if (this._animationSprites.length > 0) {
        var sprites = this._animationSprites.clone();
        this._animationSprites = [];
        for (var i = 0; i < sprites.length; i++) {
            var sprite = sprites[i];
			sprite.remove();
        }
    }
};

Sprite_Picture.prototype.hide = function() {
    this._hiding = true;
};

Sprite_Picture.prototype.show = function() {
    this._hiding = false;
};

Sprite_Picture.prototype.updateVisibility = function() {
    this.visible = !this._hiding;
};

})();