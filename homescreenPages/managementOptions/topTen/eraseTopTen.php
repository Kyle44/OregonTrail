<!-- Name: Kyle Fritz
	 File: eraseTopTen.php
	 Date Created: 4/17/17
	 Description: Erases the current top ten from the database (that are not from the original top ten).
-->

<!-- PHP WILL BE USED IN THE FUTURE -->


<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../../proj2.css"> 
</head>

<body>
	<div class="titleNormal">
		<h2>
			Erase Top Ten list<br><br>
		</h2>
	</div>

	<div id="eraseTopTenQuestion">
		<p>If you erase the current Top Ten list, the names and scores will be replaced by those on the original list.</p><br><br>
		Do you want to do this? 
		<input id="inputEraseTopTen" class="optionInput" type="text" name="quantity" autofocus>
	</div>

	<script src="eraseTopTen.js" type="text/javascript"></script>
</body>
</html>