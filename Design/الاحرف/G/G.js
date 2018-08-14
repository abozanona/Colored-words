(function (libG, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libGrary properties:
libG.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libG.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AAtBfIAEhyQBgABBiADQgTCdgoCbQhpArhFABQhnAChFheQhJhmgSiRQgUibBDhcQAigtA1gYQA7gcBIABQBhACBwArQATAHATAIQgCAvgEAvQh1gdhXgEQhKgDgjAVQggATgOAvQgOAxAGBtQAGBsAeAyQAdAwBIgCQAugEAXgDQAGg8AFhBg");
	this.shape.setTransform(-0.2,0.6,0.507,0.507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AiiD5QhJhmgSiRQgUibBDhcQAigtA1gYQA7gcBIABQBhACBwArIAmAPQgCAvgEAvQh1gdhXgEQhKgDgjAVQggATgOAvQgOAxAGBuQAGBrAeAyQAdAwBIgCIBFgHQAGg8AFhAIg6AAIAEhyIDCAEQgTCdgoCbQhpArhFABIgFABQhjAAhEhdg");
	this.shape_1.setTransform(-0.2,0.6,0.507,0.507);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-19.3,28.4,39.9);


// stage content:
(libG.F = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libG.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.4,129.7,37.3,48.5);

})(libG = libG||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libG, images, createjs, ss;