<?php
	sleep(1);

	session_start();
	
	if($_SESSION['name'] == 'the Kansas River crossing'){
		$_SESSION['width'] = 613;
		$_SESSION['depth'] = 2.8;
	}
	if($_SESSION['name'] == 'the Big Blue River crossing'){
		$_SESSION['width'] = 226;
		$_SESSION['depth'] = 1.8;
	}
	if($_SESSION['name'] == 'the Green River crossing'){
		$_SESSION['width'] = 401;
		$_SESSION['depth'] = 20.2;
	}
	if($_SESSION['name'] == 'the Snake River crossing'){
		$_SESSION['width'] = 1001;
		$_SESSION['depth'] = 6.2;
	}
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
				echo $_SESSION['name'] . "<br>";
				displayMonth();
				echo " " .$_SESSION['day'];
				echo ", " . $_SESSION['year'];
			?>
		</h2>
	</div>


	<div class="status">
		Weather: <?php echo $_SESSION['weather']; ?><br>
		River width: <?php echo $_SESSION['width']; ?><br>
		River depth: <?php echo $_SESSION['depth']; ?><br>
	</div>
	
	<div class="options">
		You may: <br>
		<p class="optionsList">
			1. attempt to ford the river <br>
			2. caulk the wagon and float it across<br>
			3. take a ferry across<br>
			4. wait to see if conditions improve<br> 
			5. get more information<br><br><br>

			What is your choice?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="5"
				onblur="this.focus()" autofocus>
		</p>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="crossing.js" type="text/javascript"></script>
</body>
</html>