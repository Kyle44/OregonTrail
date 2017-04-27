<?php
	session_start();
?>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../proj2.css">
</head>
<body onload="talk('<?php echo $_SESSION["name"]; ?>')">
	<div id="talk" class="talk"></div>

	<script src="../../landmarkInfo.js" type="text/javascript"></script>
	<script src="talk.js" type="text/javascript"></script>
	<div class="title">Press SPACE BAR to continue</div>

</body>
</html>