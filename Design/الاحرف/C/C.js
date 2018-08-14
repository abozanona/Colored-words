(function (libC, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libCrary properties:
libC.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libC.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("ACdEbQhQAng5ACQg1ADgqgZQgjgVgggvQgegtgRg0QgTg7gJhJQgSidA6hUQAdgqAxgWQA3gaBEADQBZADBtA0QgDAvgDAtQhcgchGgEQg9gDgdASQgcASgMAtQgNAvAEBpQAFBpAaAsQAaAsA9gCQA/gCBPgXQgIAxgKAug");
	this.shape.setTransform(0.1,0.1,0.561,0.561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AhLEuQgjgVgggvQgegtgRg0QgTg7gJhJQgSidA6hUQAdgqAxgWQA3gaBEADQBZADBtA0IgGBcQhcgchGgEQg9gDgdASQgcASgMAtQgNAvAEBpQAFBpAaAsQAaAsA9gCQA/gCBPgXQgIAxgKAuQhQAng5ACIgLABQguAAgmgXg");
	this.shape_1.setTransform(0.1,0.1,0.561,0.561);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-19.6,27,39);


// stage content:
(libC.C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libC.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.6,127.1,35.5,51.7);

})(libC = libC||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libC, images, createjs, ss;