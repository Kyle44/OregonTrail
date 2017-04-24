<?php
	session_start();
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>

<body onkeypress="directInput()">
	<div class="title">
		<h2>
			Change food rations<br>
			(currently "<?php echo $_SESSION['rations'];?>")<br>
		</h2>
	</div>
	
	<div class="options">
		The amount of food the people in
		your party eat each<br> day can change.
		These amounts are:<br>

		<p class="optionsList">
			1. filling - meals are large and generous.<br><br>
			2. meager - meals are small, but adequate.<br><br>
			3. bare bones - meals are very small;<br>
			 everyone stays hungry.<br><br>

			What is your choice?
			<input class="optionInput" id="optionsChoice" 
				type="text" name="quantity" min="1" max="3"
				onkeypress="changeRats(event)" 
				onblur="this.focus()" autofocus>
		</p>
	</div>

	<script src="../main.js" type="text/javascript">
	
	</script>
</body>
</html>