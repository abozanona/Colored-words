(function (libZ, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libZrary properties:
libZ.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libZ.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("Ajoi9QgBgjAAhHQDphEDqBEQABAvgCA7QhLBPhNBqQhKBkg3BlIAAARQB2AFB2gTQgLA2gNA1QikAuijguQgNg4gKgyQAnhSBEhrQBBhlBLhnIAAgRQiRgIiUAcg");
	this.shape.setTransform(-0.1,0.3,0.454,0.454);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AijEzQgNg4gKgyQAnhSBEhrQBBhlBLhnIAAgRQiRgIiUAcQgBgjAAhHQDphEDqBEQABAvgCA7QhLBPhNBqQhKBkg3BlIAAARQB2AFB2gTQgLA2gNA1QhSAXhSAAQhRAAhSgXg");
	this.shape_1.setTransform(-0.1,0.3,0.454,0.454);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.7,-15.7,23.3,32);


// stage content:
(libZ.Z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libZ.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:41.9,y:62.8},1).to({x:46.2,y:60.1},8).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(70.8,132.4,30.6,42.2);

})(libZ = libZ||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libZ, images, createjs, ss;