(function (libD, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libDrary properties:
libD.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libD.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("ABxBGQAEgeADg0QADg4gDgfQgDgggPgdQgPgcgegLQgggMgxABQg0ABgqAEQAEDUAUDNQAnACAlABQA7AAAhgmQAcghALhKgAgPFKQhSgChVgWQhUktADksQB2gdB5gEQBVgCBAAaQA6AYAiAuQAhAtAJA0QAKA2gLBRQgJBIgWA9QgTA0gjAxQgjAxgsAYQgyAbg7gCg");
	this.shape.setTransform(2.9,-0.3,0.536,0.536);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AgPFKQhSgDhVgVQhUktADksQB2gdB5gFQBVgCBAAbQA6AXAiAvQAhAtAJA0QAKA2gLBQQgJBIgWA+QgTA0gjAxQgjAxgsAYQgvAZg1AAIgJAAgAgYjTQg0ACgqAEQAEDUAUDMQAnADAlABQA7AAAhgmQAcghALhKQAEgfADg0QADg3gDgfQgDgggPgdQgPgcgegLQgfgMgtAAIgFAAg");
	this.shape_1.setTransform(2.9,-0.3,0.536,0.536);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.3,-19.7,30.4,38.6);


// stage content:
(libD.D = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libD.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.1,127.3,40,50.8);

})(libD = libD||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libD, images, createjs, ss;