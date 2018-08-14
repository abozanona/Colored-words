(function (libB, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libBrary properties:
libB.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libB.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0011").p("AAPiJQguAAgiADIADBkIBNgBQAyABACgyQABg0g1gBgAiei+QBZgXBYACQBEACAnAjQAlAhgEA1QgBAggNAUQgNATgbAPQAbAKALAVQAKAVgGAkQgLA2glAjQgkAkguABQg9AChBgQQgzjBACjDgAAQAkIhKAAQADAzAEAzQAiACAggBQAXAAAOgMQANgMACgdQADgyg2AAg");
	this.shape.setTransform(0.5,0,0.891,0.891);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F2F2").s().p("AhtDGQgzjBACjDQBZgXBYACQBEACAnAjQAlAhgEA1QgBAggNAUQgNATgbAPQAbAKALAVQAKAVgGAkQgLA2glAjQgkAkguABIgLAAQg4AAg7gOgAgzCKQAiACAggBQAXAAAOgMQANgMACgdQADgyg2AAIhKAAQADAzAEAzgAhBiGIADBkIBNgBQAyABACgyQABg0g1gBQguAAgiADg");
	this.shape_1.setTransform(0.5,0,0.891,0.891);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.7,-23,30.6,43);


// stage content:
(libB.B = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new libB.Tween3("synched",0);
	this.instance.setTransform(41.3,63.2,1.341,1.341);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.2,y:60.1},9).to({x:37,y:58.9},10).to({x:41,y:63},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66.9,126.8,41.6,52.8);

})(libB = libB||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libB, images, createjs, ss;