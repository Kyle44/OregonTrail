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
	<link rel="stylesheet" type="text/css" href="https://swe.umbc.edu/~fritzk1/OregonTrail/proj2.css">
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
			<p id="oxenBill" class="cash">$0.00</p><br>
			2. Food
			<p id="foodBill" class="cash">$0.00</p><br>
			3. Clothing
			<p id="clothingBill" class="cash">$0.00</p><br>
			4. Ammunition
			<p id="ammunitionBill" class="cash">$0.00</p><br>
			5. Wagon wheels
			<p id="wheelBill" class="cash">$0.00</p><br>
			6. Wagon axles
			<p id="axleBill" class="cash">$0.00</p><br>
			7. Wagon tongues
			<p id="tongueBill" class="cash">$0.00</p><br>
			Total bill:
			<p id="totalBill" class="cash">$0.00</p><br>
			Amount you have:
			<p id="totalBill" class="cash">$400.00</p><br>
			<br>
			Which item would you like to buy? 
			<input class="optionInput" id="optionsChoice" 
			type="text" name="quantity" min="1" max="7"
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