<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Administration Page</title>
	<link rel="stylesheet" href="../style.css" />
</head>
<body>
<header class="font-size-1">
In this section you have the posibility to manipulate and evaluate data stored for highscores.
</header>
<?php
	$list_files = array();
	$dir = '../data/save/';
	$directory = opendir($dir);
	$item;
	while(false !== ($item = readdir($directory))){
    //List only xml files
         if(strpos($item, '.xml',1)){
              $list_files[] = $item;
         }
    };
?>
<div id="admin-content">
	<p>Cliking on the button, the content of <b>highscores.xml</b> file will be saved in a file with a name like "<b>save_timestamp.xml</b>", and
	the contet of the file will be only "&lt;?xml version="1.0"?&gt;&lt;highscores&gt;&lt;/highscores&gt;<button id="save">Save</button>
	</p>
	<p>The next section gives the posibility to display data stored.</p>
	<p>Select a file to show:
		<select id="single">
			<?php
				for ($i=0; $i<=(sizeof($list_files)-1); $i++) {
					echo "<option value=" . $list_files[$i] . ">" . $list_files[$i]. "</option>";
				}
		?>
		</select>
		<button id="display">Show</button>
	</p>
	<table id="values-txt"></table>
</div>
<script src="../js/jquery-1.7.2.min.js"></script>
<script src="../js/admin.js"></script>
</body>
</html>
