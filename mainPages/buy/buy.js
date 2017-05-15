function getPrices(location) {
		if (location == "Independence") {
			return Independence.prices;
		}
		else if (location == "Fort Kearney") {
			return KearnyF.prices;
		}
		else if (location == "Fort Laramie") {
			return LaramieF.prices;
		}
		else if (location == "Fort Bridger") {
			return BridgerF.prices;
		}
		else if (location == "Fort Hall") {
			return HallF.prices;
		}
		else if (location == "Fort Boise") {
			return BoiseF.prices;
		}
		else if (location == "Fort Walla Walla") {
			return WallaF.prices;
		}
}

// null indicates no limit
var supplyLimits = {
	"oxen" : 20 ,
	"sets" : null ,
	"poles" : null ,
	"wheels" : 3 ,
	"axles" : 3 ,
	"tongues" : 3 ,
	"pounds" : 2000
};

var items = ["itemslist", "oxen", "sets", "poles", "wheels", "axles", "tongues", "pounds"];

$(document).ready(function () {

	var game = JSON.parse(window.sessionStorage.game);

	// whatever the current location variable is
	var prices = getPrices(game.location);

	var priceList = [-1, prices.ox, prices.clothing, prices.pole, prices.wheel, prices.axle, prices.tongue, prices.food];

	var itemSelect = 0;
	var amountNum = 0;

	// getDate defined in common.js
	var fullDate = getDate(game);
	$("#dateLocation").html(game.location + "<br>" + fullDate);

	$("#playerMoney").text(game.money.toFixed(2).toString());

	// set prices
	$("#oxPrice").text(prices.ox.toFixed(2).toString());
	$("#clothingPrice").text(prices.clothing.toFixed(2).toString());
	$("#polePrice").text(prices.pole.toFixed(2).toString());
	$("#wheelPrice").text(prices.wheel.toFixed(2).toString());
	$("#axlePrice").text(prices.axle.toFixed(2).toString());
	$("#tonguePrice").text(prices.tongue.toFixed(2).toString());
	$("#foodPrice").text(prices.food.toFixed(2).toString());

	// item type selection
	$("#optionsChoice").keydown(function (e) {
		if (e.keyCode == 13){

			itemSelect = parseInt($(this).val());
	    	if(!isNaN(itemSelect) && itemSelect <= 8 && itemSelect >= 1){

				// exit option
				if (itemSelect == 8){
					window.sessionStorage.game = JSON.stringify(game);
					location.replace("../main.html");
				}
				// display the amount input
				else {
					$("#amountInput").css("display", "block");
					$(this).prop("disabled", true);
					$("#itemName").text(items[itemSelect]);

					// enable input and clear the text space
					$("#amount").prop("disabled", false);
					$("#amount").text("");
					$("#amount").focus();
				}
			}
		}
	});

	// amount input functions
	$("#amount").keydown(function (e) {
		if (e.keyCode == 13) {

			var itemStr = items[itemSelect];
			var cost = priceList[itemSelect] * amountNum;
			var limit = supplyLimits[itemStr];

 			amountNum = parseInt($(this).val());
			if(!isNaN(choice) && choice >= 0) {

				// check enough money
				if (cost < game.money) {

					// check space limit agaisnt current carry
					if (limit < (amountNum + game[itemStr])
						|| limit === null) {
						game.money -= cost;
						game[itemStr] += amountNum;

						// enable input and clear the text space
						$("#optionsChoice").prop("disabled", false);
						$("#optionsChoice").text("");
						$("#optionsChoice").focus();

					}
					//
					else {
						// no space, display carry error
						$("#carryError").css("display", "block");
						$("#limit").text(limit);
						$("#carryItme").text(itemStr);
						$(document).keydown(function (e) {
							if (e.keyCode == 32) {
								$("#carryError").css("display", "none");
								// enable input and clear the text space
								$("#optionsChoice").prop("disabled", false);
								$("#optionsChoice").text("");
								$("#optionsChoice").focus();
								$(document).off("keydown");
							}
						});

					}
				}
				else {
					// not enough money error
					$("#costError").css("display", "block");
					$(document).keydown(function (e) {
						if (e.keyCode == 32) {
							$("#costError").css("display", "none");
							// enable input and clear the text space
							$("#optionsChoice").prop("disabled", false);
							$("#optionsChoice").text("");
							$("#optionsChoice").focus();
							$(document).off("keydown");
						}
					});
				}
			}

			$("#amountInput").css("display", "none");
			$(this).prop("disabled", true);
		}
	});

});
