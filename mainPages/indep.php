<?php

	session_start();

	if(!isset($_SESSION['name'])){
		$_SESSION['name'] = 'Independence';
	}
	if(!isset($_SESSION['month'])){
		$_SESSION['month'] = 3;
	}
	if(!isset($_SESSION['day'])){
		$_SESSION['day'] = 1;
	}
	if(!isset($_SESSION['year'])){
		$_SESSION['year'] = 1848;
	}
	include 'func.php';
?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../proj2.css">

<style>
.map{
    background-image: url("images/independence.png");
}
</style>
</head>
<body>
	<canvas class="map" width="900" height="500"
			 style="margin-left:20em">
	</canvas>
	<div class="title">
		<h2>
			<?php 
				echo $_SESSION['name'] . "<br>";
				displayMonth();
				echo " " .$_SESSION['day'];
				echo ", " . $_SESSION['year'];
			?>
		</h2>
	</div>
	<div class="title">Press SPACE BAR to continue</div>

	<script>
		document.body.onkeyup = function(e){
    			if(e.keyCode == 32){
				location.replace("main.php");
    			}
		}
	</script>

</body>
</html>