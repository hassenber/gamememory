<?php
if(isset($_SERVER['REQUEST_METHOD'])){
$xml = simplexml_load_file("../data/highscores.xml");

$sxe = new SimpleXMLElement($xml->asXML());
$time = time();
$sxe->asXML("../data/save/save_".$time.".xml");
$fp = fopen("../data/highscores.xml", wb);
fwrite($fp, '<?xml version="1.0"?><highscores></highscores>');
fclose($fp);
}
?>