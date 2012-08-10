<!DOCTYPE html>
<html lang="en">
<head>
	<title>Memory-match card game</title>
	<meta name="robots" content="none">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta charset="utf-8">
	<link rel="stylesheet" href="style.css" />
	<link href='http://fonts.googleapis.com/css?family=Sevillana' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" type="text/css" href="sound/demo/index.css" />
        <link rel="stylesheet" type="text/css" href="sound/demo/flashblock/flashblock.css" />

	<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script src="js/jquery-1.7.2.min.js"></script>
	<script src="js/matchgame.js"></script>
	<script src="js/flexie.js"></script>
<script type="text/javascript" src="sound/demo/360-player/script/berniecode-animator.js"></script>
<script type="text/javascript" src="sound/script/soundmanager2.js"></script>
<script type="text/javascript" src="sound/demo/360-player/script/360player.js"></script>

<!--[if IE]><script type="text/javascript" src="sound/demo/360-player/script/excanvas.js"></script><![endif]-->
<script type="text/javascript">
soundManager.setup({
  url: 'sound/swf/'
});
var test=1;
$(window).load(function(){
soundManager.onready(function() {
var mySoundObject = soundManager.createSound({
 id: 'mySong',
 url: '/data/2.mp3',
onfinish: function() {
    mySoundObject.stop();
    mySoundObject.play();

  }
});
mySoundObject.play();
});

$('#pause').click(function() {
if (test==1){
soundManager.pause('mySong');
test=0;
$('#pause').removeClass('pause');
$('#pause').addClass('play');
}
else
{
soundManager.play('mySong');
test=1;
$('#pause').removeClass('play');
$('#pause').addClass('pause');
}
});
});

threeSixtyPlayer.config.scaleFont = (navigator.userAgent.match(/msie/i)?false:true);
threeSixtyPlayer.config.showHMSTime = true;

threeSixtyPlayer.config.useWaveformData = true;
threeSixtyPlayer.config.useEQData = true;

if (threeSixtyPlayer.config.useWaveformData) {
  soundManager.flash9Options.useWaveformData = true;
}
if (threeSixtyPlayer.config.useEQData) {
  soundManager.flash9Options.useEQData = true;
}
if (threeSixtyPlayer.config.usePeakData) {
  soundManager.flash9Options.usePeakData = true;
}

if (threeSixtyPlayer.config.useWaveformData || threeSixtyPlayer.flash9Options.useEQData || threeSixtyPlayer.flash9Options.usePeakData) {
  soundManager.preferFlash = true;
}

threeSixtyPlayer.config.useFavIcon = false;

</script>
</head>
<body>
	<header>
		<h1>Memory-match card game</h1>
	</header>
	<div id="main-container">
		<div id="stats">
			<div>You've made <span id="clicks">0</span> click(s) and found <span id="pairs">0</span> pair(s).</div>
		</div>
		<div style="clear:both"></div>
		<section id="game">
			<div id="cards">
				<div class="card">
					<div class="face front"></div>
					<div class="face back"></div>
				</div>
			</div>
			<div style="clear:both"></div>
		</section>
		<div id="go-2-nxt-lvl"></div>
		<div id="highscores">
			<h2>HIGH SCORES</h2>
			<table id="update-val">
			</table>
		
<a id="pause" href="#" class="pause"></a>
</div>
</div>
 
	</div>
	<div style="clear:both"></div>
	<footer>
	</footer>

</body>
</html>
