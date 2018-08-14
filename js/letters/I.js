(function (libI, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libIrary properties:
libI.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libI.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AgxE1QgXk1ACkrQBGg8BIA8QABEsgXE0QgyAqgxgqg");
	this.shape.setTransform(0.2,0.1,0.507,0.507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgxE1QgXk1ACkrQBGg8BIA8QABEsgXE0QgZAVgZAAQgYAAgZgVg");
	this.shape_1.setTransform(0.2,0.1,0.507,0.507);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-20.5,9.3,38.3);


// stage content:
(libI.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libI.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80.7,125.9,11.8,50.8);

})(libI = libI||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libI, images, createjs, ss;