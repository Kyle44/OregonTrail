$(document).ready(function(){

	// Remove a page from view, using input string pageId
	function removePage(pageId) {
	  var page = $(pageId);
	  page.attr("style", "display: none");
	}

	// Display a new page to the screen, using input string pageId
	function displayPage(pageId) {
	  var page = $(pageId);
	  page.attr("style", "display: block");
	}

	// Display the main options page of the store
	function displayHome() {
		displayPage("#mainOptions");
		$('#optionsChoice').focus();
		$("#optionsChoice").val(""); // reset it
		currentPage = "mainPage";
	}

	function errorPage() {
		removePage("#mainOptions");
		displayPage("#errorPage");
		currentPage = "errorPage";
	}

	function afterPage(argument) {
		removePage("#mainOptions");
		displayPage("#afterPage");
		currentPage = "afterPage";
	}

	function getTotalBill() {
		return totalBill;
	}

	function buyOxen() {
		removePage("#mainOptions");
		displayPage("#buyOxen");
		$('#inputBuyOxen').focus();		
		currentPage = "oxenPage";
	}

	function buyFood() {
		removePage("#mainOptions");
		displayPage("#buyFood");
		$('#inputBuyFood').focus();		
		currentPage = "foodPage";
	}

	function buyClothing() {
		removePage("#mainOptions");
		displayPage("#buyClothing");
		$('#inputBuyClothing').focus();		
		currentPage = "clothingPage";
	}

	function buyAmmunition() {
		removePage("#mainOptions");
		displayPage("#buyAmmunition");
		$('#inputBuyAmmunition').focus();		
		currentPage = "ammunitionPage";
	}

	function buyWheels() {
		removePage("#mainOptions");
		displayPage("#buyWheels");
		$('#inputBuyWheels').focus();		
		currentPage = "wheelsPage";
	}

	function buyAxles() {
		removePage("#mainOptions");
		displayPage("#buyAxles");
		$('#inputBuyAxles').focus();		
		currentPage = "axlesPage";
	}

	function buyTongues() {
		removePage("#mainOptions");
		displayPage("#buyTongues");
		$('#inputBuyTongues').focus();		
		currentPage = "tonguesPage";
	}

	// Sets the cost on the HTML page, given the row number of the item that is being bought and the price (numItem * itemPrice)
	function setHTML(rowNum, price){
		$("#storeTable")[0].rows[rowNum].cells[1].innerHTML = "$" + (price.toFixed(2)).toString();
		$("#storeTable")[0].rows[7].cells[1].innerHTML = "$" + (getTotalBill().toFixed(2)).toString();
	}

	function calculateNewBill() {
		totalBill = numOxen * oxenPrice + numFood * foodPrice + numClothing * clothingPrice + numAmmunition * ammunitionPrice + (numWheels + numAxles + numTongues) * partsPrice;
	}

    $(document).keydown(function(e){
        if(e.keyCode == spacebarKey){
        	if(currentPage == "mainPage" && hasOxen){
	        	if (totalBill > 400){
	        		errorPage();
	        	}
	        	else{
	        		var money = 400 - totalBill;
	        		// Send PHP
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.open("GET", "setVars.php?ox=" + numOxen + "f=" + numFood + "c=" + numClothing + "ammo="
					+ numAmmunition + "w=" + numWheels + "ax=" + numAxles + "t=" + numTongues + "m=" + money, true);
					xmlhttp.send();
					afterPage();
	        	}

        	} // end inner if
        	else if(currentPage == "errorPage"){
        		removePage("#errorPage");
        		displayHome();
        	}
        	else if(currentPage == "afterPage"){
        		location.replace("../../mainPages/indep.php"); 
        	}


        } // end spacebarKey if

		else if(e.keyCode == enterKey){
			if(currentPage == "mainPage"){
				choice = parseInt($("#optionsChoice").val());
				if(choice != NaN && choice <= 7 && choice >= 1){
					switch(choice){
						case 1:
							buyOxen();
							break;
						case 2:
							buyFood();
							break;
						case 3:
							buyClothing();
							break;
						case 4:
							buyAmmunition();
							break;
						case 5: 
							buyWheels();
							break;
						case 6:
							buyAxles();
							break;
						case 7:
							buyTongues();
							break;

						default:
							;
					} // end switch
				} // end inner if
			} // end currentPage if
			else if(currentPage == "oxenPage"){
				amount = parseInt($("#inputBuyOxen").val());
				$("#inputBuyOxen").val("");
				if(amount != NaN && amount <= 9 && amount >= 1){
					numOxen = amount;
					hasOxen = true;
					calculateNewBill();
					setHTML(0, oxenPrice * numOxen);
					removePage("#buyOxen");
					displayHome();
				} // end if
			} // end currentPage if
			else if(currentPage == "foodPage"){
				amount = parseInt($("#inputBuyFood").val());
				$("#inputBuyFood").val("");
				if(amount != NaN && amount <= 2000 && amount >= 0){
					numFood = amount;
					calculateNewBill();
					setHTML(1, foodPrice * numFood);
					removePage("#buyFood");
					displayHome();
				} // end if
			} // end currentPage if
			else if(currentPage == "clothingPage"){
				amount = parseInt($("#inputBuyClothing").val());
				$("#inputBuyClothing").val("");
				if(amount != NaN && amount <= 99 && amount >= 0){
					numClothing = amount;
					calculateNewBill();
					setHTML(2, clothingPrice * numClothing);
					removePage("#buyClothing");
					displayHome();
				} // end if
			} // end currentPage if
			else if(currentPage == "ammunitionPage"){
				amount = parseInt($("#inputBuyAmmunition").val());
				$("#inputBuyAmmunition").val("");
				if(amount != NaN && amount <= 99 && amount >= 0){
					numAmmunition = amount;
					calculateNewBill();
					setHTML(3, ammunitionPrice * numAmmunition);
					removePage("#buyAmmunition");
					displayHome();
				} // end if
			} // end currentPage if
			else if(currentPage == "wheelsPage"){
				amount = parseInt($("#inputBuyWheels").val());
				$("#inputBuyWheels").val("");
				if(amount != NaN && amount <= 3 && amount >= 0){
					numWheels = amount;
					calculateNewBill();
					setHTML(4, partsPrice * numWheels);
					removePage("#buyWheels");
					displayHome();
				} // end if
			} // end currentPage if
			else if(currentPage == "axlesPage"){
				amount = parseInt($("#inputBuyAxles").val());
				$("#inputBuyAxles").val("");
				if(amount != NaN && amount <= 3 && amount >= 0){
					numAxles = amount;
					calculateNewBill();
					setHTML(5, partsPrice * numAxles);
					removePage("#buyAxles");
					displayHome();
				} // end if
			} // end currentPage if
			else if(currentPage == "tonguesPage"){
				amount = parseInt($("#inputBuyTongues").val());
				$("#inputBuyTongues").val("");
				if(amount != NaN && amount <= 3 && amount >= 0){
					numTongues = amount;
					calculateNewBill();
					setHTML(6, partsPrice * numTongues);
					removePage("#buyTongues");
					displayHome();
				} // end if
			} // end currentPage if


		} // end enterKey else if


    }); // end keydown



    var currentPage = "mainPage";
	var spacebarKey = 32;
	var enterKey = 13;
	var hasOxen = false; // needs to be true to leave the store
	var numOxen = 0, numFood = 0, numClothing = 0, numAmmunition = 0, numWheels = 0, numAxles = 0, numTongues = 0;
	var oxenPrice = 40, foodPrice = 0.2, clothingPrice = 10, ammunitionPrice = 2, partsPrice = 10;
	var totalBill = 0.00;
});



