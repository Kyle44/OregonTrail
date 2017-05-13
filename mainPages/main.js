var game = JSON.parse(window.sessionStorage.game);

$(document).ready(function(){

	// get option set
	$("#optionsChoice").keydown(function(e) {
        	if(e.keyCode == 13){
			var choice = parseInt($(this).val());
			if(!isNaN(choice) && choice <= 9 && choice >= 1){
				switch(choice) {
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
	});

});

function changePace(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value);
    	if(!isNaN(choice) && choice <= 4 && choice >= 1){

		if (choice == 4) {
			location.replace("paceDesc.html");
                }
		else {
        		var xmlhttp = new XMLHttpRequest();
        		xmlhttp.open("GET", "getPace.php?p=" + choice, true);
        		xmlhttp.send();
			location.replace("../main.php");
		}
	}
}

function changeRats(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value);
    	if(!isNaN(choice) && choice <= 3 && choice >= 1){

        	var xmlhttp = new XMLHttpRequest();
        	xmlhttp.open("GET", "getRations.php?p=" + choice, true);
        	xmlhttp.send();
		location.replace("../main.php");
	}
}

function changeDay(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value);
    	if(!isNaN(choice) && choice <= 9 && choice >= 0){

        	var xmlhttp = new XMLHttpRequest();
        	xmlhttp.open("GET", "getDays.php?p=" + choice, true);
        	xmlhttp.send();
		location.replace("../main.php");
	}
}

	function go(miles, name, next) {
	
        	var xmlhttp = new XMLHttpRequest();
       	 	xmlhttp.open("GET", "getInfo.php", true);
       	 	xmlhttp.send();
		miles -= 20;

		if (miles <= 0) {
			if (name == 'Independence') {
				game.location = 'the Kansas River crossing';
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("kansas.php");
			}
			if (name == 'the Kansas River crossing') {
				game.location = 'the Big Blue River crossing';
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("blueR.php");
			}
			if (name == 'the Big Blue River crossing') {
				game.location = "Fort Kearney";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("kearney.php");
			}
			if (name == 'Fort Kearney') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("chimney.php");
			}
			if (name == 'Chimney Rock') {
				game.location = "Fort Laramie";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("laramie.php");
			}
			if (name == 'Fort Laramie') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("indepr.php");
			}
			if (name == 'Independence Rock') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("south.php");
			}
			if (name == 'South Pass') {

				if (next == 'the Green River crossing') {
					game.location = 'the Green River crossing';
 					window.sessionStorage.game = JSON.stringify(game);
					location.replace("green.php");
				}
				else {
					game.location = "Fort Bridger";
 					window.sessionStorage.game = JSON.stringify(game);
					location.replace("bridger.php");
				}
			}
			if (name == 'the Green River crossing') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("soda.php");
			}
			if (name == 'Fort Bridger') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("soda.php");
			}
			if (name == 'Soda Springs') {
				game.location = "Fort Hall";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("hall.php");
			}
			if (name == 'Fort Hall') {
				game.location = 'the Snake River crossing';
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("snake.php");
			}
			if (name == 'the Snake River crossing') {
				game.location = "Fort Boise";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("boise.php");
			}
			if (name == 'Fort Boise') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("blueM.php");
			}
			if (name == 'the Blue Mountains') {

				if (next == 'Fort Walla Walla') {
					game.location = "Fort Walla Walla";
 					window.sessionStorage.game = JSON.stringify(game);
					location.replace("walla.php");
				}
				else {
					game.location = "None";
 					window.sessionStorage.game = JSON.stringify(game);
					location.replace("dalles.php");
				}
			}
			if (name == 'Fort Walla Walla') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("dalles.php");
			}
			if (name == 'The Dalles') {
				game.location = "None";
 				window.sessionStorage.game = JSON.stringify(game);
				location.replace("will.php");
			}
		}
		else {
			location.replace("go.php");
		}
	}

function directInput() {
	document.getElementById("optionsChoice").focus();
}
