document.body.onkeyup = function(e){
	var choice = document.getElementById('inputTrade').value; // get chosen value

	if (e.keyCode == enterKey){ // enter key
		switch(choice){
			case 'n':
				location.replace("../main.php");
				break;
			case 'no':
				location.replace("../main.php");
				break;
			case 'y':
				location.replace("tradeProcess.php");
				break;
			case 'yes':
				location.replace("tradeProcess.php");							
				break;
			default:
				;
		}
	}
}

var enterKey = 13;