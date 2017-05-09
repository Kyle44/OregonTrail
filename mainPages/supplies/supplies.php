<?php
	session_start();
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body>
	<div class="title">
		<h2>
            Your Supplies
		</h2>
	</div>

	<div id="mainOptions">
			<table id="storeTable">
				<tr>
					<th>Oxen</th>
					<th><?php echo $_SESSION['oxen'];?></th>
				</tr>
				<tr>
					<th>Food</th>
					<th><?php echo $_SESSION['food'];?></th>
				</tr>
				<tr>
					<th>Clothing</th>
					<th><?php echo $_SESSION['clothing'];?></th>
				</tr>
				<tr>
					<th>Ammunition</th>
					<th><?php echo $_SESSION['ammo'];?></th>
				</tr>
				<tr>
					<th>Wagon Wheels</th>
					<th><?php echo $_SESSION['wheels'];?></th>
				</tr>
				<tr>
					<th>Wagon axles</th>
					<th><?php echo $_SESSION['axles'];?></th>
				</tr>
				<tr>
					<th>Wagon tongues</th>
					<th><?php echo $_SESSION['tongues'];?></th>
				</tr>
				<tr>
					<th>Money left: &emsp;&emsp;&emsp;</th>
					<th>$<?php echo $_SESSION['money'];?></th>
				</tr>
			</table>

		<br>
		<p class="spaceToContinue textAlignCenter">
			Press SPACE BAR to continue
		</p>
    </div>

	<script>
		document.body.onkeyup = function(e){
    			if(e.keyCode == 32){
				location.replace("../main.php");
    			}
		}
	</script>
</body>
</html>
