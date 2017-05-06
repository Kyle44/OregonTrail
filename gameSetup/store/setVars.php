<?php
	session_start();
	$_SESSION['oxen'] = $_REQUEST["ox"];
	$_SESSION['food'] = $_REQUEST["f"];
	$_SESSION['clothing'] = $_REQUEST["c"];
	$_SESSION['ammo'] = $_REQUEST["ammo"];
	$_SESSION['wheels'] = $_REQUEST["w"];
	$_SESSION['axles'] = $_REQUEST["ax"];
	$_SESSION['tongues'] = $_REQUEST["t"];
	$_SESSION['money'] = $_REQUEST["m"];

?>