<?php
	session_start();

	$p = $_REQUEST["p"];


	if ($p == "1") {
		$_SESSION['rations'] = 'filling';

	}
	if ($p == "2") {
		$_SESSION['rations'] = 'meager';

	}
	if ($p == "3") {
		$_SESSION['rations'] = 'bare bones';

	}

?>