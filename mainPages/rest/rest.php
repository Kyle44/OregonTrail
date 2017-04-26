<?php
	session_start();

	function displayMonth() {
		$month = $_SESSION['month'];
		
		switch($month) {
			case 1:
				echo "January";
				break;
			case 2:
				echo "February";
				break;
			case 3:
				echo "March";
				break;
			case 4:
				echo "April";
				break;
			case 5:
				echo "May";
				break;
			case 6:
				echo "June";
				break;
			case 7:
				echo "July";
				break;
			case 8:
				echo "August";
				break;
			case 9:
				echo "September";
				break;
			case 10:
				echo "October";
				break;
			case 11:
				echo "November";
				break;
			case 12:
				echo "December";
				break;
		}
	}

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