$(document).ready(function(){

	var game = JSON.parse(window.sessionStorage.game);

	// get option set
	$("#optionsChoice").keydown(function(e) {
        	if(e.keyCode == 13){
			var choice = parseInt($(this).val());
			if(!isNaN(choice) && choice <= 7 && choice >= 1){
				switch(choice) {
					case 1:
						location.replace("../trail.php");
						break;
					case 2:
						location.replace("../../supplies/supplies.php");
						break;
					case 3:
						location.replace("../../map.html");
						break;
					case 4:
						location.replace("../../pace/pace.php");
						break;
					case 5:
						location.replace("../../rations/rations.php");
						break;
					case 6:
						location.replace("../../rest/rest.php");
						break;
					case 7:
						location.replace("stop.php");
						break;

					default:
						location.replace("stop.php");
				}
			}
		}
	});
});