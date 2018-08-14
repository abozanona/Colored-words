(function (libT, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libTrary properties:
libT.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libT.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AkCi6QgCg3ABg2QEDhEEEBEQABA2gDA3QhYgQhigFQgDETgSEFQgyADgxgDQgTkOgCkKQhcAEhhARg");
	this.shape.setTransform(0,0.3,0.448,0.448);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgwFJQgTkOgCkKQhcAEhhARQgCg3ABg2QEDhEEEBEQABA2gDA3QhYgQhigFQgDETgSEFQgZABgZAAIgxgBg");
	this.shape_1.setTransform(0,0.3,0.448,0.448);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-15.5,25.3,31.7);


// stage content:
(libT.T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libT.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.6,132.5,68.2,41.9);

})(libT = libT||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libT, images, createjs, ss;