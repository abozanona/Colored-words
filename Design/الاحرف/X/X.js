(function (libX, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libXrary properties:
libX.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libX.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("Ah/lEQBTCSAvBdQA3hoBPiGQBKAIBMASQh0CXhfCaQBlC2AXB0Qg7ANg0AFQgfhjg8h6QhBB9gdBgQg0gGg0gMQAZhzBjiwQhfiehziaQBRgTBOgIg");
	this.shape.setTransform(0,0.4,0.462,0.462);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgCBnQhAB+gdBfQg0gGg1gMQAahzBiiwQheieh0iaQBRgTBOgIQBTCSAvBeQA4hpBPiGQBJAIBMASQh0CXhfCaQBlC2AYB0Qg7ANg1AGQgfhjg8h7g");
	this.shape_1.setTransform(0,0.3,0.462,0.462);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.2,-15.6,28.5,32);


// stage content:
(libX.X = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libX.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.4,132.5,37.8,42.3);

})(libX = libX||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libX, images, createjs, ss;