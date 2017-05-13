
function directInput() {
	document.getElementById("optionsChoice").focus();
}

$(document).ready(function(){

	var game = JSON.parse(window.sessionStorage.game);

	var inTown = true; // must be calculated later

	$("#weather").text(game.weather);
	$("#health").text(game.health);
	$("#pace").text(game.pace);
	$("#rations").text(game.rations);

	// get option set
	$("#optionsChoice").keydown(function(e) {
		if (e.keyCode == 13) {
		var choice = parseInt($(this).val());
				if(!isNaN(choice) && choice <= 9 && choice >= 1){
					switch(choice) {
					case 1:
						break;
					case 2:
						location.replace("supplies/supplies.html");
						break;
					case 3:
						location.replace("map/map.html");
						break;
					case 4:
						location.replace("pace/pace.html");
						break;
					case 5:
						location.replace("rations/rations.html");
						break;
					case 6:
						location.replace("rest/rest.php");
						break;
					case 7:
						//location.replace("trade/trade.php");
						break;
					case 8:
						if (inTown) {
							location.replace("talk/talk.html");
						}
						else {
							;//location.replace(/*fishing page*/);
						}
						break;
					case 9:
						if (inTown) {
							location.replace("buy/buy.php");
						}
						break;
					default:
						location.replace("main.php");
			}
		}
	}
	});

});
