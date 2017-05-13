<?php
	sleep(1);

	session_start();

	include '../func.php';
	sleep(2);

?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>

<body onload="go('<?php echo $_SESSION["nexLand"]; ?>', '<?php echo $_SESSION["name"]; ?>')">
	<div class="title" id="space">Press RETURN to size up the situation</div>

	<div class="status">
		Date: 	<?php 
				displayMonth();
				echo " " .$_SESSION['day'];
				echo ", " . $_SESSION['year'];
			?><br>
		Weather: <?php echo $_SESSION['weather']; ?><br>
		Health: <?php echo $_SESSION['health']; ?><br>
		Food: <?php echo $_SESSION['food']; ?><br>
		Next landmark: <?php echo $_SESSION['nexLand']; ?><br>
		Miles travelled: <?php echo $_SESSION['miles']; ?><br>
	</div>

	<script src="../main.js" type="text/javascript"></script>
	<script src="../../landmarkInfo.js" type="text/javascript"></script>

	<script>
		document.body.onkeyup = function(e){
    			if(e.keyCode == 13){
				location.replace("../main.php");
    			}
		};
	</script>
</body>
</html>
