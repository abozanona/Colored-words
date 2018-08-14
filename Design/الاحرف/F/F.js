(function (libF, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libFrary properties:
libF.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libF.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AidE0QhHkxADkpQDhhDDiBDQAAAwgBA7QibgeiXALQACBhADBgQB6gCBxAEQgDAxgHA7QhnAFh1gDQAGB0AJBxQgzgGgygOg");
	this.shape.setTransform(1.3,-0.5,0.517,0.517);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AidE0QhHkxADkoQDhhEDiBEQAAAvgBA7QibgeiXALQACBiADBfQB6gBBxADQgDAxgHA7QhnAFh1gCQAGB0AJBwQgzgFgygPg");
	this.shape_1.setTransform(1.3,-0.5,0.517,0.517);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.3,-18.5,25.4,36);


// stage content:
(libF.F = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libF.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.4,128.7,33.4,47.6);

})(libF = libF||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libF, images, createjs, ss;