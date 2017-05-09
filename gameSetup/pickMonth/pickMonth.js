$(document).ready(function(){

	// get the game session out of session storage
	var game = JSON.parse(window.sessionStorage.game);
	game.month = 2;
	game.day = 1;
	game.year = 1848;


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

	function focusOnInput(input) {
		if(input != null){
			$(input).val(""); // reset it
			$(input).focus();
		}
	}

	// Display the main options page of the store
	function displayHome(pageToRemove) {
		removePage(pageToRemove);
		displayPage("#mainPage");
		focusOnInput("#optionsChoice");
		currentPage = "mainPage";
	}

	function displayNewPage(pageToDisplay, input) {
		removePage("#mainPage");
		displayPage("#" + pageToDisplay);
		focusOnInput(input);
		currentPage = pageToDisplay;
	}

	$(document).keydown(function(e){
 		if(e.keyCode == enterKey && currentPage == "mainPage"){
			var choice = parseInt($('#optionsChoice').val()); // get chosen value
			if(choice != NaN && choice <= 6 && choice >= 1){
				switch(choice){
					case 1: case 2: case 3: case 4: case 5:
						game.month += choice;
						window.sessionStorage.game = JSON.stringify(game);
						location.replace("../store/storeSetup/storeSetup.html");
						break;
					case 6:
						displayNewPage("explanationPage", null);
						break;
					default:
						;
				}
			}

		} // end enterKey if

		if(e.keyCode == spacebarKey && currentPage == "explanationPage"){
            displayHome("#explanationPage");
        } // end spacebarKey if
	}); // end keydown

	var currentPage = "mainPage";
	var spacebarKey = 32, enterKey = 13;
});
