(function (libwater, img, cjs, ss) {

var p; // shortcut to reference prototypes

// libwaterrary properties:
libwater.properties = {
	width: 50,
	height: 310,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(libwater.water = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0,17.4,0).s().p("AixXUMAAAguOQAXAKATgDQAPgCASgMQARgLAMgBQANAAAMAJQAOALANABQASACAVgQQAWgPAPACQAPACARASQARATAQADQAbAGAfgXMAAAAuOg");
	this.shape.setTransform(25.2,160.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,-0.1,17.4,-0.1).s().p("AiwXTIgBgFMAAAguJQAWAIATgDQASgEAQgKQASgKAMAAQANAAALAKQANAMANAAQAWgDAQgKQAagNAMAAQAGAAAIAEQAJADAJAIIAOANQAJAIAJACQAKADAKgBQASgCAVgOIABAIMAAAAuEIgFABg");
	this.shape_1.setTransform(25.2,160.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,-0.2,17.4,-0.2).s().p("AiwXSIgBgEMAAAguKQAWAHATgEQASgEAQgJQASgJAMAAQANAAAKALQAMANANAAQAYgEAPgKQAZgLAMgBQAHgBAHADQAKABAJAIIAOAMQAJAIAJADQAJAEAKgBQATgBAUgNIADAFMAAAAuGIgEABg");
	this.shape_2.setTransform(25.2,160.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,-0.3,17.4,-0.3).s().p("AivXSIgCgEMAAAguKQAWAEATgDQASgGAQgHQATgJALABQAOAAAJANQAKAOAOgCQAZgFANgIQAZgJANgDQAHgBAHABQAKgBAJAHQAIAFAGAHQAJAJAIAEQAJADAKAAQATAAAVgMIAEADMAAAAuGIgDADg");
	this.shape_3.setTransform(25.2,160.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,-0.2,17.4,-0.2).s().p("AiuXSIgDgDMAAAguLQAWACATgEQASgEAQgHQATgIALABQAPABAIAMQAJAQAOgBQAZgIANgHIAmgLIANgCQALgCAJAFQAIAFAHAHQAIAJAIAFQAIAFAKAAQATABAWgMIAFABMAAAAuGIgCAEg");
	this.shape_4.setTransform(25.2,160.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,-0.2,17.4,-0.2).s().p("AitXSIgEgBMAAAguNQAVABATgEQATgFAQgGQAUgHALABQAPACAGANQAIARAPgCIAmgPQAYgFAOgGIANgDQALgFAJAFQAJAEAGAIQAHAJAIAFQAJAGAJABQATACAWgMIAHgBMAAAAuHIgBAEg");
	this.shape_5.setTransform(25.2,160.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,-0.1,17.4,-0.1).s().p("AitXTIgEgBMAAAguNQAVgBATgEIAjgKQAUgGALABQAPACAGAOQAGASAPgDIAmgOQAYgEAOgHIANgFQAMgGAKADQAIADAGAJQAHAKAIAFQAIAHAJABQAUADAWgLIAIgDMAAAAuHIgBAFg");
	this.shape_6.setTransform(25.2,160.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0,17.4,0).s().p("AixXUMAAAguOQAWgDAVgFIAjgKQAqgKAGAZQAHAZAXgNQAXgMARAAQARgBAXgPQAXgPANAVQAOAVARAEQAYAFAcgRMAAAAuOg");
	this.shape_7.setTransform(25.2,160.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.2,17.4,0.2).s().p("AixXWMAAAguOQAWgDAVgFIAjgKQAqgKAJAVQAKAWAXgLQAWgKARAAQARgBAYgPQAZgPANATQAMAUARAEQAVAFAZgLMAAAAuOg");
	this.shape_8.setTransform(25.2,160.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.3,17.4,0.3).s().p("AixXYMAAAguOQAWgDAVgGIAjgJQAqgKANARQANASAWgJQAWgIARAAQAQAAAagQQAZgPANASQAMATAPAEQAUAEAVgEMAAAAuOg");
	this.shape_9.setTransform(25.2,160);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.5,17.4,0.5).s().p("AixXZMAAAguOQAWgDAVgFIAjgKQAqgKAQAOQAQAOAVgHQAWgHARABQAQAAAbgPQAbgQAMARQAMARAOAEQASAEARACMAAAAuOg");
	this.shape_10.setTransform(25.2,159.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.7,17.4,0.7).s().p("AixXbMAAAguOQAWgDAVgFIAjgKQAqgKATALQATAKATgFQAXgFARABQAQAAAdgPQAcgQALAQQAMAQANADQAQAEANAIMAAAAuOg");
	this.shape_11.setTransform(25.2,159.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.8,17.4,0.8).s().p("AixXdMAAAguOQAWgDAVgGIAjgJQAqgKAWAGQAWAHATgDQAWgDARABQAQABAegQQAegPALAOQAKAOAMADQAOAEAKAPMAAAAuOg");
	this.shape_12.setTransform(25.2,159.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1,17.4,1).s().p("AixXfMAAAguOQAWgDAVgGIAjgJQAqgKAZADQAZADATgBQAVgCARACQARABAfgQQAegPALAMQAKANALADQAMAEAGAVMAAAAuOg");
	this.shape_13.setTransform(25.2,159.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.2,17.4,1.2).s().p("AixXgMAAAguOQAWgDAVgFIAjgKQAqgKAcAAIAvAAQAUAAARACQARACAggQQAggQAKALQAKAMAJADQALADACAbMAAAAuOg");
	this.shape_14.setTransform(25.2,159.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.4,17.4,1.4).s().p("AixXiMAAAguOQAWgDAVgFIAjgKQAqgKAfgEQAegEATACIAlAEQARADAhgQQAigQAJAKQAJAKAJADQAIADgBAhMAAAAuOg");
	this.shape_15.setTransform(25.2,159);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.3,17.4,1.3).s().p("AixXiMAAAguOQAWgDATgFQARgGARgEQAngJAjgFQAggFASAEIAiAGQAQACAhgRQAggQAMAIQAMAIAJACQAJABgBAnMAAAAuOg");
	this.shape_16.setTransform(25.2,159);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.3,17.4,1.3).s().p("AixXhMAAAguOQAWgDARgFIAhgJQAlgJAlgFQAjgFAQAEIAgAHQAQADAfgRQAfgQAPAGQAPAGAJAAQAKAAgBArMAAAAuOg");
	this.shape_17.setTransform(25.2,159.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.2,17.4,1.2).s().p("AixXhMAAAguOQAWgDAQgFQANgFASgEQAigJAogFQAmgGAOAGQAOAFAQADQAPADAegRQAegRASAEQASAEAKgBQAJgBAAAwMAAAAuOg");
	this.shape_18.setTransform(25.2,159.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.2,17.4,1.2).s().p("AixXhMAAAguOQAWgDAOgFQAMgEASgFQAggIAqgGQApgGAMAHQANAGAPAEQAPACAcgRQAdgRAVACQAUACALgCQAKgDAAA1MAAAAuOg");
	this.shape_19.setTransform(25.2,159.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.4,17.4,1.4).s().p("AixXiMAAAguOQAWgDAMgEQALgEASgFQAdgIAugGQArgGALAIQAKAHAPADQAOAEAcgSQAagSAYAAQAYABALgEQALgEAAA5MAAAAuOg");
	this.shape_20.setTransform(25.2,159);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.6,17.4,1.6).s().p("AixXkMAAAguOQAWgDAKgEQAKgEASgFQAbgHAwgGQAugHAJAJQAJAIAOAEQANADAbgSQAZgSAbgCQAbgBALgGQAMgFAAA+MAAAAuOg");
	this.shape_21.setTransform(25.2,158.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.7,17.4,1.7).s().p("AixXmMAAAguOQAWgDAJgEQAIgEASgFQAYgGAzgIQAxgHAHAKQAHAKANAEQAOADAZgSQAYgTAegDQAegEAMgGQALgHABBDMAAAAuOg");
	this.shape_22.setTransform(25.2,158.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.9,17.4,1.9).s().p("AixXoMAAAguOQAWgDAHgEQAGgDATgGQAWgGA1gHQA0gIAFALQAFALANAEQANAEAYgTQAXgTAhgFQAggGANgIQAMgIABBIMAAAAuOg");
	this.shape_23.setTransform(25.2,158.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.1,17.4,2.1).s().p("AixXqMAAAguOQAWgDAFgEQAFgDATgFQATgGA4gIQA3gIADAMQAEAMAMAEQANAEAWgTQAWgTAjgHQAkgIANgJQANgKABBNMAAAAuOg");
	this.shape_24.setTransform(25.2,158.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.2,17.4,2.2).s().p("AixXqMAAAguOQAWgDAFgDQArgOA5gIQA2gIADAMQAEALAMAFQANAEAXgSQAXgSAhgIQAigJAMgLQAMgLAFBPMAAAAuOg");
	this.shape_25.setTransform(25.2,158.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.2,17.4,2.2).s().p("AixXrMAAAguOQAWgDAFgDQArgPA5gIQA2gIADAMQAEAMAMAEQANAEAYgRQAXgQAggKQAggJALgMQAKgMAKBRMAAAAuOg");
	this.shape_26.setTransform(25.2,158.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.3,17.4,2.3).s().p("AixXrMAAAguOQAWgDAFgDQArgOA5gIQA2gIADAMQAEALAMAFQANAEAYgQQAZgQAegKQAegKAKgOQAJgNAOBTMAAAAuOg");
	this.shape_27.setTransform(25.2,158.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.4,17.4,2.4).s().p("AixXsMAAAguOQAWgDAFgDQArgOA5gIQA2gIADAMQAEALAMAFQANAEAZgPQAZgOAcgMQAdgLAIgPQAJgOASBVMAAAAuOg");
	this.shape_28.setTransform(25.2,158);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.4,17.4,2.4).s().p("AixXtMAAAguOQAWgDAFgDQArgPA5gIQA2gIADAMQAEAMAMAEQANAEAagNQAagOAagMQAbgMAHgQQAIgQAWBYMAAAAuOg");
	this.shape_29.setTransform(25.2,157.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.5,17.4,2.5).s().p("AixXtMAAAguOQAWgDAFgDQArgOA5gIQA2gIADAMQAEALAMAFQANAEAagNIA0gZQAYgOAHgRQAHgRAaBaMAAAAuOg");
	this.shape_30.setTransform(25.2,157.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.5,17.4,2.5).s().p("AixXuMAAAguOQAWgDAFgDQArgPA5gIQA2gIADAMQAEAMAMAEQANAEAbgLQAbgLAXgPQAXgOAGgSQAFgSAfBcMAAAAuOg");
	this.shape_31.setTransform(25.2,157.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.6,17.4,2.6).s().p("AixXvMAAAguOQAWgDAFgDQArgPA5gIQA2gIADAMQAEAMAMAEQANAEAcgKQAcgKAVgPQAVgQAFgTQAEgUAjBfMAAAAuOg");
	this.shape_32.setTransform(25.2,157.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.7,17.4,2.7).s().p("AixXvMAAAguOQAWgDAFgDQArgOA5gIQA2gIADAMQAEALAMAFQANAEAdgJQAcgJAUgRQATgQADgVQAEgUAnBgMAAAAuOg");
	this.shape_33.setTransform(25.2,157.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.8,17.4,2.8).s().p("AixXwMAAAguOQAWgDAFgDQAFgEATgFQATgFA4gIQA3gJADAMQAEAMAMAEQANAEAdgHQAegIARgSQASgRACgWQADgWArBjMAAAAuOg");
	this.shape_34.setTransform(25.2,157.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,2.3,17.4,2.3).s().p("AixXsMAAAguOQAWgEAFgCQAqgNA4gIQA2gIAEAKQAEAJANAEQAMAEAbgHQAbgHATgNQATgNAGgUQAFgVAoBZMAAAAuOg");
	this.shape_35.setTransform(25.2,158);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.9,17.4,1.9).s().p("AixXnMAAAguOQAWgDAFgDQAogLA5gIQA2gIAEAIQAFAHAMAEQAMADAZgGQAZgGAUgIQAVgIAIgUQAIgUAlBPMAAAAuOg");
	this.shape_36.setTransform(25.2,158.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1.4,17.4,1.4).s().p("AixXjMAAAguOQAWgDAFgDQAmgKA5gIQA3gIAFAGQAEAGANACQAMACAWgEIAsgJQAXgDALgTQALgSAhBFMAAAAuOg");
	this.shape_37.setTransform(25.2,158.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,1,17.4,1).s().p("AixXeMAAAguOQAWgDAFgDQAlgHA5gJQA4gIAEAEQAFAEAMACQAMABAUgDQAUgEAXABQAYABAOgRQAOgSAeA7MAAAAuOg");
	this.shape_38.setTransform(25.2,159.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.5,17.4,0.5).s().p("AixXaMAAAguOQAWgDAFgDIBcgPQA5gIAEACIARADQAMABASgDQARgDAaAHQAZAFARgQQAQgQAbAxMAAAAuOg");
	this.shape_39.setTransform(25.2,159.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.1,17.4,0.1).s().p("AixXWMAAAguOQAWgDAFgDQAigEA5gJQA4gJAFABIASAAQAMABAPgCQAOgCAcALQAbAKATgPQATgPAYAnMAAAAuOg");
	this.shape_40.setTransform(25.2,160.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.2,17.4,0.2).s().p("AixXXMAAAguOQAWgDAFgDQAggDA5gIIA+gLQAHgCALAAIAYgBQANgBAdAQQAcAPAXgOQAWgOAUAdMAAAAuOg");
	this.shape_41.setTransform(25.2,160.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.4,17.4,0.4).s().p("AixXYMAAAguOQAWgDAFgDQAeAAA6gJQA5gJAFgEQAHgEAMAAIAVgBQAKAAAfAUQAeAUAZgNQAZgMARASMAAAAuOg");
	this.shape_42.setTransform(25.2,160);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.5,17.4,0.5).s().p("AixXaMAAAguOQAWgDAFgEQAFgDAMACQAMADA5gJQA5gJAHgGQAHgGALgBQAMgBAHABQAIABAgAZQAgAYAbgLQAcgMAOAJMAAAAuOg");
	this.shape_43.setTransform(25.2,159.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.4,17.4,0.4).s().p("AiwXYIgBgGMAAAguIQAVgBAHgDQAZgBAXgEIAegFIAHAAIAVgCQATgCALgCQAKgCADgCQAGgGALgBIAHgBIAMgBQAHAAASAMIAPAKQAJAHAJAEQAUALATgFQAcgKAPAFIACAMMAAAAuAIgHABg");
	this.shape_44.setTransform(25.2,160);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.2,17.4,0.2).s().p("AivXXIgCgFMAAAguJQAUAAAIgCQAagCAVgFQAPgEAQgCIAGgBQAMgBAJABQASABAMgCQAJgBAEgDQAGgFAMgCIAGgBIAMgCQAIgCARALQAHADAIAGIARAMQAUAMASgEQAcgHARACIADAIMAAAAuBIgGADg");
	this.shape_45.setTransform(25.2,160.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.1,17.4,0.1).s().p("AiuXWIgDgEMAAAguKQATABAKgBQAagDAUgGQAPgFAQgCIAGAAQALgBAJACQASADALgBQAJgBAFgDQAHgEALgDIAGgCIALgCQAKgEAQAJQAHADAJAGIAQAMQAUAOARgDQAbgFASgBIAFAFMAAAAuCIgFAEg");
	this.shape_46.setTransform(25.2,160.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0.1,17.4,0.1).s().p("AitXVIgEgDMAAAguLQATADAKgBQAbgDATgHQAPgHAPgBIAHAAQAKAAAKADQAQAFAMgBQAIgBAHgCIARgIIAGgCIALgEQALgEAPAHQAIACAIAGIAQANQATAPARgBIAtgHIAHACMAAAAuDIgDAEg");
	this.shape_47.setTransform(25.2,160.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0,17.4,0).s().p("AisXVIgFgCMAAAguMQASAEALgBQAdgDARgIQAQgIAOgCIAGABQAKAAAKAFQAQAGAMAAQAIAAAHgCIARgIIAGgDIALgFQAMgFAOAFQAIACAJAGIAPAMQATARAQAAQAZgBAUgGIAJgCMAAAAuEIgCAGg");
	this.shape_48.setTransform(25.2,160.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#A6D9FF","#ADD4FB","#6FB6F8","#58A7EA"],[0,0.314,0.722,1],-17.7,0,17.4,0).s().p("AirXUIgGgBMAAAguNQARAGANAAQAdgEAQgJQAQgKAOgBIAGAAQAKABAJAGQAPAJAMAAQAIABAIgDQAHgDALgFIAFgDIALgGQAOgHAMADQAIACAJAGQAHAFAIAIQASASAQABQAXACAWgJIALgGMAAAAuFIgBAHg");
	this.shape_49.setTransform(25.2,160.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32.3,166.1,35.8,298.5);

})(libwater = libwater||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var libwater, images, createjs, ss;