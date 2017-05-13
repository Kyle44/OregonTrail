<?php
	session_start();
	include 'func.php';
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
					<th>1. Oxen</th>
					<th><?php echo $_SESSION['oxen'];?></th>
				</tr>
				<tr>
					<th>2. Food</th>
					<th><?php echo $_SESSION['food'];?></th>
				</tr>
				<tr>
					<th>3. Clothing</th>
					<th><?php echo $_SESSION['clothing'];?></th>
				</tr>
				<tr>
					<th>4. Ammunition</th>
					<th><?php echo $_SESSION['ammo'];?></th>
				</tr>
				<tr>
					<th>5. Wagon Wheels</th>
					<th><?php echo $_SESSION['wheels'];?></th>
				</tr>
				<tr>
					<th>6. Wagon axles</th>
					<th><?php echo $_SESSION['axles'];?></th>
				</tr>
				<tr>
					<th>7. Wagon tongues</th>
					<th><?php echo $_SESSION['tongues'];?></th>
				</tr>
				<tr>
					<th>Amount you have: &emsp;&emsp;&emsp;</th>
					<th><?php echo $_SESSION['money'];?></th>
				</tr>
			</table>
			
		<p class="talk">You meet another emigrant who wants 
			<?php $_SESSION['sell']=sellItem(); $_SESSION['buy']=buyItem();echo $_SESSION['sell'] ,'. He will trade you ' ,$_SESSION['buy'],'.'?>
			Are you willing to trade? <input id="inputTrade" class="optionInput normalFont" type="text" name="quantity" onblur="this.focus()" autofocus>
		</p>
		
    </div>

	<script src="trade.js" type="text/javascript"></script>
</body>
</html>
