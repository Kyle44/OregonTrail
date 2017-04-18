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
				// erase the top ten
				// replace with original top ten
				location.replace("../managementOptions.php");
				break;
			case 'yes':
				// erase the top ten
				// replace with original top ten
				location.replace("../managementOptions.php");							
				break;
			default:
				;
		}
	}
}

var enterKey = 13;