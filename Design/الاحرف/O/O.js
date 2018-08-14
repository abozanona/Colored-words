(function (libO, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libOrary properties:
libO.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libO.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("ACvD6QhKBchlAAQhkAAhKhcQhNhkgViOQgWiWBEhgQAigvA4gbQA8gcBMgBQBNABA8AcQA4AbAiAvQBEBfgWCXQgVCPhNBjgAhfCuQAfA1BAAAQBBAAAfg1QAfg3AIhxQAIhxgeg6Qgfg5hSAAQhRAAgfA5QgeA5AHByQAIBwAgA4g");
	this.shape.setTransform(-0.1,0.3,0.418,0.418);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AiuD6QhNhkgViOQgWiWBEhgQAigvA4gbQA8gcBMgBQBNABA8AcQA4AbAiAvQBEBfgWCXQgVCPhNBjQhKBchlAAQhkAAhKhcgAhwilQgeA5AHByQAIBwAgA4QAfA1BAAAQBBAAAfg1QAfg3AIhxQAIhxgeg6Qgfg5hSAAQhRAAgfA5g");
	this.shape_1.setTransform(-0.1,0.3,0.418,0.418);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.7,-15.2,25.4,30.9);


// stage content:
(libO.O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libO.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(69.5,133.4,33.3,40.4);

})(libO = libO||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libO, images, createjs, ss;