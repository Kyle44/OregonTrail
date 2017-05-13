
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
					// location.replace("rest/rest.php");
					break;
				case 7:
					location.replace("trade/trade.php");
					break;
				case 8:
					if (inTown) {
						// location.replace("talk/talk.php");
					}
					else {
						// ;location.replace("fishing/fishing.html");
					}
					break;
				case 9:
					if (inTown) {
						location.replace("buy/buy.html");
					}
					break;
				default:
					;
			} // end switch
		} // end if
>>>>>>> 8e8e5ee41aac294774b7ae1f1ad99f71464eb5bf

	}); // end keydown
});
