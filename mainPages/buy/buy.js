var game = JSON.parse(window.sessionStorage.game);
var numOxen = 0;
var numClothing = 0;
var numAmmunition = 0;
var numWheels = 0;
var numAxles = 0;
var numTongues = 0;
var numFood = 0;

function price() {

	town = game.name;
	if (town == "Independence" || town == "Fort Kearney" || town == "Fort Laramie" || town == "Fort Bridger" || town == "Fort Hall" || town == "Fort Boise" || town == "Fort Walla Walla") {
		if (town == "Independence") {
			game.priceOxen = Independence.prices.ox;
			game.priceClothing = Independence.prices.clothing;
			game.priceAmmunition = Independence.prices.ammo;
			game.priceWheels = Independence.prices.wheel;
			game.priceAxles = Independence.prices.axle;
			game.priceTongues = Independence.prices.tongue;
			game.priceFood = Independence.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else if (town == "Fort Kearney") {
			game.priceOxen = KearneyF.prices.ox;
			game.priceClothing = KearneyF.prices.clothing;
			game.priceAmmunition = KearneyF.prices.ammo;
			game.priceWheels = KearneyF.prices.wheel;
			game.priceAxles = KearneyF.prices.axle;
			game.priceTongues = KearneyF.prices.tongue;
			game.priceFood = KearneyF.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else if (town == "Fort Laramie") {
			game.priceOxen = LaramieF.prices.ox;
			game.priceClothing = LaramieF.prices.clothing;
			game.priceAmmunition = LaramieF.prices.ammo;
			game.priceWheels = LaramieF.prices.wheel;
			game.priceAxles = LaramieF.prices.axle;
			game.priceTongues = LaramieF.prices.tongue;
			game.priceFood = LaramieF.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else if (town == "Fort Bridger") {
			game.priceOxen = BridgerF.prices.ox;
			game.priceClothing = BridgerF.prices.clothing;
			game.priceAmmunition = BridgerF.prices.ammo;
			game.priceWheels = BridgerF.prices.wheel;
			game.priceAxles = BridgerF.prices.axle;
			game.priceTongues = BridgerF.prices.tongue;
			game.priceFood = BridgerF.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else if (town == "Fort Hall") {
			game.priceOxen = HallF.prices.ox;
			game.priceClothing = HallF.prices.clothing;
			game.priceAmmunition = HallF.prices.ammo;
			game.priceWheels = HallF.prices.wheel;
			game.priceAxles = HallF.prices.axle;
			game.priceTongues = HallF.prices.tongue;
			game.priceFood = HallF.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else if (town == "Fort Boise") {
			game.priceOxen = BoiseF.prices.ox;
			game.priceClothing = BoiseF.prices.clothing;
			game.priceAmmunition = BoiseF.prices.ammo;
			game.priceWheels = BoiseF.prices.wheel;
			game.priceAxles = BoiseF.prices.axle;
			game.priceTongues = BoiseF.prices.tongue;
			game.priceFood = BoiseF.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else if (town == "Fort Walla Walla") {
			game.priceOxen = WallaF.prices.ox;
			game.priceClothing = WallaF.prices.clothing;
			game.priceAmmunition = WallaF.prices.ammo;
			game.priceWheels = WallaF.prices.wheel;
			game.priceAxles = WallaF.prices.axle;
			game.priceTongues = WallaF.prices.tongue;
			game.priceFood = WallaF.prices.food;
 			window.sessionStorage.game = JSON.stringify(game);

		}
		else{}
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "setPrice.php?ox=" + game.priceOxen + "&f=" + game.priceFood + "&c=" + game.priceClothing + "&ammo="
				+ game.priceAmmunition + "&w=" + game.priceWheels + "&ax=" + game.priceAxles + "&t=" + game.priceTongues, true);
        	xmlhttp.send();
		location.replace("buy.php");
	}
	else {
		location.replace("noStore.html");
	}
}
	function checkEnteredValue(e, money, town) {
		var choice = parseInt(document.getElementById('optionsChoice').value);
    		if(!isNaN(choice) && choice <= 8 && choice >= 1){
    			switch(choice){
				case 1:
					var mon = game.priceOxen;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numOxen += 1;
				        	var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 2:
					var mon = game.priceClothing;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numClothing += 1;
				  	      var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 3:
					var mon = game.priceAmmunition;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numAmmunition += 1;
					        var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 4:
					var mon = game.priceWheels;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numWheels += 1;
					        var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 5:
					var mon = game.priceAxles;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numAxles += 1;
				       		var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 6:
					var mon = game.priceTongues;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numTongues += 1;
					        var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 7:
					var mon = game.priceFood;
					money -= mon;
					if(money < 0) {
						location.replace("error.php");
					}
					else {
						numFood += 1;
				 	       var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "&f=" + numFood + "&c=" + numClothing + "&ammo="
						+ numAmmunition + "&w=" + numWheels + "&ax=" + numAxles + "&t=" + numTongues + "&m=" + mon, true);
        					xmlhttp.send();
						location.replace("buy.php");
					}
					break;
				case 8:
					location.replace("../main.php");
					break;
				default:
					location.replace("../main.php");
			}
    		}
	}
