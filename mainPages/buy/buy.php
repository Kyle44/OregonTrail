<?php
	session_start();
	include '../func.php';
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body onload="talk('<?php echo $_SESSION["name"]; ?>')">
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

	<div id="talk" class="buy"></div>
	<div class="options">
		<p class="optionsList">
			You have  to spend<br>
			What would you like to buy?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="8"
				onkeypress="checkEnteredValue(event)" 
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="buy.js" type="text/javascript"></script>

</body>
</html>
