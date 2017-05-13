$(document).ready(function(){

	var game = JSON.parse(window.sessionStorage.game);

	// get option set
	$("#optionsChoice").keydown(function(e) {
        	if(e.keyCode == 13){
			var choice = parseInt($(this).val());
			if(!isNaN(choice) && choice <= 3 && choice >= 1){
				switch(choice) {
					case 1:
						location.replace("../trail.php");
						break;
					case 2:
      		 				var xmlhttp = new XMLHttpRequest();
        					xmlhttp.open("GET", "../getNext.php?n=" + 2, true);
        					xmlhttp.send();
						location.replace("../trail.php");
						break;
					case 3:
						location.replace("../map.html");
						break;

					default:
						location.replace("branch.php");
				}
			}
		}
	});
});
