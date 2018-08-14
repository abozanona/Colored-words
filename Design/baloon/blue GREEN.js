(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 80,
	height: 110,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.039)").s().p("AAAAvQgfgvgOgnQgMgigFgfQCOAxgTCgQglgVgYglg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-10.5,12.8,21.1);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(148,185,130,0.11)").s().p("AgYBrQgBgQgRgrQgSgsAAgjQAAgmAYgYQAXgXAgAJQAiAKAGAfQAFAfgHAlQgHAngmAoQgZAegIAAQgDAAAAgEg");
	this.shape.setTransform(7.5,0.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#82BDDB","#065C70"],[0,0.996],2.7,-16.2,-2.7,12.2).s().p("AAADEQgKgBgBgCQgCgFAKgHQhBgZgmg4QgggvgHg3QgIhBAfgzQAPgYAWgTQAngjAtAAQBBABA1BLQAXAjAFAiQANBGgyBJQgaAngfAZQgSAOgTAKIADAEIAHAHIADADQgBACgKABIgGAAIgKgBg");

	this.addChild(this.shape_1,this.shape);
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


(lib.Tween1_1 = function() {
	this.initialize();

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(60,86,215,0.09)").s().p("Ag1g6IAAgCQAEgSAcAaQAaAaAIANIAWAlQAPAbAEAOIAAADQhQgugbhQg");
	this.shape_2.setTransform(-12,16.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#80DD83","#287205"],[0,0.996],6.4,-21.7,-6.7,15.9).s().p("AgVEPQgMgBgMgDQgPgDAAgEQgCgGAPgIQhTgwgphTQgjhHADhOQADhbA0g+QAagfAhgVQA9gnA7AJQA7AKAuA0QAZAcASAmQAXAuACA2QADBjhTBaQgtAwguAbQgbAPgaAKIADAGIAIALQADADAAABQgBADgHAAIgHgBg");

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-27.2,41,54.5);


(lib.Path_1_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#68D868","rgba(156,242,172,0.2)"],[0,0.996],-4.3,-16.3,2.7,8.8).s().p("Ag7BJQgUhXAfhDQATgnAhgiQAggfAJAGQABABAAALQAAAOAFAKQAFALAMAIQgoATgYAlQgcAwAKA/QAGAhALAbQgOALgIATQgJAYAKAYQgdg3gMg1g");
	this.shape_1.setTransform(6.8,18.1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.7,36.3);


(lib.Path_2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(104,216,104,0)","#8EEF8E"],[0,0.996],5.9,-6.2,-5,5.4).s().p("ABSBRQgTgCgOAFQgEglgUgbQgUgagcgKQgbgJgdAIQgQgLgGgQQgFgQADgGQAIgVAyABQAyACAQAaQAEAHAAAIIAAAOQAAA3BQA9QgLgEgMgCg");
	this.shape_1.setTransform(10.6,8.7);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,17.5);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(8.2,-10.6,1,1,0,0,0,10.6,8.8);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(-11.8,1.3,1,1,0,0,0,6.9,18.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-19.4,37.4,38.9);


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
(lib.blueGREEN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(46,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:1,skewX:-10,skewY:-5.5,x:51.6,y:34.7},15).to({scaleX:0.92,scaleY:0.9,rotation:11,skewX:0,skewY:0,x:48.2,y:28.9},14).to({scaleX:1,scaleY:1,rotation:0,x:46,y:34.5},13).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween1_1("synched",0);
	this.instance_1.setTransform(46.3,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:52},15).to({x:47.1,y:34},14).to({x:46.3,y:39.5},13).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59595C").ss(0.3).p("AAeibIgJAjQgMApgPApQgQAmgDALQgPA+AvBR");
	this.shape.setTransform(39.5,80.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59595C").ss(0.3).p("AAACdQgJgTgGgQQgKgXgDgYQgGghAJgeQAEgMAOgfQATgxALgpQADgMADgMIADgL");
	this.shape_1.setTransform(39.7,80.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59595C").ss(0.3).p("AgICeQgIgTgFgQQgIgWgCgZQgEghAKgfQAFgMAOggQAVgwALgqQADgMACgNIADgL");
	this.shape_2.setTransform(39.8,80.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59595C").ss(0.3).p("AgSChQgFgUgEgQQgHgWAAgbQgDggAMggQAFgMAPgfQAWgyALgqQADgNACgMIADgM");
	this.shape_3.setTransform(40,80.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59595C").ss(0.3).p("AgaCjQgEgVgDgQQgFgVABgcQgCghAOggQAGgMAPgfQAYgzALgrQADgMACgNIACgM");
	this.shape_4.setTransform(40.2,81);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59595C").ss(0.3).p("AgiClQgCgWgCgQQgEgUAEgeQgBggAPghQAHgNAPgfQAagyALgsQACgNACgNIACgM");
	this.shape_5.setTransform(40.2,81.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59595C").ss(0.3).p("AgpCnQgBgXgBgPQgCgTAFggQABggAQgiQAIgNAPgeQAcg0AKgsQADgNACgNIACgM");
	this.shape_6.setTransform(40.3,81.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59595C").ss(0.3).p("AgwCpQABgYAAgPQgBgSAHghQACggASgjQAJgOAOgdQAfg1AKgsQADgNABgOIACgM");
	this.shape_7.setTransform(40.2,81.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59595C").ss(0.3).p("Ag2CqQADgZACgOQAAgSAIgjQAEgfATgkQAKgOAOgdQAhg1AKgtQADgOABgNIABgN");
	this.shape_8.setTransform(40.1,81.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#59595C").ss(0.3).p("Ag7CsQAEgaADgOQABgRALgkQAFggAUgkQALgPAPgcQAig2AKguQACgNACgOIABgN");
	this.shape_9.setTransform(39.9,82);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59595C").ss(0.3).p("AhBCuQAGgbAEgNQADgRAMgmQAGgfAWglQAMgQAPgbQAkg3AJguQADgOABgOIABgN");
	this.shape_10.setTransform(39.8,82.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#59595C").ss(0.3).p("AhGCwQAHgcAGgNQAEgQAOgnQAIgfAXgmQAKgRASgbQAlg2AKgvQACgOABgPIABgN");
	this.shape_11.setTransform(39.6,82.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59595C").ss(0.3).p("AhLCyQAIgdAHgNQAGgPAPgpQAJgfAZgmQALgRASgbQAng3AJgwQADgOABgOIAAgO");
	this.shape_12.setTransform(39.4,82.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#59595C").ss(0.3).p("AhRC0QAKgeAIgNQAHgOARgrQALgeAagnQAMgSATgaQAog4AJgwQADgPAAgOIABgO");
	this.shape_13.setTransform(39.3,82.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59595C").ss(0.3).p("AhWC1QAMgeAJgMQAIgOATgsQAMgeAagoQAOgTATgZQArg5AIgwQADgPAAgPIAAgO");
	this.shape_14.setTransform(39.1,83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#59595C").ss(0.3).p("ABdi4IAAAOQABBBg5BHQg2BFgVAuQgVAugJAMQgKANgOAf");
	this.shape_15.setTransform(38.9,83.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59595C").ss(0.3).p("AhZC2QAMgfAKgOQAJgOAUgsQAUgsA2hEQA3hGgChCIAAgO");
	this.shape_16.setTransform(38.9,82.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#59595C").ss(0.3).p("AhVC2QAJgfAKgQQAJgPATgrQATgrA1hCQA3hFgDhDIAAgO");
	this.shape_17.setTransform(38.9,82.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59595C").ss(0.3).p("AhSC1QAHgfAKgRQAJgRARgpQASgpA1hCQA2hEgDhEIAAgO");
	this.shape_18.setTransform(38.9,82.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#59595C").ss(0.3).p("AhPC1QAGgfAJgSQAJgTAQgnQARgoA0hBQA2hDgEhFIAAgO");
	this.shape_19.setTransform(38.8,81.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59595C").ss(0.3).p("AhMC0QAEgfAJgUQAIgUAQgmQAQgmAzhAQA1hCgFhFIAAgO");
	this.shape_20.setTransform(38.8,81.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#59595C").ss(0.3).p("AhJC0QACggAIgVQAJgVAOgkQAPglAzg/QA0hBgFhGIAAgO");
	this.shape_21.setTransform(38.8,80.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59595C").ss(0.3).p("AhGC0QAAghAIgWQAIgXAOgjQAOgiAyg+QAzhBgFhHIAAgO");
	this.shape_22.setTransform(38.8,80.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#59595C").ss(0.3).p("AhCCzQgCggAIgYQAHgZANghQANghAxg9QAzg/gGhIIAAgO");
	this.shape_23.setTransform(38.8,80.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59595C").ss(0.3).p("Ag+CyQgEggAHgaQAHgZAMggQAMgfAxg8QAyg/gHhIIAAgO");
	this.shape_24.setTransform(38.7,79.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#59595C").ss(0.3).p("Ag7CxQgGggAIgbQAGgbALgeQALgeAwg7QAyg+gIhJIAAgO");
	this.shape_25.setTransform(38.6,79.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59595C").ss(0.3).p("Ag3CwQgHggAGgcQAHgdAKgcQAKgcAvg7QAxg8gIhKIAAgO");
	this.shape_26.setTransform(38.5,79);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59595C").ss(0.3).p("AgzCwQgJghAGgdQAGgfAJgaQAJgbAvg5QAwg8gJhLIAAgO");
	this.shape_27.setTransform(38.4,78.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59595C").ss(0.3).p("AgvCvQgLghAGgfQAGgfAIgZQAIgaAug4QAwg6gKhMIAAgO");
	this.shape_28.setTransform(38.3,78.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#59595C").ss(0.3).p("AAzivIAAAOQALBNgvA5QguA4gHAXQgHAYgFAhQgGAgANAh");
	this.shape_29.setTransform(38.2,78);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#59595C").ss(0.3).p("AgnCrQgOggAFggQAEghAHgXQADgQAVgdQALgOAOgUQAlg2ABg0QAAgNgBgOIAAgO");
	this.shape_30.setTransform(38.4,78.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#59595C").ss(0.3).p("AgjCrQgOggADgfQAEggAFgXQAEgRATgcQAKgNAOgVQAkg2ACgzQAAgNgBgOIAAgO");
	this.shape_31.setTransform(38.5,78.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#59595C").ss(0.3).p("AggCpQgOgfACgeQACggAFgXQADgRASgcQAJgNAOgWQAig2ADgxQABgNgBgOIABgN");
	this.shape_32.setTransform(38.7,78.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#59595C").ss(0.3).p("AgcCoQgPgfACgeQABgeAEgYQACgSARgaQAJgNAMgWQAig2AEgxQABgNgBgNIABgO");
	this.shape_33.setTransform(38.8,78.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#59595C").ss(0.3).p("AgZCmQgOgeAAgdQAAgeADgYQACgSAPgaQAIgMANgXQAgg2AFgwQABgNAAgNIABgN");
	this.shape_34.setTransform(38.9,78.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#59595C").ss(0.3).p("AgVClQgPgegBgcQgBgeACgXQACgTAOgaQAHgLANgYQAeg2AGgvQABgMAAgNIACgN");
	this.shape_35.setTransform(39.1,79);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#59595C").ss(0.3).p("AgSCjQgOgdgCgcQgDgcACgYQABgUANgZQAGgLAOgYQAcg2AGguQACgNAAgMIACgN");
	this.shape_36.setTransform(39.2,79.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#59595C").ss(0.3).p("AgOCiQgPgdgDgbQgEgcACgXQAAgVAMgYQAGgLANgZQAag2AHgtQACgMABgNIACgM");
	this.shape_37.setTransform(39.3,79.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#59595C").ss(0.3).p("AgJCgQgPgcgFgaQgFgcABgXQAAgVAKgYQAFgKANgaQAZg2AIgsQACgMACgMIACgN");
	this.shape_38.setTransform(39.3,79.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#59595C").ss(0.3).p("AgFCfQgPgcgGgaQgGgaAAgYQAAgWAIgWQAFgLAMgZQAZg2AIgsQADgMACgMIACgM");
	this.shape_39.setTransform(39.4,79.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#59595C").ss(0.3).p("AAACdQgQgbgGgZQgIgaAAgYQgCgWAIgWQAEgLAMgaQAXg2AJgqQADgMACgMIADgM");
	this.shape_40.setTransform(39.4,79.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#59595C").ss(0.3).p("AACCcQgOgbgHgYQgJgagBgXQgCgXAGgWQAEgLALgZQAWg2AKgqQADgLADgMIACgM");
	this.shape_41.setTransform(39.5,80.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(23.1,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:9.7,x:26.5,y:55.9},15).to({x:24.1,y:53.5},14).to({rotation:0,x:23.1,y:58},13).wait(1));

	// Layer 4
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(31.1,52.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.81,x:34.9,y:50.7},15).to({scaleX:0.9,scaleY:1.15,skewY:-26.2,x:31.1,y:48.1},14).to({scaleX:1,scaleY:1,skewY:0,y:52.5},13).wait(1));

	// Layer 1
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(23.3,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:26.3,y:59.1},15).to({x:23.3,y:56.1},14).to({y:61.1},13).wait(1));

	// Layer 2
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#59595C").ss(0.3).p("AAKh7IgKAdQgLAhACAVQAFApADAqQACA9gDAR");
	this.shape_42.setTransform(23,91.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#59595C").ss(0.3).p("AgIB4QAFgNAAgoQgBgsgCgWQgBgSgCgVQgBgWAKghIALgd");
	this.shape_43.setTransform(23.2,91.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#59595C").ss(0.3).p("AgLB2QAFgMACgoQAAgrgBgVQAAgTgCgVQgBgWAJggIALgd");
	this.shape_44.setTransform(23.2,91.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#59595C").ss(0.3).p("AgOB1QAGgMADgnQADgrgBgUQAAgTgBgVQgBgWAJggIALgc");
	this.shape_45.setTransform(23.1,91);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#59595C").ss(0.3).p("AgRB0QAHgMAFgmQAEgqAAgUQAAgTAAgUQAAgXAIgfIALgd");
	this.shape_46.setTransform(23,90.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#59595C").ss(0.3).p("AgUByQAIgLAGglQAGgqAAgUQAAgSAAgUQAAgXAKgfIALgd");
	this.shape_47.setTransform(22.9,90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#59595C").ss(0.3).p("AgXBxQAJgKAHglQAHgpAAgTQABgTABgUQABgXAKgfIAKgc");
	this.shape_48.setTransform(22.8,90.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#59595C").ss(0.3).p("AgaBwQAKgKAJgkQAHgoABgUQACgSABgUQADgYAJgeIAKgc");
	this.shape_49.setTransform(22.7,90.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#59595C").ss(0.3).p("AgcBuQAKgJALgjQAJgoACgTQACgSACgUQACgYAKgdIAKgc");
	this.shape_50.setTransform(22.6,89.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#59595C").ss(0.3).p("AgfBtQALgJAMgiQALgnACgTQADgSACgUQAEgYAJgdIAKgc");
	this.shape_51.setTransform(22.5,89.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#59595C").ss(0.3).p("AgiBsQAMgIAOgiQAMgmADgTQADgSADgUQAEgYAJgcIAJgd");
	this.shape_52.setTransform(22.4,89.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#59595C").ss(0.3).p("AglBqQANgHAPghQAPgmADgSQADgSAEgUQAFgZAIgbIAJgd");
	this.shape_53.setTransform(22.3,89.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#59595C").ss(0.3).p("AgoBpQAOgHARggQAQglAEgSQAEgSAEgTQAFgZAIgcIAJgc");
	this.shape_54.setTransform(22.2,88.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#59595C").ss(0.3).p("AgrBoQAPgHASgfQASglAEgSQAFgRAEgTQAGgaAIgbIAJgc");
	this.shape_55.setTransform(22.1,88.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#59595C").ss(0.3).p("AgtBmQAPgGAUgeQATglAFgRQAFgRAFgUQAHgZAIgbIAIgc");
	this.shape_56.setTransform(22,88.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#59595C").ss(0.3).p("AAyhoIgiB1QgIAYgTAdQgVAdgQAG");
	this.shape_57.setTransform(21.9,88.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#59595C").ss(0.3).p("AgtBmQANgGARgYQAPgZAIgRQAPgsAHgeIAQg9");
	this.shape_58.setTransform(22,88.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#59595C").ss(0.3).p("AgqBoQAMgHAQgYQAOgaAHgRQAOgtAIgfIAOg9");
	this.shape_59.setTransform(22.1,88.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#59595C").ss(0.3).p("AgnBqQALgIAOgZQAOgaAHgRQANgtAHggIANg+");
	this.shape_60.setTransform(22.2,88);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#59595C").ss(0.3).p("AgjBrQAJgJANgYQANgbAGgSQANgtAGghIALg+");
	this.shape_61.setTransform(22.3,88);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#59595C").ss(0.3).p("AggBtQAIgJAMgZQAMgcAGgSQAMgtAFghIAKg/");
	this.shape_62.setTransform(22.4,87.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#59595C").ss(0.3).p("AgcBvQAGgLALgZQALgcAFgTQALgsAFgjIAJg/");
	this.shape_63.setTransform(22.5,87.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#59595C").ss(0.3).p("AgZBwQAEgLAKgaQAKgcAFgTQALgsAEgkIAHhA");
	this.shape_64.setTransform(22.7,87.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#59595C").ss(0.3).p("AgWByQADgLAJgbQAJgcAFgUQAKgsADglIAGhA");
	this.shape_65.setTransform(22.8,87.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#59595C").ss(0.3).p("AgTB0QACgNAHgbQAJgdAEgTQAJgtADgmIAFhA");
	this.shape_66.setTransform(22.9,87.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#59595C").ss(0.3).p("AgPB1QAAgNAGgbQAHgeAFgUQAIgsACgnIAEhB");
	this.shape_67.setTransform(23,87.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#59595C").ss(0.3).p("AgMB3QgBgOAFgbQAGgfAEgUQAIgtABgnIAChC");
	this.shape_68.setTransform(23.1,87.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#59595C").ss(0.3).p("AgJB5QgCgPAEgcQAEgfAFgUQAHgtAAgoIABhC");
	this.shape_69.setTransform(23.2,87.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#59595C").ss(0.3).p("AgFB7QgEgQADgcQAEggAEgVQAGgsAAgqIgBhC");
	this.shape_70.setTransform(23.2,87.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#59595C").ss(0.3).p("AAEiAIACBDQABBFgGASQgFAZgBAcQgCAdAGAQ");
	this.shape_71.setTransform(23.3,87);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#59595C").ss(0.3).p("AgBB8QgFgRABgfQACgeAEgZQAEgTABhCIgBhA");
	this.shape_72.setTransform(23.3,87.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#59595C").ss(0.3).p("AgBB7QgEgQABgiQABgeADgcQAEgRAChAIAAg9");
	this.shape_73.setTransform(23.2,87.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#59595C").ss(0.3).p("AgBB7QgDgQAAgkQABggADgdQACgRADg+IABg6");
	this.shape_74.setTransform(23.2,88.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#59595C").ss(0.3).p("AgCB7QgCgRAAgmQAAghADgeQABgRADg7IADg4");
	this.shape_75.setTransform(23.3,88.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#59595C").ss(0.3).p("AgCB7QgCgRAAgpQAAgiACgfQACgSADg4IADg0");
	this.shape_76.setTransform(23.3,88.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#59595C").ss(0.3).p("AgDB6QgBgQgBgsQAAgjABgfQACgUADg1IAFgx");
	this.shape_77.setTransform(23.3,89.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#59595C").ss(0.3).p("AgDB6QAAgQgCguQAAgkAAggQABgUAEgzIAGgu");
	this.shape_78.setTransform(23.3,89.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#59595C").ss(0.3).p("AgDB6QABgRgCgwQgBglAAgiQAAgUAFgwIAHgr");
	this.shape_79.setTransform(23.3,89.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#59595C").ss(0.3).p("AgDB6QACgRgDgzQgBgmgBgjQAAgVAGgsIAHgp");
	this.shape_80.setTransform(23.2,90.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#59595C").ss(0.3).p("AgDB6QADgRgDg1QgCgngCglQAAgVAHgpIAIgm");
	this.shape_81.setTransform(23.2,90.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#59595C").ss(0.3).p("AgDB5QADgQgCg4QgCgpgDglQgCgVAJgnIAJgj");
	this.shape_82.setTransform(23.1,90.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#59595C").ss(0.3).p("AgCB5QACgQgCg7QgCgpgEgnQgCgVAKgkIAKgg");
	this.shape_83.setTransform(23.1,91.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.5,67.3,58.3,92.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;