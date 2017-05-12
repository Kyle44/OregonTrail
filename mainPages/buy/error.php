<?php
	session_start();

?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body>
	
	<div class="title">
		That's a little much.  I see that you only have $<?php echo $_SESSION['money'];?>.  We'd better go over the list again.<br><br><br>
    	</div>
	<div class="title">Press SPACE BAR to continue</div>

	<script>
		document.body.onkeyup = function(e){
    			if(e.keyCode == 32){
				location.replace("buy.php");
    			}
		}
	</script>
</body>
</html>