function directInput() {
	document.getElementById("nameInput").focus();
}

$(document).ready(function(){
	var enterKey = 13;
	var count = 1; // the number of the current party member
	var name1, name2, name3, name4, name5; // names of the party members
	var isNameChosen = false; // flag that tells whether the new name has been chosen
	$(document).keydown(function(e){
 		if(e.keyCode == enterKey && !isNameChosen){
 			console.log(count);
			var name = $('#nameInput').val(); // get chosen name
			if(name != ""){
				switch(count){
					case 1:
						name1 = name;
						$('#text').html('<br>Is this the correct name?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
						$('#nameInput').focus();
						break;
					case 2:
						name2 = name;
						$('#text').html('<br>Is this the correct name?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
						$('#nameInput').focus();
						break;
					case 3:
						name3 = name;
						$('#text').html('<br>Is this the correct name?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
						$('#nameInput').focus();
						break;
					case 4:
						name4 = name;
						$('#text').html('<br>Is this the correct name?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
						$('#nameInput').focus();
						break;
					case 5:
						name5 = name;
						$('#text').html('<br>Is this the correct name?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>');
						$('#nameInput').focus();
						break;
					default:
						;
				} // end switch
				isNameChosen = true; // name has been chosen
			} // end inner if
		} // end outer if

		if(e.keyCode == enterKey && isNameChosen){ // check for correct name
			var userResponse = $('#nameInput').val(); // is the name correct
			if(userResponse == "y" || userResponse == "yes"){
				if(count < 5){
					$('#text').html('What is the name of the next member of your party?<br><input class="optionInput normalFont" id="nameInput" type="text" onblur="this.focus()" autofocus>'); // setup for next name
					$('#nameInput').focus();
				}
				else{ // all names gotten
					// Set the name SESSION variables in setNames.php
					var xmlhttp = new XMLHttpRequest();
	        		xmlhttp.open("GET", "setNames.php?1=" + name1 + "2=" + name2 + "3=" + name3 + "4=" + name4 + "5=" + name5, true);
	        		xmlhttp.send();
					try{
						location.replace("../pickMonth/pickMonth.html");
					} catch(err){
						alert("error"); // error
					}
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
