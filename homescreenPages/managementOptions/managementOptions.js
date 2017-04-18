function checkEnteredValue(e)
{
	var choice = parseInt(document.getElementById('managementOptionsChoice').value); // get chosen value

    if (e.keyCode == enterKey){ // if enter key pressed
    	if(choice != NaN && choice <= 6 && choice >= 1){
    		switch(choice){
				case 1:
					location.replace("topTen/currentTopTen.php");
					break;
				case 2:
					location.replace("topTen/originalTopTen.html");
					break;
				case 3:
					location.replace("topTen/eraseTopTen.php");
					break;
				case 4:
					break;
				case 5:
					break;
				case 6:
					location.replace("../../proj2.php");
					break;
				default:
					location.replace("../../proj2.php");
				}
    	}
    }
}

var enterKey = 13;