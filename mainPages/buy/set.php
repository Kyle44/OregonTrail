<?php
	sleep(1);

	session_start();

	if(!isset($_SESSION['oxPrice'])){
		$_SESSION['oxPrice'] = 20;
		$_SESSION['clothPrice'] = 10;
		$_SESSION['ammoPrice'] = 2;
		$_SESSION['wheelPrice'] = 10;
		$_SESSION['axlePrice'] = 10;
		$_SESSION['tonguePrice'] = 10;
		$_SESSION['foodPrice'] = 0.20;
	}

	include '../func.php';
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body onload="price()">


	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="buy.js" type="text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

</body>
</html>