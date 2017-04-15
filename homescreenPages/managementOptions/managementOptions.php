<!-- Name: Kyle Fritz
	 File: managementOptions.php
	 Date Created: 4/15/17
	 Description: Management Options
-->

<!-- PHP WILL BE USED IN THE FUTURE -->


<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css"> 
</head>

<body>

	<div class="titleNormal">
		<h2>
			The Oregon Trail<br><br>
			Management Options
		</h2>
	</div>

	<div class="options">
		You may: <br>
		<p class="optionsList">
			1. See the current Top Ten list<br>
			2. See the original Top Ten list<br>
			3. Erase the current Top Ten list<br>
			4. Erase the tombstone messages<br> <!-- Turn sound on or off -->
			5. Erase saved games<br>
			6. Return to the main menu<br><br>
			What is your choice?
			<input id="managementOptionsChoice" type="text" name="quantity" min="1" max="6" onkeypress="checkEnteredValue(event)">
		</p>
	</div>

	<script src="managementOptions.js" type="text/javascript"></script>
</body>
</html>