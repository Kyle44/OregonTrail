<?php
	session_start();
	$_SESSION['name'] = 'Fort Bridger';
	$_SESSION['nexName'] = 'Soda Springs';

	$_SESSION['nexLand'] = 162;
	include '../func.php';
?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">

<style>
.map{
    background-image: url("images/bridger.png");
}
</style>
</head>
<body>
	<canvas class="map" width="700" height="400"
			 style="margin-left:25em">
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