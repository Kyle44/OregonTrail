<!-- Name: Kyle Fritz
	 File: store.php
	 Date Created: 5/5/17
	 Description: The store where you can make all your initial purchases
-->


<?php
	session_start();
	if(!isset($_SESSION['month'])){
		$_SESSION['month'] = 3;
	}
	if(!isset($_SESSION['day'])){
		$_SESSION['day'] = 1;
	}
	if(!isset($_SESSION['year'])){
		$_SESSION['year'] = 1848;
	}
	include 'func.php';
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body>
	









<?php
	session_start();
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../../proj2.css">
</head>
<body>

	<div class="title">
		<h2>
			<?php 
				echo "Matt's General Store<br>
				Independence, Missouri"
				displayMonth();
				echo " " .$_SESSION['day'];
				echo ", " . $_SESSION['year'];
			?>
		</h2>
	</div>
	
	<div class="options">
		<p class="optionsList">
			1. Oxen
			<p id="oxenBill" class="bill">$0.00</p><br>
			2. Food
			<p id="foodBill" class="bill">$0.00</p><br>
			3. Clothing
			<p id="clothingBill" class="bill">$0.00</p><br>
			4. Ammunition
			<p id="ammunitionBill" class="bill">$0.00</p><br>
			5. Wagon wheels
			<p id="wheelBill" class="bill">$0.00</p><br>
			6. Wagon axles
			<p id="axleBill" class="bill">$0.00</p><br>
			7. Wagon tongues
			<p id="tongueBill" class="bill">$0.00</p><br>
			Total bill:
			<p id="totalBill" class="bill">$0.00</p><br>
			Amount you have:
			<p id="totalBill" class="bill">$0.00</p><br>
		</p>

	<p class="optionsList">
			You have  to spend<br>
			What would you like to buy?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="8"
				onkeypress="checkEnteredValue(event)" 
				onblur="this.focus()" autofocus>
		</p>
    </div>


	<p class="spaceToContinue textAlignCenter">
		Press SPACE BAR to leave store 
	</p>

	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>	
	<script src="store.js"></script>
</body>
</html>