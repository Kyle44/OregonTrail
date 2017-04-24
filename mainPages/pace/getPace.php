<?php
	session_start();

	$p = $_REQUEST["p"];


	if ($p == "1") {
		$_SESSION['pace'] = 'steady';

	}
	if ($p == "2") {
		$_SESSION['pace'] = 'strenuous';

	}
	if ($p == "3") {
		$_SESSION['pace'] = 'grueling';

	}

?>