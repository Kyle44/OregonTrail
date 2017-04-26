<!-- Name: Kyle Fritz
	 File: jobSetup.php
	 Date Created: 4/26/17
	 Description: Banker, carpenter, or farmer
-->

<?php
/*	session_start();
	if(!isset($_SESSION['lastPage'])){
		$_SESSION['lastPage'] = 'proj2.php';
	}
	if (isset($_SESSION['isSound']) && $_SESSION['lastPage'] == 'sound.php'){ // if set, then switch it
		if($_SESSION['isSound'] == 'on'){
			$_SESSION['isSound'] = 'off';
		}
		else{
			$_SESSION['isSound'] = 'on';
		}
	}
	else{
		$_SESSION['isSound'] = 'off'; // first set it to off
	}
	$_SESSION['lastPage'] = 'proj2.php';*/
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../proj2.css">
</head>

<body onkeypress="directInput()">

	<div class="textAlignCenter">
		<p>
			Many kinds of people made the trip to Oregon.
		</p>
	</div>


	<div class="options normalFont">
		<p>You may: </p><br>
		<p class="optionsList">
			1. Be a banker from Boston <br>
			2. Be a carpenter from Ohio <br>
			3. Be a farmer from Illinois <br>
			4. Find out the differences between these choices
			<br><br>
			What is your choice?
			<input class="optionInput normalFont" id="optionsChoice" type="text" name="quantity" min="1" max="4" onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>
	<script src="jobSetup.js" type="text/javascript"></script>
</body>
</html>
