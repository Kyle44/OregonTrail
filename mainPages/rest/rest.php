<?php
	session_start();
	include '../func.php';
?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>

<body onkeypress="directInput()">

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

	<div class="status">
		Weather: <?php echo $_SESSION['weather']; ?><br>
		Health: <?php echo $_SESSION['health']; ?><br>
		Pace: <?php echo $_SESSION['pace']; ?><br>
		Rations: <?php echo $_SESSION['rations']; ?><br>
	</div>
	<div class="rest">
		How many days would you like to rest?
		<input class="optionInput" id="optionsChoice" 
			type="text" name="quantity" min="0" max="9"
			onkeypress="changeDay(event)" 
			onblur="this.focus()" autofocus>
	</div>
	<div class="options">

		<p class="optionsList">
			1. Continue on trail <br>
			2. Check supplies <br>
			3. Look at map <br>
			4. Change pace <br> 
			5. Change food rations <br>
			6. Stop to rest <br>
			7. Attempt to trade <br>
			8. Talk to people <br>
			9. Buy supplies <br><br><br>

			What is your choice?
		</p>
	</div>

	<script src="../main.js" type="text/javascript"></script>
</body>
</html>
