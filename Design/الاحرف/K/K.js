(function (libK, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libKrary properties:
libK.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libK.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AhQFFQg2gHgvgMQhSkvADkrQBIgSBIgJQAACRAGCPQA7gIAggDQAdhQBVjHQBUAHBQAUQhjCvg/B+QBLC3ANB5Qg7AOg5AFQgbhug7iTIhWAJQAKCGANBxg");
	this.shape.setTransform(0.2,0.5,0.478,0.478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgQBFIhWAJQAKCGANBxQg2gHgvgMQhSkvADkrQBIgSBIgJQAACRAGCPQA7gIAggDQAdhQBVjHQBUAHBQAUQhjCvg/B+QBLC3ANB5Qg7AOg5AFQgbhug7iTg");
	this.shape_1.setTransform(0.1,0.5,0.478,0.478);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.3,-17.3,26.9,34.5);


// stage content:
(libK.K = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libK.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.7,132,35.4,43.9);

})(libK = libK||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libK, images, createjs, ss;