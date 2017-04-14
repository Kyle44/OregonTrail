function getHomescreenOptionsChoice(){
	var choice = parseInt(document.getElementById('optionsChoice').value); // get chosen value
	switch(choice){
		case 1:
			break;
		case 2:
			location.replace("homescreenPages/learnTrail/learnTrail.html")
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			location.replace("homescreenPages/end.html");
			break;
		default:
			location.replace("proj2.html");
			;
	}
}
