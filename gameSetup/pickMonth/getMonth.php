<?php
	session_start();
	$p = $_REQUEST["p"];

	switch ($p) {
		case 1:
			$startingMonth = "March";
			break;
		case 2:
			$startingMonth = "April";
			break;
		case 3:
			$startingMonth = "May";
			break;
		case 4:
			$startingMonth = "June";
			break;
		case 5:
			$startingMonth = "July";
			break;
		default:
			echo "ERROR Getting month";
			break;
	}
	$_SESSION['month'] = $startingMonth;
?>