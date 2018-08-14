(function (libA, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libArary properties:
libA.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libA.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AhzCzQgJhNANhjQAKhIAahzQBLgIBMAIQAaBzAKBIQANBjgJBNQgbAHgeADQAAgegEgkQg3ACg2gCQgEAkAAAeQgegDgbgHgAgMh8QgXBpgLBMQAuABAvgBQgLhMgXhpg");
	this.shape.setTransform(-0.2,-0.1,0.969,0.969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AA3B7Qg3ACg2gCQgEAlAAAdQgegDgbgGQgJhOANhjQAKhIAahzQBLgIBMAIQAaBzAKBIQANBjgJBOQgbAGgeADQAAgdgEglgAguA5QAuABAvgBQgLhMgXhoIgZAAQgXBogLBMg");
	this.shape_1.setTransform(-0.2,-0.1,0.969,0.969);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.8,-19.5,25.3,38.8);


// stage content:
(libA.A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libA.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.4,127.4,33.2,51.3);

})(libA = libA||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libA, images, createjs, ss;