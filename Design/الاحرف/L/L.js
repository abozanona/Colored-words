(function (libL, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libLrary properties:
libL.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libL.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AChEyQiOAuiLguQg/ksACkvQBGgXBKgIQAAENAMEOQBmAFBogTQgHAugNA/g");
	this.shape.setTransform(-0.1,0.8,0.466,0.466);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("Ah3EyQhAksADkvQBGgXBKgIQgBENAMEOQBnAFBogTQgIAugNA/QhHAXhGAAQhFAAhGgXg");
	this.shape_1.setTransform(-0.1,0.9,0.466,0.466);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.6,-17.7,19,35);


// stage content:
(libL.L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libL.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.7,132.7,24.8,43.2);

})(libL = libL||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libL, images, createjs, ss;