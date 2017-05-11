<?php
	session_start();
	$_SESSION['name'] = 'Fort Boise';
	$_SESSION['nexName'] = 'the Blue Mountains';

	$_SESSION['nexLand'] = 160;
	include '../func.php';
?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">

<style>
.map{
    background-image: url("images/boise.png");
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
				location.replace("../main.php");
    			}
		}
	</script>

</body>
</html>