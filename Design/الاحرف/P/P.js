(function (libP, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libPrary properties:
libP.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libP.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AAGCNQgfABhCgCQAGBYALBjQg2gGgvgNQhQkvADkqQCEgjB/ABQB7AEBCBGQBBBCgJBnQgJBhhEBBQhFA/hkAAgAhjAbIBpAAQBjAAAFh4QADg9gagcQgagcg3gBQg3AAg6AEQABByAHB4g");
	this.shape.setTransform(0.1,0.3,0.458,0.458);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AivE1QhQkwADkqQCEgiB/AAQB7AEBCBGQBBBDgJBnQgJBhhEBAQhFBAhkAAQgfAAhCgCQAGBZALBjQg2gHgvgMgAhrjOQABBxAHB5IBpAAQBjAAAFh5QADg8gagcQgagdg3gBQg3AAg6AFg");
	this.shape_1.setTransform(0.1,0.3,0.458,0.458);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.4,-17.7,25.4,34.1);


// stage content:
(libP.P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libP.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.9,132.4,253.5,42.3);

})(libP = libP||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libP, images, createjs, ss;