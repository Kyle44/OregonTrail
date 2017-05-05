<!-- Name: Kyle Fritz
	 File: sound.php
	 Date Created: 4/14/17
	 Description: Changing of Sound 
-->

<?php
	session_start();
	if (!isset($_SESSION['isSound'])){ // should be set, but if not then turn it off
		$_SESSION['isSound'] = 'off';
	}
	$_SESSION['lastPage'] = 'sound.php';
?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="https://swe.umbc.edu/~fritzk1/OregonTrail/proj2.css">
</head>

<body>

	<div class="title textAlignCenter">
		<h2>
			The Oregon Trail
		</h2>
	</div>

	<p class="centerParagraph">
		<?php
		echo "The sound is now turned " . $_SESSION['isSound'] . ".<br><br>You may turn the sound on or off during the program by pressing 'S'.";
		?>
	</p>

	<p class="spaceToContinue textAlignCenter">
		Press SPACE BAR to continue 
	</p>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>
	<script src="../../proj2.js" type="text/javascript"></script>
	<script src="sound.js" type="text/javascript"></script>
</body>
</html>