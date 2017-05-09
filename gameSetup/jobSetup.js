$(document).ready(function(){
	// creatin a new game object
	var game = {job : ""};
	var enterKey = 13;
	$(document).keydown(function(e){

 		if(e.keyCode == enterKey){
			var choice = parseInt($('#optionsChoice').val()); // get chosen value
			if(choice != NaN && choice <= 4 && choice >= 1){
				switch(choice){
					case 1:
						game.job = "banker";
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("setNames/setNames.html");
						break;
					case 2:
						game.job = "carptenter";
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("setNames/setNames.html");
						break;
					case 3:
						game.job = "farmer";
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("setNames/setNames.html");
						break;
					case 4:
						location.replace("jobExplanation/jobExplanation.html");
						break;
					default:
						;
				}
			}

		}
	});
});
