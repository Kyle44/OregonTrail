<?php
	session_start();
	include '../func.php';
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body>
	<div class="title">
		<h2>
			<!-- <?php
				echo $_SESSION['name'] . "<br>";
				displayMonth();
				echo " " .$_SESSION['day'];
				echo ", " . $_SESSION['year'];
			?> -->
		</h2>
	</div>

	<div id="prices" class="buy"></div>
	<div class="options">
		<p class="optionsList">
			You have $<span id="playerMoney"></span> to spend.<br>
			Which number?
			<input class="optionInput" id="optionsChoice"
				type="text" name="quantity" min="1" max="8"
				onblur="this.focus()" autofocus>
		</p>
		<p id="amountInput" style="display: none">
			How many <span id="itemName"></span>?
			<input class="optionInput" id="amount" type="text" onblur="this.focus()" autofocus>

	</div>

	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="buy.js" type="text/javascript"></script>

</body>
</html>
