function directInput() {
	document.getElementById("optionsChoice").focus();
}
var game = JSON.parse(window.sessionStorage.game);

<<<<<<< HEAD
=======
function checkEnteredValue(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value);
    	if(!isNaN(choice) && choice <= 9 && choice >= 1){
    		switch(choice){
			case 1:
				location.replace("trail/trail.php");
				break;
			case 2:
				location.replace("supplies/supplies.php");
				break;
			case 3:
				location.replace("map.html");
				break;
			case 4:
				location.replace("pace/pace.php");
				break;
			case 5:
				location.replace("rations/rations.php");
				break;
			case 6:
				location.replace("rest/rest.php");
				break;
			case 7:
				location.replace("trade/trade.php");
				break;
			case 8:
				location.replace("talk/talk.php");
				break;
			case 9:
				location.replace("buy/set.php");
				break;
			default:
				location.replace("main.php");
		}
	}
}
>>>>>>> master

$(document).ready(function(){

	var game = JSON.parse(window.sessionStorage.game);

	var inTown =

	// get option set
	$("#optionsChoice").keydown(function(e) {
		var choice = parseInt($(this).val());
				if(!isNaN(choice) && choice <= 9 && choice >= 1){
					switch(choice) {
					case 1:
						break;
					case 2:
						location.replace("supplies/supplies.html");
						break;
					case 3:
						location.replace("map.html");
						break;
					case 4:
						location.replace("pace/pace.php");
						break;
					case 5:
						location.replace("rations/rations.php");
						break;
					case 6:
						location.replace("rest/rest.php");
						break;
					case 7:
						location.replace("trade/trade.php");
						break;
					case 8:
						location.replace("talk/talk.php");
						break;
					case 9:
						location.replace("buy/buy.php");
						break;
					default:
						location.replace("main.php");
			}
		}
	});

<<<<<<< HEAD
});
=======
        	var xmlhttp = new XMLHttpRequest();
        	xmlhttp.open("GET", "getDays.php?p=" + choice, true);
        	xmlhttp.send();
		location.replace("../main.php");
	}
}

	function go(miles, name) {
	
        	var xmlhttp = new XMLHttpRequest();
       	 	xmlhttp.open("GET", "getInfo.php", true);
       	 	xmlhttp.send();
		miles -= 20;

		if (miles <= 0) {
			if (name == 'Independence') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("kansas.php");
			}
			if (name == 'the Kansas River crossing') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("blueR.php");
			}
			if (name == 'the Big Blue River crossing') {
				game.name = "Fort Kearney";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("kearney.php");
			}
			if (name == 'Fort Kearney') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("chimney.php");
			}
			if (name == 'Chimney Rock') {
				game.name = "Fort Laramie";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("laramie.php");
			}
			if (name == 'Fort Laramie') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("indepr.php");
			}
			if (name == 'Independence Rock') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("south.php");
			}
			if (name == 'South Pass') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("green.php");
			}
			if (name == 'South Pass') {
				game.name = "Fort Bridger";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("bridger.php");
			}
			if (name == 'the Green River Crossing') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("soda.php");
			}
			if (name == 'Fort Bridger') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("soda.php");
			}
			if (name == 'Soda Springs') {
				game.name = "Fort Hall";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("hall.php");
			}
			if (name == 'Fort Hall') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("snake.php");
			}
			if (name == 'the Snake River crossing') {
				game.name = "Fort Boise";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("boise.php");
			}
			if (name == 'Fort Boise') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("blueM.php");
			}
			if (name == 'the Blue Mountains') {
				game.name = "Fort Walla Walla";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("walla.php");
			}
			if (name == 'the Blue Mountains') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("dalles.php");
			}
			if (name == 'Fort Walla Walla') {
				game.name = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("dalles.php");
			}
		}
		else {
			location.replace("go.php");
		}
	}
>>>>>>> master
