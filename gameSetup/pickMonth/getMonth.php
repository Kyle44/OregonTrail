<?php
	session_start();
	$p = $_REQUEST["p"];

	switch ($p) {
		case 1:
			$startingMonth = 3;
			break;
		case 2:
			$startingMonth = 4;
			break;
		case 3:
			$startingMonth = 5;
			break;
		case 4:
			$startingMonth = 6;
			break;
		case 5:
			$startingMonth = 7;
			break;
		default:
			echo "ERROR Getting month";
			break;
	}
	$_SESSION['month'] = $startingMonth;
?>