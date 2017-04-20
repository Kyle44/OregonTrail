document.body.onkeyup = function(e){
	var choice = document.getElementById('inputEraseTombstoneMessages').value; // get chosen value

	if (e.keyCode == enterKey){ // enter key
		switch(choice){
			case 'n':
				location.replace("../managementOptions.php");
				break;
			case 'no':
				location.replace("../managementOptions.php");
				break;
			case 'y':
				// TODO: ERASE TOMBSTONE MESSAGES
				location.replace("../managementOptions.php");
				break;
			case 'yes':
				// TODO: ERASE TOMBSTONE MESSAGES
				location.replace("../managementOptions.php");							
				break;
			default:
				;
		}
	}
}

var enterKey = 13;