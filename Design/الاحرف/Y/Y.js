(function (libY, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libYrary properties:
libY.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libY.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AAzFFQgyADgxgDQgKiQgEh3QhZihiJjIQBSgTBNgIQBbCvAmBVQAuhhBUijQBPAIBRATQiLDMhVCdQgGCFgJCCg");
	this.shape.setTransform(0,0.2,0.456,0.456);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgwFFQgKiQgEh3QhZihiKjIQBTgTBNgIQBaCvAnBVQAuhhBUijQBOAIBRATQiKDMhVCdQgGCFgJCCQgaACgZAAIgwgCg");
	this.shape_1.setTransform(0,0.2,0.456,0.456);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.7,28.5,31.8);


// stage content:
(libY.Y = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libY.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,132.4,37.6,41.9);

})(libY = libY||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libY, images, createjs, ss;