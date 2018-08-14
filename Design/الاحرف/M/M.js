(function (libM, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libMrary properties:
libM.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libM.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AkCE0Qh0ktAFksQB+gXB3gHQAFAUA8DcQAnCQAUBeQAUheAoiQQA5jUAIgcQB3AHB+AXQAFEsh0EtQgxAJg0AGQA3jyAKj5IgPgBQgaBNg3CcQgwCMgbBiQg0ADgzgDQgbhigwiMQg3icgahNIgQABQALD1A3D2QgygGgzgJg");
	this.shape.setTransform(0,0.5,0.426,0.426);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("ADfioIgPgBIhRDpQgwCNgbBiQg0ACgzgCQgbhigwiNIhRjpIgQABQALD1A3D3QgygGgzgJQh0kuAFkrQB+gXB3gIIBBDwQAnCQAUBfQAUheAoiRIBBjwQB3AIB+AXQAFErh0EuQgxAJg0AGQA3jzAKj5g");
	this.shape_1.setTransform(0,0.5,0.426,0.426);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-15.2,33.6,30.6);


// stage content:
(libM.M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libM.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.1,134.2,44.3,39.1);

})(libM = libM||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libM, images, createjs, ss;