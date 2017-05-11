<?php
	session_start();
	$_SESSION['oxen'] += $_REQUEST["ox"] * 2; // user buys by the yoke = 2 * oxen
	$_SESSION['food'] += $_REQUEST["f"];
	$_SESSION['clothing'] += $_REQUEST["c"];
	$_SESSION['ammo'] += $_REQUEST["ammo"] * 20; // user buys by the box = 20 * ammo
	$_SESSION['wheels'] += $_REQUEST["w"];
	$_SESSION['axles'] += $_REQUEST["ax"];
	$_SESSION['tongues'] += $_REQUEST["t"];
	$_SESSION['money'] -= $_REQUEST["m"];

?>