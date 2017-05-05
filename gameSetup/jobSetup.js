$(document).ready(function(){
	var enterKey = 13;
	$(document).keydown(function(e){

 		if(e.keyCode == enterKey){
			var choice = parseInt($('#optionsChoice').val()); // get chosen value
			if(choice != NaN && choice <= 4 && choice >= 1){
				switch(choice){
					case 1:
						// fall through
					case 2:
						// fall through
					case 3:
						var xmlhttp = new XMLHttpRequest();
		        		xmlhttp.open("GET", "getJob.php?p=" + choice, true);
		        		xmlhttp.send();
		        		try{
							location.replace("setNames/setNames.html");
		        		}
		        		catch(err){
		        			alert("error");
		        			// error
						}
						break;
					case 4:
						location.replace("jobExplanation/jobExplanation.html");
						break;
					default:
						;
				}
			}

		}
	});
});
