<?php
	session_start();

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
			?>
		</h2>
	</div>
	
	<div class="options">
		The trail divides here. You may: <br>
		<p class="optionsList">
			1. head for <?php echo $_SESSION['nexName'];?> <br>
			2. head for <?php echo $_SESSION['nexName2'];?> <br>
			3. see the map<br><br><br>

			What is your choice?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="3"
				onblur="this.focus()" autofocus>
		</p>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="branch.js" type="text/javascript"></script>
</body>
</html>