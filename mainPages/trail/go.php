<?php
	sleep(5);
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>

<body onload="go(); animateCross();">
	<div class="title" id="space">Press RETURN to size up the situation</div>
	<div class="trailCanvas">

  		<div id="wheelCanvas">
  			<div id="wagon"></div>
    			<div class="front">
      				<div class="moveWheel"></div>
    			</div>
    			<div class="back">
      				<div class="moveWheel"></div>
    			</div>
  		</div>
	</div>
	<div class="status">
		Date: <span id="dateLocation"></span> <br>
		Weather: <span id="weather"></span> <br>
		Health: <span id="health"></span> <br>
		Food: <span id="food"></span> <br>
		Next landmark: <span id="milesLeft"></span> <br>
		Miles traveled: <span id="milesGone"></span> <br>
	</div>

    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="../common.js" type="text/javascript"></script>
	<script src="../random.js" type="text/javascript"></script>
	<script src="go.js" type="text/javascript"></script>
	<script>
		var game = JSON.parse(window.sessionStorage.game);

		function animateCross() {
  			var wheel = document.getElementById("wheelCanvas");   
   
  			var start = 300;
 			var time = setInterval(frame, 15);

 			function frame() {
    				if (start == -300) {
      				clearInterval(time);
    				}
    				else {
     					start--; 
      					wheel.style.left = start + 'px'; 

    				}
  			}
		}
		document.body.onkeyup = function(e){
        		if(e.keyCode == 13){
				game.inTown = false;
        			location.replace("../main.html");
    			}
		};
	</script>

</body>
</html>
