<?php
	session_start();
	$_SESSION['name'] = 'Chimney Rock';
	$_SESSION['nexName'] = 'Fort Laramie';

	$_SESSION['nexLand'] = 86;
	include '../func.php';
?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">

<style>
.map{
    background-image: url("images/chimney.png");
}
</style>
</head>
<body>
	<canvas class="map" width="680" height="390"
			 style="margin-left:26em">
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