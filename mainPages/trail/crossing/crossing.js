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
						location.replace("riverCross.html");
						break;
					case 2:
						location.replace("riverCross.html");
						break;
					case 3:
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
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("crossing.php");
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
});
