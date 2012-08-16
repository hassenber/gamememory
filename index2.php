<!DOCTYPE html>
<html lang="en">
<head>
	<title>Memory-match card game</title>
	<meta name="robots" content="none">
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta charset="utf-8">

	<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="js/flexie.js"></script>
    	<script type="text/javascript" src="script/soundmanager2.js"></script>
    	<script type="text/javascript" src="script/360player.js"></script>
    	<script type="text/javascript" src="script/berniecode-animator.js"></script>
	<script type="text/javascript" src="js/matchgame.js"></script>
	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
	<![endif]-->
 <!--[if IE]><script type="text/javascript" src="script/excanvas.js"></script><![endif]-->
<script type="text/javascript">
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
<p class="countdown"></p>
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
<footer>
Tour : <span id="tour">0</span> - Score :  <span id="score">0</span>  -  Pairs :<span id="pairs">0</span> of <span id="clicks">0</span>
</footer>
</body>
</html>
