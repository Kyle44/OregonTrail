$(document).ready(function(){
	var game = JSON.parse(window.sessionStorage.game);
	if(typeof game.isSound == 'undefined'){
		game.isSound = true; // sound starts out as true
	}
	else{
		game.isSound = !game.isSound; // change whether sound is on or off
	}
	window.sessionStorage.game = JSON.stringify(game);
	
	$(document).keydown(function(e){
 		if(e.keyCode == spacebarKey){
 			location.replace("../../proj2.php");
		}
	}); // end keydown
	var spacebarKey = 32, enterKey = 13;
	
});