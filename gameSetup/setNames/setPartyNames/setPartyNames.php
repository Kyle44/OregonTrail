<!-- Name: Kyle Fritz
	 File: setPartyNames.php
	 Date Created: 4/26/17
	 Description: Set the names of all of the other people in the party
-->

<!-- NOT COMPLETE -->

<?php
	session_start();
?>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../../proj2.css">
</head>

<body>

	<div class="centerParagraph" id="pageDiv">
		<p><br>What are the first names of the four other members in your party?<br><br>
		1. <?php echo $_SESSION['name1'] ?><br>
		2. <input class="optionInput normalFont" id="nameInput2" type="text" onblur="this.focus()" autofocus><br>
		3. <br>
		4. <br>
		</p>
	</div>


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>
	<script src="setPartyNames.js" type="text/javascript"></script>
</body>
</html>
