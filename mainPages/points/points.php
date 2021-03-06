<!-- Name: Dan Schomisch
	 File: points.php
	 Date Crerated: 5/15/2017
	 Description: displays point total
-->

<?php
	session_start();

	/* Determine if user had a high score */
	$servername = "studentdb-maria.gl.umbc.edu";
	$username = "dschom1";
	$password = "dschom1";
	$dbname = "dschom1";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error ." <br><br>Did you use the right username/password/dbname?");
	} 

	//Did they make Top Ten?
	$sql = "SELECT * FROM scoreboard ORDER BY points desc LIMIT 9,1";
	$result = $conn->query($sql);
	
	echo "<script>
			var dbscore = [];
		</script>";
	
    
	while($scoreboardRow = $result->fetch_assoc()){
    	$points = $scoreboardRow["points"];

		echo "<script>
			var points = ". json_encode($points).";
			var currentScore = {
				'points' : points
			};
			dbscore.push(currentScore);
		</script>";
    }

    // Set the score sessionStorage variable up
    echo "<script>
    	 window.sessionStorage.dbscore = JSON.stringify(dbscore);
    	 </script>";
   	// UNCOMMENT NEXT LINE TO SEE WHAT dbscore HOLDS
   	// echo "<script> alert(window.sessionStorage.dbscore); </script>";

	$conn->close();
	
?>


<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="https://swe.umbc.edu/~fritzk1/OregonTrail/proj2.css">	
</head>

<body>
<div id="demo"></div>
	<div class="status">
		<h2>Points for arriving in Oregon<br></h2>
	</div>
	<div>
		<table>
			<tr id="goodrow">
				<td id="numGood"></td>
				<td>people in good health</td>
				<td id="goodPts"></td>
			</tr>
			<tr id="fairrow">
				<td id="numFair"></td>
				<td>people in fair health</td>
				<td id="fairPts"></td>
			</tr>
			<tr id="poorrow">
				<td id="numPoor"></td>
				<td>people in poor health</td>
				<td id="poorPts"></td>
			</tr>
			<tr id="vpoorrow">
				<td id="numVPoor"></td>
				<td>people in very poor health</td>
				<td id="vpoorPts"></td>
			</tr>
			<tr>
				<td>1</td>
				<td>wagon</td>
				<td>50</td>
			</tr>
			<tr>
				<td id="oxen"></td>
				<td>oxen</td>
				<td id="oxenPts"></td>
			</tr>
			<tr>
				<td id="part"></td>
				<td>spare wagon parts</td>
				<td id="partPts"></td>
			</tr>
			<tr>
				<td id="clothing"></td>
				<td>sets of clothing</td>
				<td id="clothingPts"></td>
			</tr>
			<tr>
				<td id="pole"></td>
				<td>poles</td>
				<td id="polePts"></td>
			</tr>
			<tr>
				<td id="food"></td>
				<td>pounds of food</td>
				<td id="foodPts"></td>
			</tr>
			<tr>
				<td> </td>
				<td id="cash"></td>
				<td id="cashPts"></td>
			</tr>
			<tr>
				<td> </td>
				<td>Total:</td>
				<td id="totalPts"></td>
			</tr>
		</table>
	</div>
	
	<br>

	<p class="spaceToContinue textAlignCenter">
			Press SPACE BAR to continue 
	</p>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://swe.umbc.edu/~fritzk1/OregonTrail/changeSound.js" type="text/javascript"></script>
	<script src="points.js" type="text/javascript"></script>

</body>
</html>