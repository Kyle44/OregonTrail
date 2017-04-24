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
	
	<div class="options">
		<p class="optionsList">
	    oxen<br>
	    sets of clothing<br>
	    bullets<br>
	    wagon wheels<br>
	    wagon axles<br>
	    wagon tongues<br>
	    pounds of food<br>
	    money left<br><br><br>
		</p>
    </div>
	<div class="title">Press SPACE BAR to continue</div>

	<script>
		document.body.onkeyup = function(e){
    			if(e.keyCode == 32){
				location.replace("../main.php");
    			}
		}
	</script>
</body>
</html>