<!-- <?php
	session_start();
?> -->
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>

<body onkeypress="directInput()">

	<div class="title">
		<h2>
			Change pace<br>
			(currently "<?php echo $_SESSION['pace'];?>")<br>
		</h2>
	</div>

	<div class="options">
		The pace at which you travel<br>
		can change. Your choices are:<br>
		<p class="optionsList">
			1. a steady pace<br>
			2. a strenuous pace<br>
			3. a grueling pace<br>
			4. find out what these
			different paces mean<br><br><br>

			What is your choice?
			<input class="optionInput" id="optionsChoice"
				type="text" name="quantity" min="1" max="4"
				onkeypress="changePace(event)"
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="../main.js" type="text/javascript"></script>
</body>
</html>
