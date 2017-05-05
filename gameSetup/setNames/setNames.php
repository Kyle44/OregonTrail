<!-- Name: Kyle Fritz
	 File: setNames.php
	 Date Created: 5/4/17
	 Description: Gets the names of the members of the party
-->

<!-- DONE -->

<?php
	session_start();
	$_SESSION['name1'] = $_REQUEST["1"];
	$_SESSION['name2'] = $_REQUEST["2"];
	$_SESSION['name3'] = $_REQUEST["3"];
	$_SESSION['name4'] = $_REQUEST["4"];
	$_SESSION['name5'] = $_REQUEST["5"];
?>