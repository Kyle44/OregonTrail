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

<body>

	<div class="title">
		<h2>
			The Oregon Trail
		</h2>
	</div>

	<div class="options">
		You may: <br>
		<p class="optionsList">
			1. Travel the trail <br>
			2. Learn about the trail <br>
			3. See the Oregon Top Ten <br>
			4. Turn sound <?php echo $_SESSION['isSound']; ?> <br> <!-- Turn sound on or off -->
			5. Choose Management Options <br>
			6. End <br><br>
			What is your choice?
			<input id="optionsChoice" type="text" name="quantity" min="1" max="6" onkeypress="checkEnteredValue(event)">
		</p>
	</div>

	<script src="proj2.js" type="text/javascript"></script>
</body>
</html>