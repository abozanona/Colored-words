(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 120,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Path_1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5C16F","rgba(237,214,157,0.2)"],[0,0.996],-3.5,-26,0.4,13.7).s().p("Ah6BbQgHiJBBhdQAng2A8gqQA5gmALALQACACgDARQgEAUAFARQAFASAQAPQhDATgtAxQg5BBgBBiQAAA0ANArQgcANgQAaQgNAVgBAZQgBAPADAMQgdhagEhUg");
	this.shape.setTransform(12.5,26.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,24.8,53.2);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,193,14,0)","#F6CE56"],[0,0.996],10.9,-8.5,-8.6,6.2).s().p("ABqCLQgYgHgaADQADg5gXgvQgWgtgogXQglgUgvADQgWgSgFgdQgEgXAGgKQASgdBMAPQBMAQARAsQAEALgCAMIgEAWQgOBTBoByQgQgKgSgFg");
	this.shape.setTransform(16.5,-42.7);

	this.instance = new lib.Path_1();
	this.instance.setTransform(-15.1,-30.1,1,1,0,0,0,12.5,26.5);
	this.instance.alpha = 0.699;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D8BB12","#FFD00B"],[0,0.996],-10.8,31.3,8.7,-32.2).s().p("AhwGXQgQgFgTgIQgVgJAAgGQgBgKAZgHQhyhigmiGQgih1AZh1QAciIBghQQAwgoA3gXQBlgrBaAfQCFAuA3C6QAWBNgKBRQgXCXiVBxQhRA+hLAbQgnAPgzAJIADAJQAEAJAGAKQAEAGgBABQgBACgFAAQgGAAgLgCg");
	this.shape_1.setTransform(1.2,-21.2);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-62.1,63.4,82);


// stage content:
(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(58.3,79.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:62.5,y:78.1},9).to({x:56.1,y:75.5},10).to({x:58.3,y:79.1},10).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#59595C").ss(0.3).p("ABqjlQgEAagKAbQgUA1gvAtQgZAZguArQhIBQAPCl");
	this.shape.setTransform(36.7,118.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#59595C").ss(0.3).p("AhtDpQgDiGAthMQALgSAOgNQAtgsAagYQAxgyASgxQAJgaAFga");
	this.shape_1.setTransform(36.8,118.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#59595C").ss(0.3).p("AhyDnQAHiFAthJQALgSAOgNQAugsAYgYQAygzASgwQAJgaAFga");
	this.shape_2.setTransform(36.8,118);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#59595C").ss(0.3).p("Ah2DlQAPiFAuhFQAMgSANgNQAugtAZgXQAxgzASgwQAJgbAFga");
	this.shape_3.setTransform(36.8,117.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#59595C").ss(0.3).p("Ah7DjQAZiEAthCQANgSANgMQAuguAYgXQAygzASgwQAJgbAFga");
	this.shape_4.setTransform(36.8,117.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#59595C").ss(0.3).p("AiADhQAiiFAug+QANgRANgNQAvguAXgXQAxgzASgwQAKgaAEga");
	this.shape_5.setTransform(36.8,117.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#59595C").ss(0.3).p("AiFDfQAsiFAtg6QAOgRANgOQAvguAWgWQAyg0ASgvQAKgbAEga");
	this.shape_6.setTransform(36.8,116.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#59595C").ss(0.3).p("AiKDdQA1iEAug4QAOgQANgOQAvgvAWgVQAyg0ASgwQAJgaAFga");
	this.shape_7.setTransform(36.8,116.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#59595C").ss(0.3).p("AiPDbQA+iEAug0QAPgQANgOQAvgvAWgVQAyg0ASgwQAJgaAFga");
	this.shape_8.setTransform(36.8,116.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#59595C").ss(0.3).p("ACUjWQgEAagKAbQgSAvgnApQgFAFgFAFQgaAZhHBLQguAwhICE");
	this.shape_9.setTransform(36.8,116.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#59595C").ss(0.3).p("AiSDaQBKh8AtgvQBFhFAZgcQAHgJAFgMQAkgrASgwQAJgaAFga");
	this.shape_10.setTransform(36.3,115.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#59595C").ss(0.3).p("AiRDaQBMh1AugsQBBhAAZgeQAIgPAFgRQAhguASgwQAJgaAFga");
	this.shape_11.setTransform(35.8,115.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#59595C").ss(0.3).p("AiPDbQBOhtAtgqQA+g9AZgfQAJgTAGgXQAdgxASgwQAKgbAEga");
	this.shape_12.setTransform(35.3,115.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#59595C").ss(0.3).p("AiNDcQBQhmAtgoQA6g4AYgiQALgXAGgeQAagzASgwQAKgbAEga");
	this.shape_13.setTransform(34.9,115.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#59595C").ss(0.3).p("AiMDcQBShdAsgmQA4g0AXglQANgbAGgkQAXg2ASgvQAKgbAEga");
	this.shape_14.setTransform(34.5,115.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#59595C").ss(0.3).p("AiKDdQBUhWAsgkQA1gvAWgoQAOgeAHgrQAUg5ASgvQAJgbAFga");
	this.shape_15.setTransform(34,114.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#59595C").ss(0.3).p("AiIDdQBWhOArgiQAygqAWgqQAPgkAHgwQARg8ASgvQAJgbAFga");
	this.shape_16.setTransform(33.5,114.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#59595C").ss(0.3).p("AiHDeQBYhHArgfQAvglAVguQARgnAHg3QAOg+ASgwQAJgbAFga");
	this.shape_17.setTransform(33.1,114.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#59595C").ss(0.3).p("AiFDeQBag/ArgdQArggAVgwQASgvAIg6QAKhBASgwQAJgbAFga");
	this.shape_18.setTransform(32.6,114.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#59595C").ss(0.3).p("AiDDfQBcg4AogbQAqgbAVgyQAUgzAHhBQAHhEASgvQAKgbAEga");
	this.shape_19.setTransform(32.1,114.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#59595C").ss(0.3).p("AiBDgQBSg7AogfQAlgdAVgxQAYg3AJg1QALhFASgwQAKgbAEga");
	this.shape_20.setTransform(32.6,114.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#59595C").ss(0.3).p("Ah+DhQBIg+AlgjQAjgfAWgwQAbg0ALg0QAPhCASgxQAKgbAEga");
	this.shape_21.setTransform(33.1,115.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#59595C").ss(0.3).p("Ah7DiQA+hBAjgmQAfgiAXguQAeg0ANgxQAThAATgxQAJgaAFga");
	this.shape_22.setTransform(33.5,115.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#59595C").ss(0.3).p("Ah4DjQAzhFAhgqQAegkAWgtQAhgzAPgtQAXg+ATgxQAKgbAEgZ");
	this.shape_23.setTransform(34,116);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#59595C").ss(0.3).p("Ah1DlQAphIAeguQAcgnAWgrQAlgzARgqQAbg7ATgxQAJgbAFga");
	this.shape_24.setTransform(34.5,116.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#59595C").ss(0.3).p("AhzDmQAghMAbgyQAZgoAZgqQAngyASgnQAgg4ASgyQAKgbAEga");
	this.shape_25.setTransform(34.9,116.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#59595C").ss(0.3).p("AhwDnQAWhPAYg2QAWgrAbgoQApgyAVgjQAjg2ATgyQAJgbAFgZ");
	this.shape_26.setTransform(35.4,117.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#59595C").ss(0.3).p("AhtDoQALhSAXg5QATguAagmQAtgxAXggQAng0ATgzQAKgaAEga");
	this.shape_27.setTransform(35.9,117.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#59595C").ss(0.3).p("AhrDpQAChVATg9QARgwAbglQAxgxAYgcQArgyAUgzQAJgaAFgZ");
	this.shape_28.setTransform(36.4,118.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.1,91.9,66.1,126.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;