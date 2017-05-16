function directInput() {
	document.getElementById("optionsChoice").focus();
}

$(document).ready(function(){

	var game = JSON.parse(window.sessionStorage.game);

	// get option set
	$("#optionsChoice").keydown(function(e) {
        	if(e.keyCode == 13){
			var choice = parseInt($(this).val());
			if(!isNaN(choice) && choice <= 5 && choice >= 1){
				switch(choice) {
					case 1:
						game.riverChoice = 1;
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("riverCross.html");
						break;
					case 2:
						game.riverChoice = 2;
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("riverCross.html");
						break;
					case 3:
						game.riverChoice = 3;
						var d = Math.floor(Math.random() * 5) + 1;
						var m = Math.floor(Math.random() * 10) + 1;
						game.money -= m;
						calcDays(d, game);
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("riverCross.html");
						break;
					case 4:
						var d = Math.floor(Math.random() * 5) + 1;
						calcDays(d, game);
						game.weather = updateWeather(game.month);
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("crossing.html");
						break;
					case 5:
						location.replace("crossDesc.html");
						break;

					default:
						location.replace("crossing.html");
				}
			}
		}
	});
	$('#nameLocation').html(game.location);
	$('#nextLocation').html(game.next);
	$('#nextLocation2').html(game.next2);

	$('#dateLocation').html(getDate(game));
	$('#milesLeft').html(game.toGo);
	$('#milesLeft2').html(game.toGo);

	$('#milesGone').html(game.miles);
	$('#milesBranch').html(game.toGo2);

	$("#food").text(game.food);
	$("#health").text(game.health);
	$("#weather").text(game.weather);

	$("#rivWidth").text(game.riverWidth);
	$("#rivDepth").text(game.riverDepth);
});
