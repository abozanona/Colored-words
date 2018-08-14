(function (libJ, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libJrary properties:
libJ.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libJ.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AhXFXQgGg0gFg3QAfALARgMQAPgNgBgnQgGj0AAkoQBGgNBHAtQACEDgTD0QgIBggpAyQgzA+hFgrg");
	this.shape.setTransform(0.1,0.4,0.488,0.488);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AhYFXQgGg0gEg3QAfALAQgMQAPgNgBgnQgFj0AAkoQBFgNBIAtQABEDgTD0QgHBggpAyQgfAlgjAAQgaAAgdgSg");
	this.shape_1.setTransform(0.1,0.4,0.488,0.488);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.7,-20.9,11.7,39.8);


// stage content:
(libJ.J = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libJ.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(78.9,125.2,15.1,53.1);

})(libJ = libJ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libJ, images, createjs, ss;