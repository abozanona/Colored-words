//640*360
var snd=new Audio("music/theme.mp3");
snd.loop = true;
snd.volume = 0.8;
snd.play();
var dowehavemusic=true;
var dowehavesound=true;
var sndclick=new Audio("music/click.mp3");
var sndwrong=new Audio("music/wrong.mp3");
var sndcountdown=new Audio("music/countdown.mp3");
var sndwin=new Audio("music/win.mp3");
var sndgameover=new Audio("music/gameover.mp3");
var inhelppage=false;
var isgoforever=false;
sndcountdown.volume=0.1;

var annfun=function(){
	$('.helpcountdown').countDown({
			startNumber: 10,
			callBack: function(me) {
				if(inhelppage)
					annfun();
			}
		});
	};

var forevermsgs=[];
	forevermsgs[0]='Here\'s your First word.';

	forevermsgs[1]='Ready For an Foreaver colores?';

	forevermsgs[2]='Prepare for the next color!';

	forevermsgs[3]='Very good, Keep like this';

	forevermsgs[4]='Getting Harder?';

	forevermsgs[5]='Don\'t give up';

	forevermsgs[6]='Ready for more?';

	forevermsgs[7]='Drag baloons faster!';

	forevermsgs[8]='This\'s Just the begignig!';

	forevermsgs[9]='want some more?';

	forevermsgs[10]='Great job kid!';

	forevermsgs[11]='Almost there! keep going';

	forevermsgs[12]='Get ready For an Foreaver colores!';

	forevermsgs[13]='Thats Great!';

	forevermsgs[14]='Ready for a new word?';

	forevermsgs[15]='AWESOME KID!';

	forevermsgs[16]='You are the BEST!';

	forevermsgs[17]='Don\'t give up';

	forevermsgs[18]='Hard words are comming, You can Win!';

	forevermsgs[19]='you can do it kid!';

	forevermsgs[20]='Words may be freaky now!';

$( document ).ready(function() {
	$('.btnimg img').on('tap',function(){
		if(dowehavesound)
		sndclick.play();
	});
	$('.goBcak').on('tap',function(){
		if(dowehavesound)
		sndclick.play();
	});
	$('.exitGame img').on('tap',function(){
		if(dowehavesound)
		sndclick.play();
	});
	$('.nextDifficulty a').on('tap',function(){
		if(dowehavesound)
		sndclick.play();
	});
	$('.prevDifficulty a').on('tap',function(){
		if(dowehavesound)
		sndclick.play();
	});
	$('.settings-controllers-sound').on('tap',function(){
		if(dowehavesound){
			$('.settings-controllers-sound .onscroll').attr('class','offscroll');
			dowehavesound=false;
		} else {
			$('.settings-controllers-sound .offscroll').attr('class','onscroll');
			dowehavesound=true;
			sndclick.play();
		}
	});
	$('.settings-controllers-music').on('tap',function(){
		if(dowehavemusic){
			$('.settings-controllers-music .onscroll').attr('class','offscroll');
			dowehavemusic=false;
			snd.pause();
		} else {
			$('.settings-controllers-music .offscroll').attr('class','onscroll');
			dowehavemusic=true;
			snd.play();			
		}
	});
	$('exitGame').on('tap',function(){
		navigator.app.exitApp();
	});
	$('#forever').on('tap',function(){
		gameEngine.startforever();
	});
});
var mul=[];
	mul[0]=1;
	mul[1]=1;
	mul[2]=3;
	mul[3]=3;
	mul[4]=3;
	mul[5]=3;
	mul[6]=3;
	mul[7]=3;
	mul[8]=4;
	mul[9]=4;
	mul[10]=4;
	mul[11]=4;
	mul[12]=4;
	mul[13]=4;
	mul[14]=4;
	mul[15]=4;
	mul[16]=4;
	mul[17]=5;
	mul[18]=5;
	mul[19]=5;
	mul[20]=5;
	mul[21]=5;
	mul[22]=5;
	mul[23]=6;
	mul[24]=6;
	mul[25]=6;
	mul[26]=6;
	mul[27]=7;
	mul[28]=7;
	mul[29]=7;
	mul[30]=7;
var dr=[];
	dr['A']=new Image;
	dr['A'].src="img/pngletters/0-01.png";
	dr['B']=new Image;
	dr['B'].src="img/pngletters/0-02.png";
	dr['C']=new Image;
	dr['C'].src="img/pngletters/0-03.png";
	dr['D']=new Image;
	dr['D'].src="img/pngletters/0-04.png";
	dr['E']=new Image;
	dr['E'].src="img/pngletters/0-05.png";
	dr['F']=new Image;
	dr['F'].src="img/pngletters/0-06.png";
	dr['G']=new Image;
	dr['G'].src="img/pngletters/0-07.png";
	dr['H']=new Image;
	dr['H'].src="img/pngletters/0-08.png";
	dr['I']=new Image;
	dr['I'].src="img/pngletters/0-09.png";
	dr['J']=new Image;
	dr['J'].src="img/pngletters/0-10.png";
	dr['K']=new Image;
	dr['K'].src="img/pngletters/0-11.png";
	dr['L']=new Image;
	dr['L'].src="img/pngletters/0-12.png";
	dr['M']=new Image;
	dr['M'].src="img/pngletters/0-13.png";
	dr['N']=new Image;
	dr['N'].src="img/pngletters/0-14.png";
	dr['O']=new Image;
	dr['O'].src="img/pngletters/0-15.png";
	dr['P']=new Image;
	dr['P'].src="img/pngletters/0-16.png";
	dr['Q']=new Image;
	dr['Q'].src="img/pngletters/0-17.png";
	dr['R']=new Image;
	dr['R'].src="img/pngletters/0-18.png";
	dr['S']=new Image;
	dr['S'].src="img/pngletters/0-19.png";
	dr['T']=new Image;
	dr['T'].src="img/pngletters/0-20.png";
	dr['U']=new Image;
	dr['U'].src="img/pngletters/0-21.png";
	dr['V']=new Image;
	dr['V'].src="img/pngletters/0-22.png";
	dr['W']=new Image;
	dr['W'].src="img/pngletters/0-23.png";
	dr['X']=new Image;
	dr['X'].src="img/pngletters/0-24.png";
	dr['Y']=new Image;
	dr['Y'].src="img/pngletters/0-25.png";
	dr['Z']=new Image;
	dr['Z'].src="img/pngletters/0-26.png";
//http://stackoverflow.com/questions/12791324/how-do-i-disable-android-back-button-on-one-page-and-change-to-exit-button-on-ev
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    document.addEventListener("backbutton", function (e) {
        e.preventDefault();
    }, false );
}
//http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}
//https://davidwalsh.name/jquery-countdown-plugin
jQuery.fn.countDown = function(settings,to) {
	settings = jQuery.extend({
		startFontSize: "150px",
		endFontSize: "12px",
		duration: 1000,
		startNumber: 10,
		endNumber: 0,
		text: '',
		callBack: function() { }
	}, settings);
	return this.each(function() {
		jQuery(this).css("display","block");
		//where do we start?
		if(!to && to != settings.endNumber) { to = settings.startNumber; }
		
		//set the countdown to the starting number
		jQuery(this).text(to).css("fontSize",settings.startFontSize);
		
		//loopage
		jQuery(this).animate({
			fontSize: settings.endFontSize
		}, settings.duration, "", function() {
			if(settings.text!=''){
				jQuery(this).css("fontSize", settings.startFontSize).text(settings.text);
			} else if(to > settings.endNumber + 1) {
				jQuery(this).css("fontSize", settings.startFontSize).text(to - 1).countDown(settings, to - 1);
			}
			else {
				settings.callBack(this);
			}
		});
				
	});
};
//http://jsfiddle.net/wSLJC/108/
function dnd(){
	$(".draggable").draggable({  
	    revert: 'invalid',
	    snapTolerance: '22'
	});
	$(".droppable").droppable({
	    drop: function(event, ui) {
	    	var draged = event.target,
	    	   dropped = ui.helper[0];
		   	if( gameEngine.currword.color[$(draged).attr('data-letter')] == $(dropped).attr('data-color') ){
    	   		newCanvas( $(draged).attr('data-letter'), $(dropped).attr('data-color'), draged.parentElement);
    	   		var num=$(draged).attr('data-number');
    	   		$(draged).remove();
    	   		$(dropped).remove();
    	   		gameEngine.solve(num);
    	   	}
			else{
				if(dowehavesound)
				sndwrong.play();
			    gameEngine.timer-=gameEngine.minusvalue;
			    gameEngine.wrongtimes++;
			    gameEngine.renderProgressBar();
			    ui.draggable.draggable('option','revert',true);
			}
		}
	});
}
$(document).on("pagecreate","#winlevel",function(){
	$('.jsrepeat').on("tap",function(){
		startLevel(gameEngine.levelNo);
	});
	$('.jsnext').on("tap",function(){
		startLevel(parseInt(gameEngine.levelNo)+1);
	});
});
$(document).on("pagecreate","#loselevel",function(){
	$('.jsrepeat').on("tap",function(){
		if(!isgoforever)
			startLevel(gameEngine.levelNo);
		else
			gameEngine.startforever();
	});
	$('.jsnext').on("tap",function(){
		startLevel(parseInt(gameEngine.levelNo)+1);
	});
});
$(document).on('pagebeforehide', '#loselevel', function(){       
	if(dowehavemusic)
	snd.play();
});
function newCanvas(letter,color,root) {
	letter=letter.toUpperCase();
	color=color.toUpperCase();

	var canvas, stage, exportRoot;
	canvas = document.createElement('canvas');
	canvas.width=90;
	canvas.height=180;

	stage = new createjs.Stage(canvas);

	{
		if(color=='BLACK')
			exportRoot = new libblackbaloon.blackbaloon();
		else if(color=='BLUE')
			exportRoot = new libBLUEbaloon.BLUEbaloon();
		else if(color=='BROWN')
			exportRoot = new libbrownbaloon.brownbaloon();
		else if(color=='GREEN')
			exportRoot = new libGREENbaloon.GREENbaloon();
		else if(color=='MAGNITA')
			exportRoot = new libmagintabaloon.magintabaloon();
		else if(color=='RED')
			exportRoot = new libredbaloon.redbaloon();
		else if(color=='YELLOW')
			exportRoot = new libYELLOWbaloon.YELLOWbaloon();
	}
	stage.addChild(exportRoot);
	{
		if(letter=='A')
			exportRoot = new libA.A();
		else if(letter=='B')
			exportRoot = new libB.B();
		else if(letter=='C')
			exportRoot = new libC.C();
		else if(letter=='D')
			exportRoot = new libD.D();
		else if(letter=='E')
			exportRoot = new libE.E();
		else if(letter=='F')
			exportRoot = new libF.F();
		else if(letter=='G')
			exportRoot = new libG.G();
		else if(letter=='H')
			exportRoot = new libH.H();
		else if(letter=='I')
			exportRoot = new libI.I();
		else if(letter=='J')
			exportRoot = new libJ.J();
		else if(letter=='K')
			exportRoot = new libK.K();
		else if(letter=='L')
			exportRoot = new libL.L();
		else if(letter=='M')
			exportRoot = new libM.M();
		else if(letter=='N')
			exportRoot = new libN.N();
		else if(letter=='O')
			exportRoot = new libO.O();
		else if(letter=='P')
			exportRoot = new libP.P();
		else if(letter=='Q')
			exportRoot = new libQ.Q();
		else if(letter=='R')
			exportRoot = new libR.R();
		else if(letter=='S')
			exportRoot = new libS.S();
		else if(letter=='T')
			exportRoot = new libT.T();
		else if(letter=='U')
			exportRoot = new libU.U();
		else if(letter=='V')
			exportRoot = new libV.V();
		else if(letter=='W')
			exportRoot = new libW.W();
		else if(letter=='X')
			exportRoot = new libX.X();
		else if(letter=='Y')
			exportRoot = new libY.Y();
		else if(letter=='Z')
			exportRoot = new libZ.Z();
	}
	stage.addChild(exportRoot);

	stage.update();

	createjs.Ticker.setFPS(libA.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	//return canvas;
	root.appendChild(canvas);
}
function newBaloon(letter,color,root,number) {
	letter=letter.toUpperCase();
	color=color.toUpperCase();

	var canvas, stage, exportRoot;
	canvas = document.createElement('canvas');
	canvas.width=90;
	canvas.height=180;

	stage = new createjs.Stage(canvas);

	{
		if(color=='BLACK')
			exportRoot = new libblackbaloon.blackbaloon();
		else if(color=='BLUE')
			exportRoot = new libBLUEbaloon.BLUEbaloon();
		else if(color=='BROWN')
			exportRoot = new libbrownbaloon.brownbaloon();
		else if(color=='GREEN')
			exportRoot = new libGREENbaloon.GREENbaloon();
		else if(color=='MAGNITA')
			exportRoot = new libmagintabaloon.magintabaloon();
		else if(color=='RED')
			exportRoot = new libredbaloon.redbaloon();
		else if(color=='YELLOW')
			exportRoot = new libYELLOWbaloon.YELLOWbaloon();
	}
	$(canvas).attr('data-letter',letter).attr('data-number',number).attr('class','droppable');
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(libA.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	//return canvas;

	var div = document.createElement('div');
	$(div).attr('class','inline-div');
	div.appendChild(canvas);
	root.appendChild(div);
}
function newLetter(letter,color,root) {
	letter=letter.toUpperCase();
	color=color.toUpperCase();
	var img=$(dr[letter]).clone().attr('data-color',color).attr('class','draggable');
	$(root).append(img);
}
//all colors obj
var OBJcolors = function(){};
	OBJcolors.prototype={
		color:['BLUE'//#00AEEF
			  ,'MAGNITA'//#EC008C
			  ,'YELLOW'//#FFF200
			  ,'BLACK'//#231F20
			  ,'GREEN'//#009345
			  ,'RED'//#BE1E2D
			  ,'BROWN'//#8A5D3B
			  ],
		getColor:function(){
			var rnd=Math.floor(Math.random()*this.color.length);
			return this.color.splice(rnd,1)[0];//remove the i'th color
		}
	};
//including words
//$.getScript("words.js", function(){});
//all words obj
var wordsArr=[];
	//tough first, ladies second!
	//['KAORFHS','PDIGA','PABT','POIUY','EHFGAO','AEIOUY','VRYHRD','GIVEUP','GDJOP','WINER','OAITUB','POIDNGR']
	wordsArr['KAORFHS']=['KAORFHS','KAOHFRS','KAOSFHR','AOFKRSH','ARSKFOH','AFKROSH','OKRSAHF','OFRSHKA','RAHSKFO','RHKOFSA','FOSKAHR', 'FKSHORA', 'HOAKFSR', 'HFASROK','SARKHFO','SFKAHOR','SKAFRHO'];
	wordsArr['PDIGA']=['PDGAI','PGDIA','DPAGI','DIAGP','IPDAG','IGADP','GIPAD','GAPID','AIGDP','AGPDI'];
	wordsArr['PABT']=['PATB','ABPT','ATBP','BPAT','TAPB','TPBA'];
	wordsArr['POIUY']=['POYUI','OPIUY','PUIYO','OPYUI','OUPIY','IOUPY','IUOYP','UPOIY','UYOIP','YPIUO'];
	wordsArr['EHFGAO']=['EHGFAO','EHAOFG','EFHAGO','EFAOHG','EGFAOH','EGOAHF','EAFOHG','HEOFGA','HFGAOE','HEAGOF','FEOHGA','GFAHEO','AFGHOE','OFEAHG','OEHFAG'];
	wordsArr['AEIOUY']=['AEIUOY','AEUYOI','AIUEOY','AOIEYU','AUIOYE','AYOIUE','AUYEOI','EYAOIU','IYEUOA','OEIYAU','OIAEUY','OUAEYI','UIOAEY','UIYAEO','YEIAUO','YEAIUO'];
	wordsArr['VRYHRD']=['VRYRDH','VRHRDY','VRDRYH','VHRYRD','VHDRRY','RHDYRV','RRVYDH','YVRHRD','YHDVRR','YDRVHR','HVRRDY','RRDVYH','RYVHDR','DYRVRH','DHYRRV','DRVHRY','DVRRHY'];
	wordsArr['GIVEUP']=['GIVPUE','GVIEUP','GVUPEI','GEVPUI','GUVEPI','GUIPVE','GPVIEU','GPUIEV','IGEUPV','IGUPEV','IVGEPU','IVUGPE','IEPUVG','IUGEVP','VIGEUP','VGEIPU','VGPUIE','VUPIEG','EIVPUG','VPUIGE','EIUVGP','EVGIUP','EGPVIU','UIVEGP','UVEIPG','UVGPIE','UGIVEP','PVEIGU'];
	wordsArr['GDJOP']=['GDJPO','GPDOJ','DOJGP','JOPGD','OJDGP','ODGJP','PJDOG','PGOJD'];
	wordsArr['WINER']=['WINRE','WEINR','WRINE','INREW','IERNW','ENWRI','EWRNI','RNWIE','REWNI','RWIEN'];
	wordsArr['OAITUB']=['OIABTU','OIUBAT','OIBAUT','OUITAB','OUTAIB','OBIATU','IBTOUA','TAIUOB','ABOTUI','BUOATI','BUAIOT','BOAIUT','BOATUI'];
	wordsArr['POIDNGR']=['POIDGNR','POIGRDN','PODINRG','PODGRIN','PONGDIR','POGDNRI','ODINRGP','ODIRGNP','IGPORDN','IGDPORN','IGDNRPO','DNOGPRI','NIPRODG','NIGPDOR','NGODRIP','NGORIPD','RDGOPNI','RDGPINO','RDPOIGN','RNDOGPI','RNODPIG','RNGODIP','RGNIPOD','RGPDINO','RPGDINO','RPONDIG','RPOINGD','RPOIDNG'];
	//goes the ladies
	wordsArr['SIP']=['S', 'I', 'P', 'IS', 'PI', 'PIS', 'PSI', 'SIP'];
	wordsArr['SIT']=['S', 'I', 'T', 'IS', 'IT', 'ITS', 'SIT'];
	wordsArr['SIM']=['S', 'I', 'M', 'IS', 'ISM', 'MI', 'SIM'];
	wordsArr['TON']=['NO', 'NOT', 'ON', 'TO', 'TON'];

	wordsArr['WAR']=['W', 'A', 'R', 'AR', 'RAW', 'WAR'];
	wordsArr['GOD']=['G', 'O', 'D', 'DO', 'DOG', 'GO', 'GOD'];
	wordsArr['MAD']=['M', 'A', 'D', 'AD', 'AM', 'DAM', 'MA', 'MAD'];
	wordsArr['NAP']=['A', 'N', 'P', 'AN', 'NAP', 'PA', 'PAN'];

	wordsArr['GAME']=['A','G','M','E','AG','AGE','AM','EM','GAM','GAME','GEM','MA','MAGE','ME'];
	wordsArr['SAND']=['A', 'S', 'N', 'D', 'AD', 'ADS', 'AN', 'AND', 'ANDS', 'AS', 'SAD', 'SAND'];
	wordsArr['SORE']=['S', 'O', 'R', 'E', 'EROS', 'OR', 'ORE', 'ORES', 'ORS', 'OS', 'RE', 'ROE', 'ROES', 'ROSE', 'SO', 'SORE'];
	wordsArr['NOSE']=['N', 'O', 'S', 'E', 'EN', 'ENS', 'EON', 'EONS', 'NO', 'NOS', 'NOSE', 'ON', 'ONE', 'ONES', 'OS', 'SO', 'SON'];
	wordsArr['BALE']=['A', 'B', 'L', 'E', 'AB', 'ABLE', 'ALB', 'ALE', 'BALE', 'BE', 'EL', 'LA', 'LAB', 'LEA'];

	wordsArr['PALE']=['ALE', 'APE', 'EL', 'LA', 'LAP', 'LEA', 'LEAP', 'PA', 'PAL', 'PALE', 'PE', 'PEA', 'PEAL', 'PLEA'];
	wordsArr['NOSE']=['EN', 'ENS', 'EON', 'EONS', 'NO', 'NOS', 'NOSE', 'ON', 'ONE', 'ONES', 'OS', 'SO', 'SON'];
	wordsArr['EARS']=['AR', 'ARE', 'ARES', 'ARS', 'AS', 'EAR', 'EARS', 'ERA', 'ERAS', 'RE', 'SEA', 'SEAR', 'SERA'];
	wordsArr['MODE']=['DEMO', 'DO', 'DOE', 'DOME', 'EM', 'ME', 'MODE', 'ODE'];

	wordsArr['LEAPS']=['L', 'E', 'A', 'P', 'S', 'AS', 'EL', 'LA', 'PA', 'PE'];
	wordsArr['PONDS']=['P', 'O', 'N', 'D', 'S', 'DO', 'NO', 'ON', 'OS', 'SO'];
	wordsArr['JUMPY']=['J', 'U', 'M', 'P', 'Y', 'MU', 'MY', 'UP'];
	wordsArr['CLOSE']=['C', 'L', 'O', 'S', 'E', 'EL', 'OS', 'SO'];

	wordsArr['REST']=['R', 'E', 'S', 'T'];
	wordsArr['TICK']=['T', 'I', 'C', 'K'];
	wordsArr['TURN']=['T', 'U', 'R', 'N'];
	wordsArr['QUIT']=['Q', 'U', 'I', 'T'];

	wordsArr['JUMPS']=['JUMP', 'JUMPS', 'MUS', 'PUS', 'SUM', 'SUMP', 'UMP', 'UMPS', 'UPS'];
	wordsArr['WORLD']=['LORD', 'LOW', 'OLD', 'OWL', 'ROD', 'ROW', 'WORD', 'WORLD'];
	wordsArr['MINUS']=['INS', 'ISM', 'MINUS', 'MUS', 'NUS', 'SIM', 'SIN', 'SUM', 'SUN'];
	wordsArr['GLUES']=['ELS', 'GEL', 'GELS', 'GLUE', 'GLUES', 'LEG', 'LEGS', 'LEU', 'LEUS', 'LUG', 'LUGE', 'LUGES', 'LUGS', 'SLUG', 'SUE', 'USE'];

	wordsArr['GREAT']=['GATE', 'GEAR', 'GRATE', 'GREAT', 'RAGE', 'RATE', 'RETAG', 'TARE', 'TEAR'];
	wordsArr['GHOST']=['GHOST', 'GOSH', 'GOTH', 'GOTHS', 'HOGS', 'HOST', 'HOTS', 'SHOT'];
	wordsArr['SHOES']=['HOES', 'HOSE', 'HOSES', 'SHOE', 'SHOES'];
	wordsArr['CREAM']=['ACME', 'ACRE', 'CAME', 'CARE', 'CRAM', 'CREAM', 'MACE', 'MARE', 'RACE', 'REAM'];

	wordsArr['CANDY']=['C', 'A', 'N', 'D', 'Y'];
	wordsArr['FROZE']=['F', 'R', 'O', 'Z', 'E'];
	wordsArr['RUSTY']=['R', 'U', 'S', 'T', 'Y'];
	wordsArr['NERDY']=['N', 'E', 'R', 'D', 'Y'];

	wordsArr['CASTE']=['ACES', 'ACTS', 'CASE', 'CAST', 'CASTE', 'CATS', 'EAST', 'EATS', 'ETAS', 'SATE', 'SCAT', 'SEAT', 'SECT', 'SETA', 'TEAS'];
	wordsArr['SKATE']=['EAST', 'EATS', 'ETAS', 'SAKE', 'SATE', 'SEAT', 'SETA', 'SKATE', 'STAKE', 'STEAK', 'TAKE', 'TAKES', 'TASK', 'TEAK', 'TEAKS', 'TEAS'];
	wordsArr['WORST']=['ROTS', 'ROWS', 'SORT', 'STOW', 'STROW', 'TOWS', 'TWOS', 'WORST', 'WORT', 'WORTS'];
	wordsArr['ROMAN']=['MANOR', 'MOAN', 'NORM', 'ROAM', 'ROAN', 'ROMAN'];

var OBJallwords = function(){};
	OBJallwords.prototype={
	words:[
			['SIP','SIT','SIM','TON'],              //1st level
			['WAR','GOD','MAD','NAP'],              //2
			['GAME','SAND','SORE','NOSE','BALE'],       //3       
			['PALE','NOSE','EARS','MODE'],                //4 
			['LEAPS','PONDS','JUMPY','CLOSE'],         //5
			['REST','TICK','TURN','QUIT'],         //6
			['JUMPS','WORLD','MINUS','GLUES'],        //7 
			['GREAT','GHOST','SHOES','CREAM'],         //8
			['CANDY','FROZE','RUSTY','NERDY'],         //9
			['CASTE','SKATE','WORST','ROMAN']         //10
		],
		getWordForLevel:function(i){
			console.log(i);
			return this.words[i-1][Math.floor(Math.random()*this.words[i-1].length)];
		}
	};

//word obj
var OBJword = function(){};
OBJword.prototype={
	bigText:'',//الكلمة الرئيسية
	text:'',//الكلمة
	lock:'',//الحروف المسكرة
	solved:'',//الحروف المحلولة
	color:[],//الألوان لكل حرف
	allWords:new OBJallwords(),
	setBigText:function(levelNo){
		var text=this.allWords.getWordForLevel(levelNo);
		text=text.toUpperCase();
		this.bigText=text;

		var colors=new OBJcolors;
		colors.color=["BLUE", "MAGNITA", "YELLOW", "BLACK", "GREEN", "RED", "BROWN"];
		this.color=[];
		for(var i=0;i<this.bigText.length;i++)
		{
			if(typeof this.color[text[i]]=='undefined')
				{this.color[text[i]]=colors.getColor();}
		}
	},
	setBigTextAs:function(Rtext){
		var text=Rtext;
		text=text.toUpperCase();
		this.bigText=text;

		var colors=new OBJcolors;
		colors.color=["BLUE", "MAGNITA", "YELLOW", "BLACK", "GREEN", "RED", "BROWN"];
		this.color=[];
		for(var i=0;i<this.bigText.length;i++)
		{
			if(typeof this.color[text[i]]=='undefined')
				{this.color[text[i]]=colors.getColor();}
		}
	},
	setLockText:function(newText){
		//??
		var lock='';
		for(var i=0;i<newText.length;i++)
			lock+='0';
		return lock;
	},
	setText:function(){
		this.solved='';
		var text=wordsArr[this.bigText][Math.floor(Math.random()*wordsArr[this.bigText].length)];
		this.text=text.toUpperCase();
		this.lock=this.setLockText(this.text);

		var wordLen=this.getwordlength();

		this.lock=this.setLockText(this.text);
		for(var i=0;i<wordLen;i++)
			this.solved=this.solved+'0';
	},
	getwordlength:function()
	{
		return this.text.length;
	},
	getLetter:function(i){
		return this.text[i-1];
	},
	getbigwordlength:function()
	{
		return this.bigText.length;
	},
	getbigLetter:function(i){
		return this.bigText[i-1];
	},
	isLocked:function(i){
		return(this.lock[i-1]=='0')?false:true;
	},
	getColor:function(i){
		return this.color[this.text[i-1]];
	},
	getBigColor:function(i){
		return this.color[this.bigText[i-1]];
	},
	issolved:function(){
		return (this.solved.indexOf('0')==-1)?true:false;
	},
	solve:function(i){
		this.solved = this.solved.replaceAt(i-1, '1');
	}
};
/********************************************
*********************************************
********************************************/
var gameEngine={
	levelNo:null//the current playes level
	,score:0
	,currword:new OBJword()
	,timerfn:function(){}
	,renderfn:function(){}
	,timer:40
	,wrongtimes:0
	,starsno:0
	,timecountspeed:0
	,canstartlevel:true
	,minusvalue:5
	,foreverstage:0
	,tenwords:0
	,reset:function(){
		$('#gameBaloons').html('<div id="countdown"></div>');
		$('#gameLetters').html('');
		this.score=0;
		$('.score').text('Score: 0');
		this.timer=40;
		gameEngine.renderProgressBar();
		this.currword=new OBJword();
		this.canstartlevel=true;
		window.clearInterval(this.timerfn);
	}
	,getTopLevel:function()
	{
		var curLevel;
		if(window.localStorage.getItem("curLevel")==null)
			curLevel=1;
		else
			curLevel=parseInt(window.localStorage.getItem("curLevel"));
		return curLevel;
	}
	,startLevel:function(i){
		if(!this.canstartlevel)
			return;
		if(i>this.getTopLevel())
			return;
		isgoforever=false;
		this.levelNo=i;
		this.minusvalue=((i/4)+2)*5;
		if(this.minusvalue>5)
			this.minusvalue=5;
		this.timecountspeed=(5000-this.minusvalue*1000)/2;
		if(this.timecountspeed<500)
			this.timecountspeed=500;
		this.reset();
		this.tenwords=0;
		this.wrongtimes=0;
		$.mobile.changePage("#gamefield");
		//this.timecountspeed=1000;
		this.timer=40;
		gameEngine.renderProgressBar();
		this.currword.setBigText(this.levelNo);
		var letnum=this.currword.getbigwordlength();
		for(var i=0;i<letnum;i++)
		{
			//$('gameBaloons').append(
				newCanvas( this.currword.getbigLetter(i+1), this.currword.getBigColor(i+1), document.getElementById('gameBaloons') )
			//	);
		}

		this.canstartlevel=false;
		if(dowehavesound)
		sndcountdown.play();
		jQuery("#countdown").countDown({
			startNumber: 5,
			startFontSize: "75px",
			endFontSize: "6px",
			callBack: function(me) {
				sndcountdown.pause();
				jQuery(me).css("display","none");
				$('#gameBaloons').html('');
				gameEngine.newWord();
				gameEngine.startTimer();
			}
		});
		//render();

	}
	,foreverreset:function(){
		$('#gameBaloons').html('<div id="countdown"></div>');
		$('#gameLetters').html('');
		gameEngine.renderProgressBar();
		this.currword=new OBJword();
		this.canstartlevel=true;
		window.clearInterval(this.timerfn);
	}
	,startforever:function(){
		isgoforever=true;
		this.score=0;
		$('.score').text('Score: 0');
		$.mobile.changePage("#gamefield");
		this.goforever();
	}
	,hardrandomWord:function(){
		var hardwords=['KAORFHS','PDIGA','PABT','POIUY','EHFGAO','AEIOUY','VRYHRD','GIVEUP','GDJOP','WINER','OAITUB','POIDNGR'];
		var rnd=Math.floor(Math.random()*hardwords.length); 
		return hardwords[rnd];
	}
	,goforever:function(i){
		if(i===undefined)
			i=1;
		gameEngine.foreverstage=i;
		gameEngine.minusvalue=((i/4)+2)*5;
		gameEngine.timer=40;
		if(gameEngine.minusvalue>5)
			gameEngine.minusvalue=5;
		gameEngine.timecountspeed=(5000-gameEngine.minusvalue*1000)/2;
		if(gameEngine.timecountspeed<500)
			gameEngine.timecountspeed=500;
		gameEngine.foreverreset();
		gameEngine.wrongtimes=0;
		//gameEngine.timecountspeed=1000;
		gameEngine.timer=40;
		gameEngine.renderProgressBar();
		if(parseInt(gameEngine.foreverstage)<20)
			gameEngine.currword.setBigText(gameEngine.foreverstage);
		else
			gameEngine.currword.setBigTextAs(this.hardrandomWord());			
		if(gameEngine.foreverstage==1)
			$('#foreverwelcome').text(forevermsgs[0]);
		else
			$('#foreverwelcome').text(forevermsgs[gameEngine.foreverstage%20+1]);
		$('#foreverwelcome').css('display','block');

		window.setTimeout(function(){
			var letnum=gameEngine.currword.getbigwordlength();
			for(var i=0;i<letnum;i++)
			{
				//$('gameBaloons').append(
					newCanvas( gameEngine.currword.getbigLetter(i+1), gameEngine.currword.getBigColor(i+1), document.getElementById('gameBaloons') )
				//	);
			}

			gameEngine.canstartlevel=false;
			if(dowehavesound)
			sndcountdown.play();

			$('#foreverwelcome').css('display','none');
			jQuery("#countdown").countDown({
				startNumber: 5,
				startFontSize: "75px",
				endFontSize: "6px",
				callBack: function(me) {
					sndcountdown.pause();
					jQuery(me).css("display","none");
					$('#gameBaloons').html('');
					gameEngine.newWord();
					gameEngine.startTimer();
				}
			});
		}, 4000);
	}
	,newWord:function(){
		$('#gameBaloons').html('<div id="countdown"></div>');
		$('#gameLetters').html('');
		this.currword.setText();
		var letnum=this.currword.getwordlength();
		var arr=[];
		for(var i=0;i<letnum;i++)
		{
			arr.push(i);
			newBaloon( this.currword.getLetter(i+1), this.currword.getColor(i+1), document.getElementById('gameBaloons'), i+1 )
		}
		for(var ii=0;ii<letnum;ii++)
		{		
			var rnd=Math.floor(Math.random()*arr.length);
			i=arr.splice(rnd,1)[0]
			newLetter( this.currword.getLetter(i+1), this.currword.getColor(i+1), document.getElementById('gameLetters'));
		}
		dnd();
	}
	,startTimer:function(){
		window.clearInterval(this.timerfn);
		this.timerfn= setInterval(function(){
			gameEngine.timer--;
			gameEngine.renderProgressBar();
			if(gameEngine.timer<1 || gameEngine.timer>99){
				window.clearInterval(gameEngine.timerfn);
			}
		}, gameEngine.timecountspeed);		
	}
	,solve:function(i){
		this.timer+=4;
		this.renderProgressBar();
		this.currword.solve(i);
		if(this.currword.issolved()){
			this.timer+=8;
			this.score+=parseInt(this.currword.getwordlength()*mul[i]);
			$('.score').text('Score: '+this.score);
			if(isgoforever){
				console.log('goforever');
				if(this.tenwords==5){
					this.tenwords=0;
					this.goforever(gameEngine.foreverstage+1);
				} else {
					this.tenwords++;
					this.newWord();
				}
			} else {
				if(this.timer>99)
					this.win();
				else
					this.newWord();
			}
		}
	}
	,lose:function(){
			snd.pause();
			if(dowehavesound)
			sndgameover.play();
			setTimeout(function(){
				if(dowehavemusic){
					snd.play();
				}
			}, 3000);
		this.canstartlevel=true;
		this.reset();
		$('#score3').text('0');
		$('#score4').text('0');
		$.mobile.pageContainer.pagecontainer("change", "#loselevel");
	}
	,foreverlose:function(){
			snd.pause();
			if(dowehavesound)
			sndgameover.play();
			setTimeout(function(){
				if(dowehavemusic){
					snd.play();
				}
			}, 3000);
		this.canstartlevel=true;

		$('#score3').text(this.score);
		$('#score4').text('0');


			var x=window.localStorage.getItem("score");
			if(x==null || isNaN(x))
				x=0;
			window.localStorage.setItem("score", x*1+this.score);
			$('#myscore').html('My Score: <b>'+parseInt(x*1+parseInt(this.score))+'</b>');


			this.score+=parseInt(this.score*1+100*this.starsno);
			$('.score').text('Score: '+this.score);
		$.mobile.pageContainer.pagecontainer("change", "#loselevel");
		this.reset();
	}
	,win:function(){
		this.canstartlevel=true;
		var level=gameEngine.levelNo;

		var stars;
		if(this.wrongtimes>3)
			stars=0;
		else if(this.wrongtimes>1)
			stars=1;
		else if(this.wrongtimes>0)
			stars=2;
		else
			stars=3;
		this.starsno=stars;
		$('.win-stars img').attr('src','img/WinLose/'+stars+'.png');
		$('#score1').text(this.score);
		$('#score2').text(100*stars);

			this.score+=parseInt(this.score*1+100*this.starsno);
			$('.score').text('Score: '+this.score);

			var x=window.localStorage.getItem("score");
			if(x==null || isNaN(x))
				x=0;
			window.localStorage.setItem("score", x*1+this.score);
			$('#myscore').html('My Score: <b>'+parseInt(x*1+parseInt(this.score))+'</b>');

		window.localStorage.setItem("stars"+level, stars);
		if(level<=this.levelNo)
		{
			window.localStorage.setItem("curLevel", parseInt(this.levelNo)+1);
			window.localStorage.setItem("curLevel", parseInt(this.levelNo)+1);
			this.renderAllLevels();
		}

			this.score+=parseInt(this.score*1+100*this.starsno);
			$('.score').text('Score: '+this.score);
		if(dowehavesound)
		sndwin.play();
		$.mobile.pageContainer.pagecontainer("change", "#winlevel");
		this.reset();
	}
	,renderProgressBar:function(){
		//$(".timer").text(gameEngine.timer);
		if(this.timer>100)
			this.timer=100;
		var top=parseInt(100-this.timer-5);
		$('#prog').css('top',top+'%');
		//$('#prog2').css('top',top+'%');
		if(this.timer<1 && !isgoforever)
			gameEngine.lose();
		if(this.timer<1 && isgoforever)
			gameEngine.foreverlose();
		if(this.timer>99 && this.currword.issolved() && !isgoforever)
			gameEngine.win();	
	}
	,pause:function()
	{

	}
	,resume:function()
	{

	}
	//Render the opened levels and closed levels
	,renderAllLevels:function(){
		var curLevel;
		if(window.localStorage.getItem("curLevel")==null)
			curLevel=1;
		else
			curLevel=parseInt(window.localStorage.getItem("curLevel"));
		//render Levels
		$(".data-level").each(function(index){
			if(parseInt($(this).attr('data-level'))>curLevel){
				$(this).html($('#hiddencontent .lockedlevel').clone());
			}else{
				$(this).html($('#hiddencontent .unlockedlevel').clone());
				$(this).find('.levelno').text('Level '+$(this).attr('data-level'));
				var level=parseInt($(this).attr('data-level'));
				if( window.localStorage.getItem( "stars"+ level)==3 )
					$(this).find('img').attr('src','img/lock/threestars.png');
				else if( window.localStorage.getItem( "stars"+ level)==2 )
					$(this).find('img').attr('src','img/lock/twostars.png');
				else if( window.localStorage.getItem( "stars"+ level)==1 )
					$(this).find('img').attr('src','img/lock/onestar.png');
				else
					$(this).find('img').attr('src','img/lock/zerostar.png');
			}
		})
		$('.unlockedlevel').on('tap',function(){
			if(dowehavesound)
			sndclick.play();
		});
		$('.lockedlevel').on('tap',function(){
			if(dowehavesound)
			sndwrong.play();
		});
	}

};

$(document).on("pageshow","#gamefield",function(){
	//$('#startGameAlert').popup('open');
	snd.volume = 0.4;

});




function init() {
	var canvas, stage, exportRoot;
		canvas = document.getElementById("coloredwordsimg");
		exportRoot = new libcolor.color();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(libcolor.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

	var canvas2, stage2, exportRoot2;
		canvas2 = document.getElementById("bluegreen");
		exportRoot2 = new libblueGREEN.blueGREEN();
		stage2 = new createjs.Stage(canvas2);
		stage2.addChild(exportRoot2);
		stage2.update();
		createjs.Ticker.setFPS(libblueGREEN.properties.fps);
		createjs.Ticker.addEventListener("tick", stage2);
	var canvas3, stage3, exportRoot3;

		canvas3 = document.getElementById("yellowbaloon");
		exportRoot3 = new libyellowbaloon._1();
		stage3 = new createjs.Stage(canvas3);
		stage3.addChild(exportRoot3);
		stage3.update();
		createjs.Ticker.setFPS(libyellowbaloon.properties.fps);
		createjs.Ticker.addEventListener("tick", stage3);

	var canvas4, stage4, exportRoot4;
		canvas4 = document.getElementById("prog");
		exportRoot4 = new libbroggress.broggress();
		stage4 = new createjs.Stage(canvas4);
		stage4.addChild(exportRoot4);
		stage4.update();
		createjs.Ticker.setFPS(libbroggress.properties.fps);
		createjs.Ticker.addEventListener("tick", stage4);
}


function initHelp() {

	var canvas, stage, exportRoot;

	canvas = document.getElementById("helpcanvas");
	exportRoot = new libhelp.help();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);


	canvas = document.getElementById("help2canvas");
	exportRoot = new libhelp2.help2();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

$(document).on('pageinit',function(){
	init();
	initHelp();
	gameEngine.renderAllLevels();

	var x=window.localStorage.getItem("score");
	if(!x)
		x=0;
	$('#myscore').html('My Score: <b>'+parseInt(x*1)+'</b>');
});


//start a selected level
function startLevel(i){
	gameEngine.startLevel(i);
	//الفنكسن بيستدعى أكتر من مرة في التكة الوحدة !!
}
$(document).on("pagecreate","#easyLevel",function(){
	//slide bw. levels
	$("#easyLevel *").on("swipeleft",function(){
		event.stopImmediatePropagation();
		$('#easyTOmedium').click();
	});
	//selecting a level
	$(".levelBlock>div").on("tap",function(){
	    //prevent same event from firing twice
		event.stopImmediatePropagation();
	    var lastclickpoint = $(this).attr('data-clickpoint');
	    var curclickpoint = event.clientX+'x'+event.clientY
	    if (lastclickpoint == curclickpoint) return false;
	    $(this).attr('data-clickpoint',curclickpoint);
	    //end prevent same event from firing twice
		startLevel($(this).attr('data-level'))
	});
});

$(document).on("pagecreate","#mediumLevel",function(){
	//slide bw. levels
	$("#mediumLevel *").on("swipeleft",function(){
		event.stopImmediatePropagation();
		$('#mediumTOhell').click();
	});
	$("#mediumLevel *").on("swiperight",function(){
		event.stopImmediatePropagation();
		$('#mediumTOeasy').click();
	});
	//selecting a level
	$(".levelBlock>div").on("tap",function(){
	    //prevent same event from firing twice
		event.stopImmediatePropagation();
	    var lastclickpoint = $(this).attr('data-clickpoint');
	    var curclickpoint = event.clientX+'x'+event.clientY
	    if (lastclickpoint == curclickpoint) return false;
	    $(this).attr('data-clickpoint',curclickpoint);
	    //end prevent same event from firing twice
		startLevel($(this).attr('data-level'))
	});
});

$(document).on("pagecreate","#hellLevel",function(){
	//slide bw. levels
	$("#hellLevel *").on("swiperight",function(){
		event.stopImmediatePropagation();
		$('#hellTOmedium').click();
	});
	//selecting a level
	$(".levelBlock>div").on("tap",function(){
	    //prevent same event from firing twice
		event.stopImmediatePropagation();
	    var lastclickpoint = $(this).attr('data-clickpoint');
	    var curclickpoint = event.clientX+'x'+event.clientY
	    if (lastclickpoint == curclickpoint) return false;
	    $(this).attr('data-clickpoint',curclickpoint);
	    //end prevent same event from firing twice
		startLevel($(this).attr('data-level'))
	});
});

$(document).on("pagehide","#gamefield",function(){
	window.clearInterval(gameEngine.timerfn);
	gameEngine.canstartlevel=true;
});
$(document).on('pagebeforehide', '#gamefield', function(){       
	window.clearInterval(gameEngine.timerfn);
	gameEngine.canstartlevel=true;
	snd.volume = 0.8;
});

$(document).on("pagebeforeshow","#gamefield",function(){
	//$('#startGameAlert').on("tap",function(){$(this).popup('close')});
	if(gameEngine.levelNo<9)
		$('#gamefieldmain').css('background',"url(img/Sky-01.jpg)");
	else if(gameEngine.levelNo<17)
		$('#gamefieldmain').css('background',"url(img/Sky-02.jpg)");
	else
		$('#gamefieldmain').css('background',"url(img/Sky-03.jpg)");
});

$(document).on("pagebeforeshow","#help",function(){
	inhelppage=true;
	annfun();
});

$(document).on('pagebeforehide', '#help', function(){       
	inhelppage=false;
});