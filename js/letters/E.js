(function (libE, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libErary properties:
libE.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libE.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AifEyQhIktADktQDkhCDlBCQAAAwgBA7QibgeidALQABA0ADBmQB3gDB4AGQgDA1gGA3Qh+ABhkAAQAEBMAFBPQB+AHB8gUQgLA7gMAvQigAwifgwg");
	this.shape.setTransform(1.5,-0.2,0.519,0.519);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AifEyQhIkuADkrQDkhDDlBDQAAAvgBA8QibgfidAMIAECZQB3gDB5AGQgEA1gFA2Qh/AChkgBQAEBNAFBOQB/AIB7gVQgLA7gLAwQhRAYhQAAQhPAAhQgYg");
	this.shape_1.setTransform(1.5,-0.2,0.519,0.519);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.4,-18.3,25.8,36.3);


// stage content:
(libE.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libE.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.3,128.9,34,47.9);

})(libE = libE||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libE, images, createjs, ss;