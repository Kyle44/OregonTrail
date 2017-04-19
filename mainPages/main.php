<!-- Name: Kush Patel
	 File: main.php
	 Date Created: 4/15/17
	 Description: Main page
	 URL: https://swe.umbc.edu/~pak2/OregonTrail/main.php
-->

<?php
	session_start();
	
	if(!isset($_SESSION['name'])){
		$_SESSION['name'] = 'Independence';
	}
	if(!isset($_SESSION['month'])){
		$_SESSION['month'] = 4;
	}
	if(!isset($_SESSION['day'])){
		$_SESSION['day'] = 1;
	}
	if(!isset($_SESSION['year'])){
		$_SESSION['year'] = 1848;
	}
	
	if(!isset($_SESSION['weather'])){
		$_SESSION['weather'] = 'cool';
	}
	if(!isset($_SESSION['health'])){
		$_SESSION['health'] = 'good';
	}
	if(!isset($_SESSION['pace'])){
		$_SESSION['pace'] = 'steady';
	}
	if(!isset($_SESSION['rations'])){
		$_SESSION['rations'] = 'filling';
	}
	
	$_SESSION['lastPage'] = 'main.php';
	
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
			8. Talk to people <br>
			9. Buy supplies <br><br><br>

			What is your choice?
			<input class="optionInput normalFont" id="optionsChoice" 
				type="text" name="quantity" min="1" max="9"
				onkeypress="checkEnteredValue(event)" 
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="mainPages/main.js" type="text/javascript"></script>
</body>
</html>