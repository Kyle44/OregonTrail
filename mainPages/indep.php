<?php

	session_start();

	if(!isset($_SESSION['name'])){
		$_SESSION['name'] = 'Independence';
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
		var game = JSON.parse(window.sessionStorage.game);
		game.location = "Independence";
 		window.sessionStorage.game = JSON.stringify(game);
		document.body.onkeyup = function(e){
    			if(e.keyCode == 32){
				location.replace("main.html");
    			}
		}
	</script>

</body>
</html>
