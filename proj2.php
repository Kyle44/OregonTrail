<!-- Name: Kyle Fritz
	 File: proj2.php
	 Date Created: 4/14/17
	 Description: Home screen
-->

<?php
	session_start();
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
	$_SESSION['lastPage'] = 'proj2.php';
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="proj2.css">
</head>

<body onkeypress="directInput()">

	<div class="title textAlignCenter">
		<h2>
			The Oregon Trail
		</h2>
	</div>

	<div class="options normalFont">
		You may: <br>
		<p class="optionsList">
			1. Travel the trail <br>
			2. Learn about the trail <br>
			3. See the Oregon Top Ten <br>
			4. Turn sound <?php echo $_SESSION['isSound']; ?> <br> <!-- Turn sound on or off -->
			5. Choose Management Options <br>
			6. End <br><br>
			What is your choice?
			<input class="optionInput normalFont" id="optionsChoice" type="text" name="quantity" min="1" max="6" onkeypress="checkEnteredValue(event)" onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>
	<script src="proj2.js" type="text/javascript"></script>
</body>
</html>
