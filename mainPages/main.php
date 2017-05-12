<!-- Name: Kush Patel
	 File: main.php
	 Date Created: 4/15/17
	 Description: Main page
	 URL: https://swe.umbc.edu/~pak2/OregonTrail/main.php
-->

<html>
<head>
	<link rel="stylesheet" type="text/css" href="../proj2.css">
</head>

<body onkeypress="directInput()">

	<div class="title textAlignCenter">
		<h2>
			<?php
				echo $_SESSION['name'] . "<br>";
				displayMonth();
				echo " " .$_SESSION['day'];
				echo ", " . $_SESSION['year'];
			?>
		</h2>
	</div>

	<div class="status normalFont">
		Weather: <?php echo $_SESSION['weather']; ?><br>
		Health: <?php echo $_SESSION['health']; ?><br>
		Pace: <?php echo $_SESSION['pace']; ?><br>
		Rations: <?php echo $_SESSION['rations']; ?><br>
	</div>

	<div class="options normalFont">
		You may: <br>
		<p class="optionsList">
			1. Continue on trail <br>
			2. Check supplies <br>
			3. Look at map <br>
			4. Change pace <br>
			5. Change food rations <br>
			6. Stop to rest <br>
			7. Attempt to trade <br>
			<span id="inTown" style="display: none">8. Talk to people <br> 9. Buy supplies </span>
			<span id="onTrail" style="display: none">8. Fish for food </span>
			<br><br><br>

			What is your choice?
			<input class="optionInput normalFont" id="optionsChoice"
				type="text" name="mainVal" min="1" max="9"
				onkeypress="checkEnteredValue(event)"
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>
	<script src="../landmarkInfo.js" type="text/javascript"></script>
	<script src="main.js" type="text/javascript"></script>
</body>
</html>
