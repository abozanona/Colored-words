(function (libS, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libSrary properties:
libS.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libS.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AAQjfQg2AAgdAUQgcATABAjQABAeAcAQQATALBqAkQBgAgAlAlQAjAmgMBKQgPBYhABBQhABAhFgBQg3ABhWgmIgdgNQgEgpgEg1QBrAdBDAAQApAAAYgWQAYgWADgqQACgfgWgQQgUgQhEgWQhuggg0gnQgzgpgFhFQgFhZBBg8QBIhCBnAAQBVgBBwApIAlAPIgNBgQh9gghRgBg");
	this.shape.setTransform(0.1,0.3,0.436,0.436);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AiJEwIgdgNQgEgpgEg1QBrAdBDAAQApAAAYgWQAYgWADgpQACgggWgQQgUgQhEgWQhuggg0gnQgzgpgFhFQgFhZBBg8QBIhCBnAAQBVgBBwApIAlAPIgNBhQh9ghhRgBQg2AAgdAUQgcATABAjQABAfAcAPQATALBqAlQBgAfAlAmQAjAlgMBKQgPBYhABBQhABAhFgBIgCABQg3AAhUgmg");
	this.shape_1.setTransform(0,0.3,0.436,0.436);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-15.5,22.9,31.8);


// stage content:
(libS.S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libS.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.6,126.9,29.6,48.2);

})(libS = libS||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libS, images, createjs, ss;