(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 60,
	height: 100,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#80DD83","#287205"],[0,0.996],6.4,-21.7,-6.7,15.9).s().p("AgVEPQgMgBgMgDQgPgDAAgEQgCgGAPgIQhTgwgphTQgjhHADhOQADhbA0g+QAagfAhgVQA9gnA7AJQA7AKAuA0QAZAcASAmQAXAuACA2QADBjhTBaQgtAwguAbQgbAPgaAKIADAGIAIALQADADAAABQgBADgHAAIgHgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-27.2,41,54.5);


(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#68D868","rgba(156,242,172,0.2)"],[0,0.996],-4.3,-16.3,2.7,8.8).s().p("Ag7BJQgUhXAfhDQATgnAhgiQAggfAJAGQABABAAALQAAAOAFAKQAFALAMAIQgoATgYAlQgcAwAKA/QAGAhALAbQgOALgIATQgJAYAKAYQgdg3gMg1g");
	this.shape.setTransform(6.8,18.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.7,36.3);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(104,216,104,0)","#8EEF8E"],[0,0.996],5.9,-6.2,-5,5.4).s().p("ABSBRQgTgCgOAFQgEglgUgbQgUgagcgKQgbgJgdAIQgQgLgGgQQgFgQADgGQAIgVAyABQAyACAQAaQAEAHAAAIIAAAOQAAA3BQA9QgLgEgMgCg");
	this.shape.setTransform(10.6,8.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,17.5);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(8.2,-10.6,1,1,0,0,0,10.6,8.8);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(-11.8,1.3,1,1,0,0,0,6.9,18.1);
	this.instance_1.alpha = 0.5;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-19.4,37.4,38.9);


// stage content:
(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(30.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9,scaleY:1,skewX:-10,skewY:-5.5,x:36.1,y:33.7},18).to({scaleX:0.92,scaleY:0.9,rotation:11,skewX:0,skewY:0,x:32.7,y:27.9},17).to({scaleX:1,scaleY:1,rotation:0,x:30.5,y:33.5},16).wait(1));

	// Layer 1
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(30.8,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:36.5},18).to({x:31.6,y:33},17).to({x:30.8,y:38.5},16).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59595C").ss(0.3).p("AAeibIgJAjQgMApgPApQgQAmgDALQgPA+AvBR");
	this.shape.setTransform(24,79.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59595C").ss(0.3).p("AAACbQgHgNgGgOQgNgdgDgbQgFghAIgcQAEgLARglQASgrALgoQADgMADgNIADgK");
	this.shape_1.setTransform(24,79.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59595C").ss(0.3).p("AgICbQgHgOgGgOQgMgdgBgdQgDggAKgcQAFgLARglQAVgqALgoQADgNADgNIADgK");
	this.shape_2.setTransform(24,79.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59595C").ss(0.3).p("AgQCbQgHgOgFgOQgLgcABgfQgCgfAMgdQAHgMASgjQAXgqALgpQADgMADgOIACgK");
	this.shape_3.setTransform(24,79.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59595C").ss(0.3).p("AgYCcQgGgOgFgPQgKgcAEgfQgBggAOgcQAHgMATgiQAZgrAMgoQADgNADgOIACgL");
	this.shape_4.setTransform(23.9,79.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59595C").ss(0.3).p("AggCdQgFgPgDgQQgKgbAGggQABggAPgcQAJgMATgiQAcgqAMgpQAEgNACgOIACgL");
	this.shape_5.setTransform(23.8,79.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59595C").ss(0.3).p("AgnCdQgEgOgDgRQgJgbAIgiQADgfAQgcQAKgNATggQAggqAMgpQAEgNABgOIACgM");
	this.shape_6.setTransform(23.6,79.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59595C").ss(0.3).p("AguCeQgEgPgDgRQgIgaALgjQAEgfASgcQALgNATgfQAjgqAMgqQAEgNACgPIACgL");
	this.shape_7.setTransform(23.5,79.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59595C").ss(0.3).p("Ag1CfQgDgPgCgSQgHgaANgkQAGgfATgcQAMgOAUgeQAlgpANgqQAEgOABgOIACgM");
	this.shape_8.setTransform(23.3,80);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#59595C").ss(0.3).p("Ag8CgQgCgPgCgSQgGgaAPgmQAIgeAVgdQANgNAVgdQAngpANgrQAEgOABgPIACgM");
	this.shape_9.setTransform(23.2,80.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59595C").ss(0.3).p("AhCCgQgCgPgCgSQgFgaASgnQAJgeAXgcQAOgOAVgcQArgpAMgrQAEgOABgPIACgM");
	this.shape_10.setTransform(23,80.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#59595C").ss(0.3).p("AhJChQgBgPgBgTQgFgaAVgoQALgeAYgcQAPgPAWgaQAtgpANgrQAEgPABgPIABgM");
	this.shape_11.setTransform(22.8,80.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59595C").ss(0.3).p("AhPChQgBgPgBgUQgDgZAXgpQAMgdAagdQAQgPAXgZQAvgpANgrQAEgPABgQIABgM");
	this.shape_12.setTransform(22.6,80.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#59595C").ss(0.3).p("AhWCiQAAgPAAgUQgDgZAagrQANgdAcgcQARgQAYgYQAxgoAOgsQAEgPAAgQIABgN");
	this.shape_13.setTransform(22.4,80.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59595C").ss(0.3).p("AhcCjQABgQABgVQgCgYAbgsQAQgdAcgcQATgQAZgXQA0goANgtQAFgPAAgQIAAgN");
	this.shape_14.setTransform(22.1,80.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#59595C").ss(0.3).p("AhiCkQABgQACgWQgBgYAegsQARgdAegdQATgPAagXQA2goAOgsQAFgQAAgQIAAgN");
	this.shape_15.setTransform(21.8,80.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59595C").ss(0.3).p("AhoCkQACgQACgWQAAgXAgguQASgdAggcQAUgRAbgVQA5goAOgtQAFgPAAgRIAAgN");
	this.shape_16.setTransform(21.6,80.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#59595C").ss(0.3).p("AhuClQACgQADgXQABgXAigvQAUgcAigcQAUgRAcgVQA8gnAOgtQAFgQgBgRIABgO");
	this.shape_17.setTransform(21.3,80.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59595C").ss(0.3).p("AB0iqIAAAOQACBChNAxQhLAvglAxQglAwgCAXQgDAXgDAR");
	this.shape_18.setTransform(21.1,80.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQADgQAEgXQADgWAmgwQAlgvBKgxQBLgzgChCIAAgO");
	this.shape_19.setTransform(20.8,80.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQADgQAFgWQAEgWAmguQAlgvBJgyQBKg0gChDIAAgO");
	this.shape_20.setTransform(20.5,80.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAEgQAGgVQAFgVAmguQAmguBHgzQBJg1gDhEIAAgO");
	this.shape_21.setTransform(20.2,80);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAFgQAGgUQAGgVAmgsQAngtBGg1QBIg3gEhEIAAgO");
	this.shape_22.setTransform(19.9,79.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAFgPAIgUQAHgUAmgsQAngsBFg2QBGg4gEhFIAAgO");
	this.shape_23.setTransform(19.6,79.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAFgPAJgTQAIgUAngrQAmgqBEg4QBFg6gEhFIAAgO");
	this.shape_24.setTransform(19.4,79.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAGgPAJgTQAJgSAngqQAngqBDg5QBEg7gFhGIAAgO");
	this.shape_25.setTransform(19.1,79);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAGgPALgSQAKgSAngpQAngpBCg6QBDg8gGhHIAAgO");
	this.shape_26.setTransform(18.8,78.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAHgOALgRQAKgSAogoQAogoBAg7QBCg+gGhIIAAgO");
	this.shape_27.setTransform(18.5,78.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAHgOAMgQQAMgRAognQAognA/g9QBBhAgHhIIAAgO");
	this.shape_28.setTransform(18.2,78.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAIgNANgRQAMgQApgmQAogmA+g+QBAhBgIhJIAAgO");
	this.shape_29.setTransform(17.9,78);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAIgNAOgQQANgPApglQAogmA9g/QA/hCgIhKIAAgO");
	this.shape_30.setTransform(17.7,77.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAIgNAPgPQAPgPApgkQAngkA9hBQA9hEgIhKIAAgO");
	this.shape_31.setTransform(17.4,77.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAIgNAQgOQAQgOApgkQAngjA9hCQA8hFgJhLIAAgO");
	this.shape_32.setTransform(17.1,77.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAJgMARgOQAQgOAqgiQAogjA6hDQA7hGgJhMIAAgO");
	this.shape_33.setTransform(16.8,77);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#59595C").ss(0.3).p("Ah0CmQAJgMASgNQARgNAqgiQAoghA6hFQA6hIgKhMIAAgO");
	this.shape_34.setTransform(16.6,76.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#59595C").ss(0.3).p("AB0iqIAAAOQAKBNg5BJQg4BGgoAhQgqAggTANQgSAMgKAM");
	this.shape_35.setTransform(16.3,76.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#59595C").ss(0.3).p("AhuClQAJgMARgMQARgOAnggQAbgXAggoQAPgTARgVQAsg+ADg1QABgQgCgQIAAgO");
	this.shape_36.setTransform(16.9,76.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#59595C").ss(0.3).p("AhnCkQAIgLAPgNQAPgOAkgfQAZgZAegnQAOgSARgWQAqg9AEg1QABgPgCgQIABgO");
	this.shape_37.setTransform(17.5,76.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#59595C").ss(0.3).p("AhgCjQAHgLAOgNQAMgPAigfQAWgZAcgnQAOgSAQgWQApg8AEg0QABgPgBgQIABgN");
	this.shape_38.setTransform(18,77);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#59595C").ss(0.3).p("AhZCiQAGgLAMgMQAKgRAfgeQATgaAbgnQANgRAQgWQAng8AFgzQABgPgBgPIABgN");
	this.shape_39.setTransform(18.6,77.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#59595C").ss(0.3).p("AhSCiQAEgMALgMQAIgRAcgeQARgbAZgmQAMgQAQgXQAlg7AGgzQABgOAAgQIAAgM");
	this.shape_40.setTransform(19.2,77.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#59595C").ss(0.3).p("AhMChQAEgMAJgMQAGgSAZgdQAPgcAXglQALgQAQgYQAkg6AFgyQACgOAAgPIABgN");
	this.shape_41.setTransform(19.8,77.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#59595C").ss(0.3).p("AhFCgQACgMAIgMQAEgTAWgdQAMgcAWglQAKgQAPgYQAjg5AGgxQACgOAAgPIABgM");
	this.shape_42.setTransform(20.4,77.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#59595C").ss(0.3).p("Ag+CgQABgMAGgMQADgUASgdQAKgdAWgkQAHgPAPgZQAhg4AHgwQACgOAAgPIACgM");
	this.shape_43.setTransform(21,77.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#59595C").ss(0.3).p("Ag4CfQABgMAEgMQABgVAPgcQAIgeAUgkQAHgOAOgZQAfg4AIgvQACgOABgOIABgM");
	this.shape_44.setTransform(21.6,78.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#59595C").ss(0.3).p("AgxCeQgBgMADgMQgBgWAMgbQAFgfATgjQAHgOAMgaQAeg3AJguQACgOABgOIACgL");
	this.shape_45.setTransform(22.2,78.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#59595C").ss(0.3).p("AgqCdQgCgMACgMQgEgWAJgbQADggARgjQAHgNAMgaQAcg3AJgtQACgNACgOIACgL");
	this.shape_46.setTransform(22.8,78.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#59595C").ss(0.3).p("AghCeQgDgMAAgLQgGgYAGgbQABggAPgiQAGgNANgbQAZg2AKgsQACgNACgNIACgL");
	this.shape_47.setTransform(23.2,78.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#59595C").ss(0.3).p("AgYCdQgEgMgBgLQgIgZADgaQgCgiANghQAFgMAOgbQAXg2AKgrQADgNACgNIACgL");
	this.shape_48.setTransform(23.5,78.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#59595C").ss(0.3).p("AgOCcQgEgMgDgLQgKgaAAgZQgEgjALggQAEgMANgcQAWg0ALgrQACgNADgNIACgK");
	this.shape_49.setTransform(23.7,78.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#59595C").ss(0.3).p("AgCCbQgGgMgFgLQgMgagDgaQgGgjAJggQAEgMANgcQAUgzALgqQADgMADgNIACgK");
	this.shape_50.setTransform(23.9,79.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40.3,61.3,41,84.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;