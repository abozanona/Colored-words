(function (libH, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libHrary properties:
libH.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libH.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("ABcFDQARiDAKiHQh3ABh1gBQAKCHARCDQgtgEg4gOQhXkwAEkpQBGgSBKgIQgBCFAHCFQB8gDB+ADQAHh8gBiOQBJAIBGASQAEErhWEuQg5AOgsAEg");
	this.shape.setTransform(0.1,0.6,0.498,0.498);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AB3A5Qh3ABh1gBQAKCHARCDQgtgEg4gOQhXkwAEkpQBGgSBKgIQgBCFAHCFQB8gDB+ADQAHh8gBiOQBJAIBGASQAEErhWEuQg5AOgsAEQARiDAKiHg");
	this.shape_1.setTransform(0.1,0.6,0.498,0.498);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-18,29.5,35.8);


// stage content:
(libH.H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libH.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67,130.1,38.8,46.5);

})(libH = libH||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libH, images, createjs, ss;