function directInput() {
	$("#optionsChoice").focus();
}

$(document).ready(function(){
	var enterKey = 13;
	$(document).keydown(function(e){

 		if(e.keyCode == enterKey){
			var choice = parseInt($('#optionsChoice').val()); // get chosen value
			if(choice != NaN && choice <= 6 && choice >= 1){
				switch(choice){
					case 1:
//						location.replace("gameSetup/jobSetup.php");
						break;
					case 2:
//						location.replace("homescreenPages/learnTrail/learnTrail.html");
						break;
					case 3:
//						location.replace("homescreenPages/oregonTopTen/oregonTopTen.php");
						break;
					case 4:
						location.replace("jobExplanation.html");
						break;
					default:
						;
				}
			}

		}
	});
});
