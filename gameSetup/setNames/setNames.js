function directInput() {
	document.getElementById("nameInput").focus();
}

$(document).ready(function(){
	var game = JSON.parse(window.sessionStorage.game);
	game.party = [];

	var enterKey = 13;
	var count = 1; // the number of the current party member
	var isNameChosen = false; // flag that tells whether the new name has been chosen
	var name = "";
	$(document).keydown(function(e){

		// get name input
		if(e.keyCode == enterKey && !isNameChosen){
 			console.log(count);
			name = $('#nameInput').val(); // get chosen name
			if(name != ""){
				$('#text').html('<br>Is this the correct name?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
				$('#nameInput').focus();
				isNameChosen = true; // name has been chosen
			} // end inner if
		} // end outer if

		// confirmi name input
		if(e.keyCode == enterKey && isNameChosen){ // check for correct name
			var userResponse = $('#nameInput').val(); // is the name correct
			if(userResponse == "y" || userResponse == "yes"){

				game.party.push(name);
				if(count < 5){
					$('#text').html('What is the name of the next member of your party?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>'); // setup for next name
					$('#nameInput').focus();
				}
				else{ // all names gotten
					// save name variables in JS session storage game variable
					window.sessionStorage.game = JSON.stringify(game);
					location.replace("../pickMonth/pickMonth.html");
				}
				count += 1; // next name
				isNameChosen = false; // back to switch cases
			}
			else if(userResponse == "n" || userResponse == "no"){
				$('#text').html('What would you like to change this party member\'s name to?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
				$('#nameInput').focus();
				isNameChosen = false; // back to switch cases
			}
			// if not a yes/no response, keep the user in this section
		}

	});
});
