(function (libYELLOWbaloon, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libYELLOWbaloonrary properties:
libYELLOWbaloon.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libYELLOWbaloon.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5C16F","rgba(237,214,157,0.2)"],[0,0.996],-3.5,-26,0.4,13.7).s().p("Ah6BbQgHiJBBhdQAng2A8gqQA5gmALALQACACgDARQgEAUAFARQAFASAQAPQhDATgtAxQg5BBgBBiQAAA0ANArQgcANgQAaQgNAVgBAZQgBAPADAMQgdhagEhUg");
	this.shape.setTransform(12.5,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.8,53.2);


(libYELLOWbaloon.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,193,14,0)","#F6CE56"],[0,0.996],10.9,-8.5,-8.6,6.2).s().p("ABqCLQgYgHgaADQADg5gXgvQgWgtgogXQglgUgvADQgWgSgFgdQgEgXAGgKQASgdBMAPQBMAQARAsQAEALgCAMIgEAWQgOBTBoByQgQgKgSgFg");
	this.shape.setTransform(16.5,-42.7);

	this.instance = new libYELLOWbaloon.Path_1();
	this.instance.setTransform(-15.1,-30.1,1,1,0,0,0,12.5,26.5);
	this.instance.alpha = 0.699;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9CC0C").s().p("AhwGXQgQgFgTgIQgVgJAAgGQgBgKAZgHQhyhigmiGQgih1AZh1QAciIBghQQAwgoA3gXQBlgrBaAfQCFAuA3C6QAWBNgKBRQgXCXiVBxQhRA+hLAbQgnAPgzAJIADAJQAEAJAGAKQAEAGgBABQgBACgFAAQgGAAgLgCg");
	this.shape_1.setTransform(1.2,-21.2);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-62.1,63.4,82);


// stage content:
(libYELLOWbaloon.YELLOWbaloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new libYELLOWbaloon.Tween1("synched",0);
	this.instance.setTransform(50,91.9,1.221,1.221,-15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:55.9,y:89.4},9).to({x:47.5,y:88.3},10).to({x:51.2,y:91.9},10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59595C").ss(0.3).p("ABFkwQADAfgDAjQgHBGgpBEQgVAlgqA/Qg7B4BGC9");
	this.shape.setTransform(36.7,145.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59595C").ss(0.3).p("AgqE0QguibAdhnQAHgaAMgXQAohAAWglQAqhIAGg/QADglgDgf");
	this.shape_1.setTransform(37.1,145);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59595C").ss(0.3).p("Ag2EzQgiieAehjQAIgZALgXQAphCAWgkQAphJAGg+QADglgDgf");
	this.shape_2.setTransform(37.5,144.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59595C").ss(0.3).p("AhAEzQgXigAfhgQAJgZALgXQAphCAVgjQAphKAGg+QADgkgDgg");
	this.shape_3.setTransform(37.8,144.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59595C").ss(0.3).p("AhJEzQgNikAhhbQAJgZAMgXQAohEAVgiQAphJAHg/QADgkgEgf");
	this.shape_4.setTransform(38,143.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59595C").ss(0.3).p("AhREyQgBinAhhXQALgZALgWQAphFAUgiQAphKAGg+QADgkgDgf");
	this.shape_5.setTransform(38,143.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59595C").ss(0.3).p("AhYEyQAKiqAjhTQALgZAMgWQAohHAUggQAphKAHg+QADgkgEgf");
	this.shape_6.setTransform(37.9,143.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59595C").ss(0.3).p("AheExQAVisAkhQQAMgZAMgVQAohIATgfQAqhLAGg+QADgjgEgg");
	this.shape_7.setTransform(37.8,142.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59595C").ss(0.3).p("AhkEwQAgivAlhMQANgYALgWQAphJATgeQAphLAGg+QADgjgDgf");
	this.shape_8.setTransform(37.7,142.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#59595C").ss(0.3).p("ABqkrQADAggDAiQgGA+ghA9QgEAHgEAHQgYAng8BvQgnBHgrCz");
	this.shape_9.setTransform(37.6,142.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59595C").ss(0.3).p("AhpEwQAwiqAnhFQA6hpAWgpQAFgNACgPQAdg+AGg+QADgjgEgf");
	this.shape_10.setTransform(37,142.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#59595C").ss(0.3).p("AhmEwQA0iiAohCQA4hiAUgsQAFgTABgWQAYhBAGg+QADgigDgg");
	this.shape_11.setTransform(36.4,142.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59595C").ss(0.3).p("AhkEwQA5iZAohAQA2hbATguQAFgZgBgeQAThDAHg+QACgigDgg");
	this.shape_12.setTransform(35.8,142.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#59595C").ss(0.3).p("AhiEwQA+iRAmg8QA2hWARgwQAGgfgDglQAPhFAGg+QADgigDgg");
	this.shape_13.setTransform(35.2,142);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59595C").ss(0.3).p("AhgEwQBDiIAng6QAzhQAQgyQAGgkgFgtQALhHAGg+QACgigCgg");
	this.shape_14.setTransform(34.6,141.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#59595C").ss(0.3).p("AhdExQBHiAAng4QAyhJAOg0QAGgrgGg0QAGhKAGg9QACgigCgh");
	this.shape_15.setTransform(33.9,141.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59595C").ss(0.3).p("AhbExQBMh4Ang1QAwhCAMg5QAHgvgIg7QABhMAGg9QADgjgDgg");
	this.shape_16.setTransform(33.3,141.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#59595C").ss(0.3).p("AhaExQBRhvAngzQAug7ALg8QAHg0gKhDQgDhOAGg9QACgjgCgg");
	this.shape_17.setTransform(32.8,141.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59595C").ss(0.3).p("AhbExQBWhnAogwQArg0AJg/QAIg6gLhKQgJhRAHg9QACgigCgh");
	this.shape_18.setTransform(32.5,141.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#59595C").ss(0.3).p("AhbExQBahfAogtQApgtAIhCQAIhAgNhSQgNhSAHg9QACgjgCgg");
	this.shape_19.setTransform(32.2,141.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59595C").ss(0.3).p("AhTExQBNhfAkgwQAlgwAKhAQAKhGgHhDQgIhVAGg9QACglgCgg");
	this.shape_20.setTransform(32.4,141.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#59595C").ss(0.3).p("AhOEyQBBhgAgg1QAggxALg/QAPhGgEhAQgChTAGg+QACgkgCgg");
	this.shape_21.setTransform(32.9,142.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59595C").ss(0.3).p("AhKEyQA0hgAbg4QAdgzAMg+QAThHgBg8QADhSAGg+QADglgDgf");
	this.shape_22.setTransform(33.6,142.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#59595C").ss(0.3).p("AhHEzQAohhAZg8QAWg1AOg8QAXhHADg5QAIhQAGhAQACgkgCgf");
	this.shape_23.setTransform(34.3,143);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59595C").ss(0.3).p("AhDEzQAbhiAUg/QAUg3AOg7QAbhHAGg2QAOhOAGhAQACgkgCgf");
	this.shape_24.setTransform(35,143.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#59595C").ss(0.3).p("AhAE0QAOhjAQhDQARg5AQg5QAdhHAJgzQAUhNAGhBQADgjgDgf");
	this.shape_25.setTransform(35.8,143.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59595C").ss(0.3).p("Ag8E0QABhjALhGQAMg7ATg4QAhhIANgvQAYhMAHhBQACgjgCgf");
	this.shape_26.setTransform(36.5,144.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59595C").ss(0.3).p("Ag1E0QgMhjAHhKQAIg9AUg3QAlhIAQgsQAehKAHhCQADgjgDgf");
	this.shape_27.setTransform(36.8,144.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59595C").ss(0.3).p("AgqE0QgZhkADhOQAEg/AVg1QAqhIATgpQAkhIAGhDQADgjgDge");
	this.shape_28.setTransform(36.8,145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.1,106.1,76.6,161.2);

})(libYELLOWbaloon = libYELLOWbaloon||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libYELLOWbaloon, images, createjs, ss;