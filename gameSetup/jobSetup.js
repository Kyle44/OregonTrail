$(document).ready(function(){
	// creatin a new game object
	var game = {job : "" , money : 0};
	var enterKey = 13;


	$("#optionsChoice").keydown(function(e){

 		if(e.keyCode == enterKey){
			var choice = parseInt($(this).val()); // get chosen value
			if(choice != NaN && choice <= 4 && choice >= 1){
				if (choice == 4) {
					location.replace("jobExplanation/jobExplanation.html");
				}
				else {
					switch (choice) {
						case 1:
							game.job = "banker";
							game.money = 1600;
							break;
						case 2:
							game.job = "carptenter";
							game.money = 800;
							break;
						case 3:
							game.job = "farmer";
							game.money = 400;
							break;
					}

				window.sessionStorage.game = JSON.stringify(game);
				location.replace("setNames/setNames.html");

			}

		}
		}
	});
});
