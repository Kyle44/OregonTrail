document.body.onkeyup = function(e){
	var choice = document.getElementById('inputEraseTopTen').value; // get chosen value

	if (e.keyCode == enterKey){ // enter key
		switch(choice){
			case 'n':
				location.replace("../managementOptions.php");
				break;
			case 'no':
				location.replace("../managementOptions.php");
				break;
			case 'y':
				// TODO: ERASE THE TOP TEN
				// TODO: REPLACE WITH ORIGINAL TOP TEN
				location.replace("../managementOptions.php");
				break;
			case 'yes':
				// TODO: ERASE THE TOP TEN
				// TODO: REPLACE WITH ORIGINAL TOP TEN
				location.replace("../managementOptions.php");							
				break;
			default:
				;
		}
	}
}

var enterKey = 13;