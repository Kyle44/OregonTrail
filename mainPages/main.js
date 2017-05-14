function directInput() {
	document.getElementById("optionsChoice").focus();
}

$(document).ready(function(){

	function getMonth(monthNum) {
		switch(monthNum) {
			case 1:
				return "January";
			case 2:
				return "February";
			case 3:
				return "March";
			case 4:
				return "April";
			case 5:
				return "May";
			case 6:
				return "June";
			case 7:
				return "July";
			case 8:
				return "August";
			case 9:
				return "September";
			case 10:
				return "October";
			case 11:
				return "November";
			case 12:
				return "December";
		} // end switch
	} // end function


	var game = JSON.parse(window.sessionStorage.game);

	if(!game.weather){
		game.weather = 'cool';
	}
	if(!game.health){
		game.health = 'good';
	}
	if(!game.pace){
		game.pace = 'steady';
	}
	if(!game.rations){
		game.rations = 'filling';
	}
	if(!game.location){
		game.location = 'Independence';
	}
	window.sessionStorage.game = JSON.stringify(game);

	var inTown = true; // must be calculated later

	$('#dateLocation').html(game.location + "<br>" + getMonth(game.month) + " " + game.day + ", " + game.year);


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
						location.replace("rest/rest.html");
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
		}
	}); // end keydown
});
