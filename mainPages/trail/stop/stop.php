<?php
	sleep(1);

	session_start();
		
	include '../../func.php';
	sleep(2);

?>

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../../proj2.css">
</head>

<body onkeypress="directInput()">

	<div class="title">
		<h2>
			<?php 
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
	
	<div class="options">
		You may: <br>
		<p class="optionsList">
			1. Continue on trail <br>
			2. Check supplies <br>
			3. Look at map <br>
			4. Change pace <br> 
			5. Change food rations <br>
			6. Stop to rest <br>
			7. Attempt to fish for food <br><br><br>

			What is your choice?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="7"
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="stop.js" type="text/javascript"></script>
</body>
</html>