$(document).ready(function(){

	// Returns a random number from 0 to 100
	function getAmount(){
		return Math.floor(Math.random() * 100);
	}

	$(document).keydown(function(e){

 		if(e.keyCode == spacebarKey){
 			switch(counter){
 				case 0: 				
 					var game = JSON.parse(window.sessionStorage.game);
 					var amount = getAmount();
 					if(amount > 0){
						$('#text').text("You caught " + amount + " pounds of fish!");						
 					}
 					else{
 						$('#text').text("No fish are biting right now!");
 					}
 					game.food += amount;

 					window.sessionStorage.game = JSON.stringify(game);
 					counter++;
 					break;
 				case 1:
 					location.replace("../main.html");
 					// TODO: go back to previous page
 			} // end switch
		} // end keycode

	}); // end keydown
	var spacebarKey = 32, enterKey = 13;
	var counter = 0;
});