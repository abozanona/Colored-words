(function (libbrownbaloon, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libbrownbaloonrary properties:
libbrownbaloon.properties = {
	width: 90,
	height: 180,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(libbrownbaloon.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8A5D3B","rgba(138,93,59,0.2)"],[0,0.996],-6.7,-25.3,4.1,13.7).s().p("AhdBxQgfiHAxhoQAdg9A1g0QAygwANAJQACABAAASQgBAVAIAPQAJARASANQg/AfgkA4QgtBLAQBiQAJA2ASAnQgXARgMAdQgJAXADAZQACAPAFAMQgthUgThUg");
	this.shape.setTransform(10.6,28.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.3,56.3);


(libbrownbaloon.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(104,58,26,0)","#F7C9B2"],[0,0.996],9.1,-9.7,-7.8,8.3).s().p("AB/B+QgZgDgaAHQgGg4gfgrQgfgpgsgQQgogNgvALQgZgQgJgaQgIgWAEgMQANggBOACQBPACAYAqQAGAKAAAMIAAAWQABBWB7BfQgRgHgTgCg");
	this.shape.setTransform(16.4,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,27.1);


(libbrownbaloon.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new libbrownbaloon.Path();
	this.instance.setTransform(17.2,-43.1,0.983,0.983,10.5,0,0,16.3,14.3);
	this.instance.alpha = 0.398;

	this.instance_1 = new libbrownbaloon.Path_1();
	this.instance_1.setTransform(-16.5,-31.1,0.983,0.983,10.5,0,0,10.4,28.5);
	this.instance_1.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8A5D3B","#683A1A"],[0,0.996],9.8,-33.7,-10.5,24.7).s().p("AghGlQgSgCgTgEQgYgGgBgGQgCgKAYgLQiDhNg+h/Qg2huAEh6QAEiMBShhQApgwAyghQBfg9BdAPQCNAWBYCwQAkBLADBRQAECaiACLQhFBLhJApQgpAYgrAQIAFAIQAGAJAHAJQAFAFAAACQgBAEgMAAIgKgBg");
	this.shape.setTransform(0.7,-20.9,0.983,0.983,10.5);

	this.addChild(this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.5,-61.9,67.2,81.5);


// stage content:
(libbrownbaloon.brownbaloon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new libbrownbaloon.Tween1("synched",0);
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
p.nominalBounds = new cjs.Rectangle(50.6,106.3,76.1,161);

})(libbrownbaloon = libbrownbaloon||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libbrownbaloon, images, createjs, ss;