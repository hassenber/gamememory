<?php
$check_cookie = time();
if(isset($_SERVER['REQUEST_METHOD'])){
	$xml = simplexml_load_file("highscores.xml"); //Load the XML file.
	$sxe = new SimpleXMLElement($xml->asXML()); //Create a SimpleXMLElement object with the source of the XML file.
	//Data validation
	$time = date("F j, Y, g:i a",time());
	$name = substr($_GET["name"], 0, 15);
	$value = substr($_GET["value"], 0, 3);
	$email_add = substr($_GET["email_add"], 0, 35);
	if(!preg_match('/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/', $email_add)) {
		$email_add = "NO EMAIL";
	};
	//Add child in XML tree
	if (($name !="") && ($email_add != "NO EMAIL") && ($value >= 24)) {
		$email_add = base64_encode($email_add);
		$highscore = $sxe->addChild("highscore");
		$highscore->addChild("time", $time);
		$highscore->addChild("name", $name);
		$highscore->addChild("value", $value);
		$highscore->addChild("email_add", $email_add);
		//Add data set to XML file
		$sxe->asXML("highscores.xml");
	}
}
?>