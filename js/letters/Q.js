(function (libQ, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libQrary properties:
libQ.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libQ.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AAAD9QhuAAhChRQhEhVgNiGQgOiNA/haQAggtAygZQA4gcBGAAQBGAAA4AcQAzAZAgAtQA/BagOCOQgJBUggBCQgeA9gwAnQAbA2ASAyIhfBCQgWg6gihCQgIADgZAAgAhdBkQAdAvBAAAQBBAAAcgvQAegyAFhnQAFhqgdg2Qgeg2hKAAQhKAAgdA2QgdA2AFBqQAFBnAdAyg");
	this.shape.setTransform(-0.1,0.4,0.399,0.399);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AAhD7QgHADgaAAQhtAAhDhRQhEhVgNiFQgNiOA+hZQAggtAzgZQA4gcBFAAQBGAAA4AcQAzAZAgAtQA+BZgNCOQgJBVghBCQgeA9guAnQAaA1ATAzIhgBBQgWg6gihCgAhnjUQgdA2AGBrQAEBnAeAxQAcAvBAAAQBBAAAcgvQAegxAEhnQAGhrgdg2Qgdg2hLAAQhKAAgdA2g");
	this.shape_1.setTransform(-0.1,0.3,0.399,0.399);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-16.1,23.2,32.5);


// stage content:
(libQ.Q = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libQ.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.2,132.5,30.1,42.3);

})(libQ = libQ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libQ, images, createjs, ss;