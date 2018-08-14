<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1">
	<title></title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1">
	<meta http-equiv="cleartype" content="on">
	<link rel="stylesheet" href="css/jquery.mobile-1.4.5.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	
	<script src="js/easeljs-0.8.1.min.js"></script>
	<script src="js/tweenjs-0.6.1.min.js"></script>
	<script src="js/movieclip-0.8.1.min.js"></script>
	<script src="img/mainpage/color.js"></script><!--colored words-->
	<script src="img/mainpage/blue GREEN.js"></script><!--Baloon-->
	<script src="img/mainpage/1.js"></script><!--Baloon-->

	<!--script src="js/cordova.fb.login.js"></script-->
	<!--script src="js/fb.login.js"></script-->

	<script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/jquery.mobile-1.4.5.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
	<script src="js/jquery.ui.touch-punch.min.js"></script>
	<script src="js/main.js"></script>

	<!--letters-->
		<script src="js/letters/A.js"></script>
		<script src="js/letters/B.js"></script>
		<script src="js/letters/C.js"></script>
		<script src="js/letters/D.js"></script>
		<script src="js/letters/E.js"></script>
		<script src="js/letters/F.js"></script>
		<script src="js/letters/G.js"></script>
		<script src="js/letters/H.js"></script>
		<script src="js/letters/I.js"></script>
		<script src="js/letters/J.js"></script>
		<script src="js/letters/K.js"></script>
		<script src="js/letters/L.js"></script>
		<script src="js/letters/M.js"></script>
		<script src="js/letters/N.js"></script>
		<script src="js/letters/O.js"></script>
		<script src="js/letters/P.js"></script>
		<script src="js/letters/Q.js"></script>
		<script src="js/letters/R.js"></script>
		<script src="js/letters/S.js"></script>
		<script src="js/letters/T.js"></script>
		<script src="js/letters/U.js"></script>
		<script src="js/letters/V.js"></script>
		<script src="js/letters/W.js"></script>
		<script src="js/letters/X.js"></script>
		<script src="js/letters/Y.js"></script>
		<script src="js/letters/Z.js"></script>
	<!--end letters-->
	<!--baloons-->
		<script src="js/baloons/black.js"></script>
		<script src="js/baloons/BLUE.js"></script>
		<script src="js/baloons/brown.js"></script>
		<script src="js/baloons/GREEN.js"></script>
		<script src="js/baloons/maginta.js"></script>
		<script src="js/baloons/red.js"></script>
		<script src="js/baloons/YELLOW.js"></script>
	<!--end baloons-->
		<script src="img/prog/broggress.js"></script>
		<script src="img/help/help.js"></script>
		<script src="img/help/help2.js"></script>
</head>

<body>
	<!--main page-->
	<div data-role="page" id="mainPageLogin">
		<div class="exitGame">
			<img src="img/btn-exit.png"/>
		</div>
		<div data-role="panel" id="settings" data-display="push">
			<div class="cen-align">
				<div class="settings-header">
					<img src="img/settings/header.png"/>
				</div>
				<div class="settings-controllers">
					<div class="settings-controllers-sound">
						<img src="img/settings/sound.png"/>
						<img class="onscroll" src="img/sound.png"/>
					</div>
					<div class="settings-controllers-music">
						<img src="img/settings/music.png"/>
						<img class="onscroll" src="img/sound.png"/>
					</div>
				</div>
				<div class="settings-fb">
					<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
					</fb:login-button>
					<!--div class="fb-login-button" data-max-rows="1" data-size="xlarge" data-show-faces="false" data-auto-logout-link="true"></div-->
				</div>
				<div class="fbname">
					<!--hahahha-->
				</div>
				<div id="status" style="display:none">
				</div>
			</div>
		</div>
		<div data-role="main">
		  	<div id="myscore">
		  		My Score: <b>9535</b>
		  	</div>
			<canvas id="bluegreen" width="80" height="110"></canvas>
			<canvas id="yellowbaloon" width="120" height="150"></canvas>
		  	<div>
		    	<canvas id="coloredwordsimg" width="515" height="129"></canvas>
	    	</div>
	    	<div class="ui-content btnsholder">
	    		<a href="#easyLevel"    class="btnimg"><img src="img/btn-SinglePlayer.png"/></a>
	    		<a href="" id="forever" class="btnimg"><img src="img/btn-forever.png"/></a-->
	    		<a href="#help"         class="btnimg"><img src="img/btn-Help.png"/></a>
	    		<a href="#settings"     class="btnimg"><img src="img/btn-Settings.png"/></a>
	    	</div>
		</div>
	</div>
	<!--end main page-->
	<!--help page-->
	<div data-role="page" id="help">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main" class="ui-content">
	    	<img id="helpbg" src="img/help/help.png"/>
    		<canvas id="helpcanvas" width="320" height="180"></canvas>
    		<div class="helpcountdown"></div>
    		<canvas id="help2canvas" width="320" height="180"></canvas>
    		<!--span id="helpnote1">
	    		A word will show for a brief period of time.<br/>
	    		Every letters has a different color than the other letters.<br/>
    		</span>

			<span id="helpnote2">
				few balloons with random colors are shown. <br/>
				You will match letters with there right color.
			</span-->
		</div>
	</div>
	<!--end help page-->
	<!--game field page-->
	<div data-role="page" id="gamefield">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div class="score">
			
		</div>
		<div class="timer">
		</div>
		<div id="foreverwelcome">
		</div>
		<div id="gamefieldmain" data-role="main" class="">
			<div class="progbardiv">
				<div>
					<div style="position:relative">
						<img id="progbg" src="img/prog/bg.png"/>
						<canvas id="prog" width="50" height="310"></canvas>
						<!--img id="prog2" src="img/prog/bubble.gif"/-->
					</div>
				</div>
			</div>
			<div id="gameLetters">
				
			</div>
			<div id="gameBaloons">
				<div id="countdown"></div>
			</div>
		</div>
	</div>
	<!--end game field page-->
	<!--multi player page-->
	<div data-role="page" id="multiplayer">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main">
	    	<h3>Play online</h3>
	    	<div class="ui-grid-a">
	    		<div class="ui-block-a" style="border-right:solid 1px #ccc">
	    			<center><h3>Start new game</h3></center>
					<label for="name">My Nick name</label>
					<input type="text" name="name" id="name" placeholder="My Nick name...">
					<button>Create Game</button>
	    		</div>
	    		<div class="ui-block-b">
	    			<center><h3>or Join a created one</h3></center>
					<label for="name2">My Nick name</label>
					<input type="text" name="name2" id="name2" placeholder="My Nick name...">
					<label for="name3">Opponent Nick name</label>
					<input type="text" name="name3" id="name3" placeholder="My Nick name...">
					<button>Create Game</button>
	    		</div>
	    	</div>
		</div>
	</div>
	<!--end multi player page-->
	<!--Easy levels page-->
	<div data-role="page" id="easyLevel">
		<!--hidden content-->
		<div id="hiddencontent" style="display:none">
			<div class="lockedlevel">
				<img src="img/lock/lock.png"/>
			</div>
			<div class="unlockedlevel">
				<div class="levelno">
					Level (1)
				</div>
				<div class="stars">
					<img src="img/lock/zerostar.png"/>
				</div>
			</div>
		</div>
		<!--end hidden content-->
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main" class="cen-align">
	    	<h3>Easy</h3>
			<div class="ui-grid-c">
				<div class="ui-block-a levelBlock">
					<div class="data-level" data-level="1">
						&nbsp;&nbsp;&nbsp;&nbsp;*<br>
						&nbsp;&nbsp;&nbsp;***<br>
						&nbsp;&nbsp;*****<br>
						&nbsp;*******<br>
					</div>
				</div>
				<div class="ui-block-b levelBlock">
					<div class="data-level" data-level="2">
						2
					</div>
				</div>
				<div class="ui-block-c levelBlock">
					<div class="data-level" data-level="3">
						3
					</div>
				</div>
				<div class="ui-block-d levelBlock">
					<div class="data-level" data-level="4">
						4
					</div>
				</div>
			</div>
			<div class="ui-grid-c">
				<div class="ui-block-a levelBlock">
					<div class="data-level" data-level="5">
						5
					</div>
				</div>
				<div class="ui-block-b levelBlock">
					<div class="data-level" data-level="6">
						6
					</div>
				</div>
				<div class="ui-block-c levelBlock">
					<div class="data-level" data-level="7">
						7
					</div>
				</div>
				<div class="ui-block-d levelBlock">
					<div class="data-level" data-level="8">
						8
					</div>
				</div>
			</div>
		</div>
		<div class="nextDifficulty">
			<a id="easyTOmedium" href="#mediumLevel" data-transition="slide"><img src="img/btn-next.png"/></a>
		</div>
  	</div>
	<!--end Easy levels page-->
	<!--Medium levels page-->
	<div data-role="page" id="mediumLevel">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main" class="cen-align">
	    	<h3>Medium</h3>
			<div class="ui-grid-c">
				<div class="ui-block-a levelBlock">
					<div class="data-level" data-level="9">
						1
					</div>
				</div>
				<div class="ui-block-b levelBlock">
					<div class="data-level" data-level="10">
						2
					</div>
				</div>
				<div class="ui-block-c levelBlock">
					<div class="data-level" data-level="11">
						3
					</div>
				</div>
				<div class="ui-block-d levelBlock">
					<div class="data-level" data-level="12">
						4
					</div>
				</div>
			</div>
			<div class="ui-grid-c">
				<div class="ui-block-a levelBlock">
					<div class="data-level" data-level="13">
						5
					</div>
				</div>
				<div class="ui-block-b levelBlock">
					<div class="data-level" data-level="14">
						6
					</div>
				</div>
				<div class="ui-block-c levelBlock">
					<div class="data-level" data-level="15">
						7
					</div>
				</div>
				<div class="ui-block-d levelBlock">
					<div class="data-level" data-level="16">
						8
					</div>
				</div>
			</div>
		</div>
		<div class="nextDifficulty">
			<a id="mediumTOhell" href="#hellLevel" data-transition="slide"><img src="img/btn-next.png"/></a>
		</div>
		<div class="prevDifficulty">
			<a id="mediumTOeasy" href="#easyLevel" data-transition="slide" data-direction="reverse"><img src="img/btn-prev.png"/></a>
		</div>
  	</div>
	<!--end Medium levels page-->
	<!--Hell levels page-->
	<div data-role="page" id="hellLevel">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main" class="cen-align">
	    	<h3>Hell</h3>
			<div class="ui-grid-c">
				<div class="ui-block-a levelBlock">
					<div class="data-level" data-level="17">
						1
					</div>
				</div>
				<div class="ui-block-b levelBlock">
					<div class="data-level" data-level="18">
						2
					</div>
				</div>
				<div class="ui-block-c levelBlock">
					<div class="data-level" data-level="19">
						3
					</div>
				</div>
				<div class="ui-block-d levelBlock">
					<div class="data-level" data-level="20">
						4
					</div>
				</div>
			</div>
			<div class="ui-grid-c">
				<div class="ui-block-a levelBlock">
					<div class="data-level" data-level="21">
						5
					</div>
				</div>
				<div class="ui-block-b levelBlock">
					<div class="data-level" data-level="22">
						6
					</div>
				</div>
				<div class="ui-block-c levelBlock">
					<div class="data-level" data-level="23">
						7
					</div>
				</div>
				<div class="ui-block-d levelBlock">
					<div class="data-level" data-level="24">
						8
					</div>
				</div>
			</div>
		</div>
		<div class="prevDifficulty">
			<a id="hellTOmedium" href="#mediumLevel" data-transition="slide" data-direction="reverse"><img src="img/btn-prev.png"/></a>
		</div>
  	</div>
	<!--end Hell levels page-->
	<div data-role="page" id="winlevel">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main">
			<div class="win-stars">
				<img src="img/WinLose/0.png">
			</div>
			<div id="winningscore">
				<div id="score1">0
				</div>
				<div id="score2">0
				</div>
			</div>
			<div class="win-lose-buttons">
				<a href="#easyLevel"><img src="img/WinLose/levels.png"/></a>
				<img class="jsrepeat" src="img/WinLose/repeat.png" />
				<img class="jsnext" src="img/WinLose/next.png" />
			</div>
		</div>
	</div>
	<div data-role="page" id="loselevel">
		<div class="goBcak">
			<a href="#mainPageLogin"><img src="img/btn-home.png"/></a>
		</div>
		<div data-role="main">
			<div id="loosingscore">
				<div id="score3">0
				</div>
				<div id="score4">0
				</div>
			</div>
			<div class="win-lose-buttons">
				<a href="#easyLevel"><img src="img/WinLose/levels.png"/></a>
				<img class="jsrepeat" src="img/WinLose/repeat.png" />
				<!--img src="img/WinLose/next.png" onclick="startLevel(gameEngine.levelNo+1)" /-->
			</div>
		</div>
	</div>
</body>
</html>