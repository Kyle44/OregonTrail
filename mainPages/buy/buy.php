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
			1. $<?php echo $_SESSION["oxPrice"]; ?> per ox<br>
			2. $<?php echo $_SESSION["clothPrice"]; ?> per set<br>
			3. $<?php echo $_SESSION["ammoPrice"]; ?> per box<br>
			4. $<?php echo $_SESSION["wheelPrice"]; ?> per wheel<br>
			5. $<?php echo $_SESSION["axlePrice"]; ?> per axle<br>
			6. $<?php echo $_SESSION["tonguePrice"]; ?> per tongue<br>
			7. $<?php echo $_SESSION["foodPrice"]; ?> per pound<br>
			8. Leave Store <br>
			You have $<?php echo $_SESSION['money'];?> to spend<br>
			What would you like to buy?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="8"
				onkeypress="checkEnteredValue(event, '<?php echo $_SESSION["money"];?>', '<?php echo $_SESSION["name"];?>')" 
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="buy.js" type="text/javascript"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>

</body>
</html>
