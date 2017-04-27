function directInput() {
	document.getElementById("optionsChoice").focus();
}

function checkEnteredValue(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value); // get chosen value

    if (e.keyCode == enterKey){ // enter key
    	if(choice != NaN && choice <= 6 && choice >= 1){
    		switch(choice){
				case 1:
					location.replace("gameSetup/jobSetup.html");
					break;
				case 2:
					location.replace("homescreenPages/learnTrail/learnTrail.html");
					break;
				case 3:
					location.replace("homescreenPages/oregonTopTen/oregonTopTen.php");
					break;
				case 4:
					location.replace("homescreenPages/sound/sound.php");
					break;
				case 5:
					location.replace("homescreenPages/managementOptions/managementOptions.php");
					break;
				case 6:
					location.replace("homescreenPages/end.html");
					break;
				default:
					location.replace("proj2.php");
				}
    	}
    }
}

var enterKey = 13;
