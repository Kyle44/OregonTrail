<?php
	session_start();
	$_SESSION['oxPrice'] = $_REQUEST["ox"];
	$_SESSION['foodPrice'] = $_REQUEST["f"];
	$_SESSION['clothPrice'] = $_REQUEST["c"];
	$_SESSION['ammoPrice'] = $_REQUEST["ammo"];
	$_SESSION['wheelPrice'] = $_REQUEST["w"];
	$_SESSION['axlePrice'] = $_REQUEST["ax"];
	$_SESSION['tonguePrice'] = $_REQUEST["t"];

?>