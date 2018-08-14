(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 40,
	height: 80,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#82BDDB","#065C70"],[0,0.996],2.7,-16.2,-2.7,12.2).s().p("AAADEQgKgBgBgCQgCgFAKgHQhBgZgmg4QgggvgHg3QgIhBAfgzQAPgYAWgTQAngjAtAAQBBABA1BLQAXAjAFAiQANBGgyBJQgaAngfAZQgSAOgTAKIADAEIAHAHIADADQgBACgKABIgGAAIgKgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.8,-19.7,29.7,39.5);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#69B7D6","rgba(156,237,239,0.2)"],[0,0.996],-4.1,-11.1,3.6,6.1).s().p("AgbA7QgYg7AQgzQAJgeAWgcQASgaAGADQABABABAIQABAKAFAGQAFAIAKAEQgbATgNAcQgPAmANArQAHAXAMASQgLALgCANQgEASAJARQgZglgOglg");
	this.shape.setTransform(4.3,13.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,26.7);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(105,183,214,0)","#8ECCED"],[0,0.996],3.4,-4.9,-3.1,4.6).s().p("AATANQgSgQgUgEQgUgDgUAIQgNgGgGgLQgGgIACgHQADgQAlgEQAlgFAMARQAEAFACAPQAGAnBAAkQgJgCgIAAQgLAAgMAFQgHgZgRgSg");
	this.shape.setTransform(8.4,5.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.8,11.4);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(4.9,-9.2,1,1,0,0,0,8.3,5.7);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-8.9,1.6,1,1,0,0,0,4.3,13.3);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.2,-14.9,26.6,29.8);


// stage content:
(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(19.6,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:9.7,x:23,y:24.9},9).to({x:20.6,y:22.5},10).to({rotation:0,x:19.6,y:27},10).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(19.8,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:22.8,y:28.1},9).to({x:19.8,y:25.1},10).to({y:30.1},10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59595C").ss(0.3).p("AAKh7IgKAdQgLAhACAVQAFApADAqQACA9gDAR");
	this.shape.setTransform(19.5,60.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59595C").ss(0.3).p("AgLB3QAGgMABgoQAAgsgCgVQAAgTgCgVQgBgWAJggIALgd");
	this.shape_1.setTransform(19.7,60.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59595C").ss(0.3).p("AgPB0QAHgLADgnQADgqAAgVQAAgSgBgVQAAgXAIgfIALgd");
	this.shape_2.setTransform(19.5,59.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59595C").ss(0.3).p("AgUByQAIgLAGglQAGgqAAgUQAAgSAAgUQAAgXAKgfIALgd");
	this.shape_3.setTransform(19.4,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59595C").ss(0.3).p("AgZBwQAJgKAJgkQAHgoABgUQABgSABgUQACgYAKgeIAKgc");
	this.shape_4.setTransform(19.3,59.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59595C").ss(0.3).p("AgdBuQAKgJAMgjQAJgoACgTQADgSACgUQADgYAJgdIAKgc");
	this.shape_5.setTransform(19,58.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59595C").ss(0.3).p("AgiBsQAMgIAOgiQAMgmADgTQADgSADgUQAEgYAJgcIAJgd");
	this.shape_6.setTransform(18.9,58.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59595C").ss(0.3).p("AgnBqQANgIARggQAPgmAEgSQAEgRADgUQAGgZAIgcIAJgc");
	this.shape_7.setTransform(18.7,58);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59595C").ss(0.3).p("AgsBnQAPgHATgeQASglAFgRQAEgSAFgTQAGgaAIgbIAJgc");
	this.shape_8.setTransform(18.6,57.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#59595C").ss(0.3).p("AAyhoIgiB1QgIAYgTAdQgVAdgQAG");
	this.shape_9.setTransform(18.4,57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59595C").ss(0.3).p("AgsBnQANgGARgYQAOgaAIgRQAOgtAIgeIAPg9");
	this.shape_10.setTransform(18.5,57.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#59595C").ss(0.3).p("AgnBqQAKgIAPgYQAOgaAHgSQANgtAHgfIANg+");
	this.shape_11.setTransform(18.7,57);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59595C").ss(0.3).p("AgiBsQAIgJAOgZQAMgbAGgSQANgtAGghIALg+");
	this.shape_12.setTransform(18.8,56.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#59595C").ss(0.3).p("AgeBuQAHgKAMgZQALgcAGgSQALgtAFgiIAJg/");
	this.shape_13.setTransform(19,56.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59595C").ss(0.3).p("AgZBwQAEgLAKgaQAKgcAFgTQALgsAEgkIAHhA");
	this.shape_14.setTransform(19.2,56.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#59595C").ss(0.3).p("AgVBzQADgMAIgbQAJgdAEgTQAKgtADglIAGhA");
	this.shape_15.setTransform(19.3,56.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59595C").ss(0.3).p("AgQB1QAAgNAHgbQAHgeAFgUQAIgsACgnIAEhB");
	this.shape_16.setTransform(19.5,56.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#59595C").ss(0.3).p("AgLB3QgCgOAFgcQAGgeAEgUQAIgtABgoIAChB");
	this.shape_17.setTransform(19.6,56.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59595C").ss(0.3).p("AgGB5QgDgPADgcQAEgfAEgUQAHgtAAgqIAAhB");
	this.shape_18.setTransform(19.7,56.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#59595C").ss(0.3).p("AAEiAIACBDQABBFgGASQgFAZgBAcQgCAdAGAQ");
	this.shape_19.setTransform(19.8,56);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59595C").ss(0.3).p("AgBB8QgFgRABggQABgeAEgaQAFgTABhAIgBhA");
	this.shape_20.setTransform(19.8,56.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#59595C").ss(0.3).p("AgBB7QgDgQAAgjQABgfADgdQADgRACg/IABg7");
	this.shape_21.setTransform(19.7,56.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59595C").ss(0.3).p("AgCB7QgCgRAAgmQAAghADgeQABgRADg7IADg4");
	this.shape_22.setTransform(19.8,57.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#59595C").ss(0.3).p("AgCB6QgCgQAAgqQAAgiACgeQACgTACg4IAEgz");
	this.shape_23.setTransform(19.8,57.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59595C").ss(0.3).p("AgDB6QAAgQgCgtQAAgjABggQABgUAEg0IAFgw");
	this.shape_24.setTransform(19.8,58.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#59595C").ss(0.3).p("AgDB6QABgQgCgwQgBglAAgiQAAgUAFgwIAHgs");
	this.shape_25.setTransform(19.8,58.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59595C").ss(0.3).p("AgDB6QACgRgDgzQgBgmgBgjQAAgVAGgsIAHgp");
	this.shape_26.setTransform(19.7,59.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59595C").ss(0.3).p("AgDB5QADgQgDg3QgCgogCgkQgBgVAIgpIAIgk");
	this.shape_27.setTransform(19.7,59.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59595C").ss(0.3).p("AgCB5QACgQgCg6QgCgpgEgnQgBgVAJglIAJgg");
	this.shape_28.setTransform(19.6,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25,50.4,29.7,63.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;