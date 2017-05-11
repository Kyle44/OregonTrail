function getPrices(location) {
		if (location == "Independence") {
			displayPrices(Independence.prices);
		}
		else if (location == "Fort Kearney") {
			displayPrices(KearnyF.prices);
		}
		else if (location == "Fort Laramie") {
			displayPrices(LaramieF.prices);
		}
		else if (location == "Fort Bridger") {
			displayPrices(BridgerF.prices);
		}
		else if (location == "Fort Hall") {
			displayPrices(HallF.prices);
		}
		else if (location == "Fort Boise") {
			displayPrices(BoiseF.prices);
		}
		else if (location == "Fort Walla Walla") {
			displayPrices(WallaF.prices);
		}
		else {
			document.getElementById("prices").innerHTML = "No store here";
		}
}

function displayPrices(prices) {
	document.getElementById("prices").innerHTML = "1. Oxen: " + prices.ox + ".00 per ox<br>2. Clothing: " + prices.clothing + "0 per set<br>3. Ammunition: " + prices.ammo + "0 per box<br>4. Wagon wheels: " + prices.wheel + "0 per wheel<br>5. Wagon axles: " + prices.axle + "0 per axle<br>6. Wagon tongues: " + prices.tongue + "0 per tongue<br>7. Food: " + prices.food + "per pound<br>8. Leave store";
}

$(document).ready(function () {

	var game = JSON.parse(window.sessionStorage.game);


	$(function (e) {
		var choice = parseInt(document.getElementById('optionsChoice').value);
	    	if(!isNaN(choice) && choice <= 8 && choice >= 1){
	    		switch(choice){
				case 1:
					
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
				case 7:
					break;
				case 8:
					window.sessionStorage.game = JSON.stringify(game);
					location.replace("../main.php");
			}
	    }
	}

});
