(function (libW, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libWrary properties:
libW.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libW.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AmdkLQA8gJBLgIQAQBtAhCCQAaBjArCMIALAAQADhtAWiEQARhkAiiWQBJgCBKACQAiCaAQBgQAXCFACBsQAIAAADAAQAsiOAZhhQAiiDAQhsQBLAIA8AJQgZB4g8CXQgrBuhRCvQhLAIg9ACQgFhlgUh8QgPhZgdiKQgcCLgPBYQgUB8gFBlQg8gChMgIQhSivgrhuQg7iXgZh4g");
	this.shape.setTransform(0.6,0.8,0.446,0.478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AAsBLQgPhagdiKQgcCLgOBZQgVB8gFBkQg8gChMgIQhSivgqhtQg8iYgZh4QA8gIBLgJQARBtAgCCQAbBjArCMIAKABQADhuAXiEQAQhjAiiXQBJgCBKACQAiCaARBgQAWCFACBtIAMgBQAriNAZhiQAiiDAQhsQBLAJA8AIQgZB4g8CYQgrBthRCvQhLAIg9ACQgFhlgUh7g");
	this.shape_1.setTransform(0.6,0.8,0.446,0.478);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.8,-14.4,39,30.6);


// stage content:
(libW.W = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libW.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.3,134.1,51.6,40.4);

})(libW = libW||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libW, images, createjs, ss;