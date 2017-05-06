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
					case 1:
					case 2:
					case 3:
					case 4:
					case 5: 
						var xmlhttp = new XMLHttpRequest();
		        		xmlhttp.open("GET", "getMonth.php?p=" + choice, true);
		        		xmlhttp.send();
		        		try{
							location.replace("../store/storeSetup/storeSetup.html");
		        		}
		        		catch(err){
		        			alert("error");
						}
						break;
					case 6:
						displayNewPage("explanationPage", null)
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