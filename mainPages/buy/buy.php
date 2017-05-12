<?php
	sleep(1);

	session_start();

	include '../func.php';
	sleep(2);

?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body>
	<div class="title">
		<h2 id="dateLocation"></h2>
	</div>

	<div id="prices" class="buy"></div>
	<div class="options">
		<p class="optionsList">

			1. <span id="oxPrice"></span> per ox<br>
			2. <span id="clothingPrice"></span> per set<br>
			3. <span id="polePrice"></span> per box<br>
			4. <span id="wheelPrice"></span> per wheel<br>
			5. <span id="axlePrice"></span> per axle<br>
			6. <span id="tonguePrice"></span> per tongue<br>
			7. <span id="foodPrice"></span> per pound<br>
			8. Leave Store <br>
			<br>
			You have $<span id="playerMoney"></span> to spend.<br>
			Which number?
			<input class="optionInput" id="optionsChoice"
				type="text" name="quantity" min="1" max="8"
				onblur="this.focus()" autofocus>

		</p>

		<br> <br>

		<p id="amountInput" style="display: none">
			How many <span id="itemName"></span>?
			<input class="optionInput" id="amount" type="text" onblur="this.focus()" autofocus>
		</p>

		<br> <br>

		<p id="carryError" style="display: none">
			You can only carry <span id="limit"></span> <span id="carryItem"></span>.
			<br>
			Press Space to continue.
		</p>

		<p id="costError" style="display: none">
			You cannot afford that.
			<br>
			Press Space to continue.
		</p>

	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="../common.js" type="text/javascript"></script>
	<script src="buy.js" type="text/javascript"></script>

</body>
</html>
