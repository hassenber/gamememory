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
    <link rel="stylesheet" type="text/css" href="flashblock/flashblock.css" />

	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
	<![endif]-->
	<script src="js/jquery-1.7.2.min.js"></script>
	<script src="js/matchgame.js"></script>
	<script src="js/flexie.js"></script>
    <script type="text/javascript" src="script/soundmanager2.js"></script>
    <script type="text/javascript" src="/script/360player.js"></script>
 <!--[if IE]><script type="text/javascript" src="script/excanvas.js"></script><![endif]-->
<script type="text/javascript">
var test=1;
$(window).load(function(){
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
<span id="clicks">0</span> click(s) and found <span id="pairs">0</span> pair(s).
<a id="pause" href="#" style="float:left;" class="pause"></a>
	</header>
	<div id="main-container">
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
</div>
 
	</div>
	<div style="clear:both"></div>
</body>
</html>
