function checkEnteredValue(e)
{
	var choice = parseInt(document.getElementById('optionsChoice').value); // get chosen value

    if (e.keyCode == 13){ // enter key
    	if(choice != NaN && choice <= 6 && choice >= 1){
    		switch(choice){
				case 1:
					break;
				case 2:
					location.replace("homescreenPages/learnTrail/learnTrail.html")
					break;
				case 3:
					break;
				case 4:
					location.replace("homescreenPages/sound/sound.php")
					break;
				case 5:
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