$(document).ready(function(){
	var enterKey = 13;
	$(document).keydown(function(e){

 		if(e.keyCode == enterKey){
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
		        			// TODO: Go to next screen
							// location.replace("");
		        		}
		        		catch(err){
		        			alert("error");
						}
						break;
					case 6:
						location.replace("monthExplanation.html");
					default:
						;
				}
			}

		}
	});
});
