<?php
	session_start();
	if ($_SESSION['name'] == 'South Pass' && $_SESSION['branch'] == 1) {
		$_SESSION['branch'] = 0;
		header('Location: branch/branch.php');
		exit;
	}
	if ($_SESSION['name'] == 'the Blue Mountains' && $_SESSION['branch'] == 1) {
		$_SESSION['branch'] = 0;
		header('Location: branch/branch.php');
		exit;
	}
	include '../func.php';
	sleep(2);

?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>

<body>
	<div class="rest" id="info">
		From <?php echo $_SESSION['name']; ?> it is
		<?php echo $_SESSION['nexLand']; ?> miles to 
		<?php echo $_SESSION['nexName']; ?>.
	</div><br>
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
	<div class="title" id="space">Press SPACE BAR to continue</div>

	<script>
		document.body.onkeyup = function(e){
    			if(e.keyCode == 32){
				location.replace("go.php");
    			}
		};
	</script>
</body>
</html>
