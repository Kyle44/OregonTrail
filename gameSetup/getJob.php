<!-- Name: Kyle Fritz
	 File: getJob.php
	 Date Created: 4/26/17
	 Description: Straight PHP that will request the type of job that the user chose
-->

<?php
	session_start();

	$p = $_REQUEST["p"];

	if ($p == "1") {
		$_SESSION['job'] = 'banker';
	}
	else if ($p == "2") {
		$_SESSION['job'] = 'carpenter';
	}
	else if ($p == "3") {
		$_SESSION['job'] = 'farmer';
	}

?>