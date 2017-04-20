function directInput() {
	document.getElementById("optionsChoice").focus();
}

function checkEnteredValue(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value);

    	if(!isNaN(choice) && choice <= 9 && choice >= 1){
    		switch(choice){
			case 1:
				break;
			case 2:
				location.replace("supplies/supplies.php");
				break;
			case 3:
				location.replace("map/map.php");
				break;
			case 4:
				location.replace("pace/pace.php");
				break;
			case 5:
				location.replace("rations/rations.php");
				break;
			case 6:
				location.replace("rest/rest.php");
				break;
			case 7:
				location.replace("trade/trade.php");
				break;
			case 8:
				location.replace("talk/talk.php");
				break;
			case 9:
				location.replace("buy/buy.php");
				break;
			default:
				location.replace("main.php");
		}
    	}
}