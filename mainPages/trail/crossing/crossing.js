$(document).ready(function(){

	var game = JSON.parse(window.sessionStorage.game);

	// get option set
	$("#optionsChoice").keydown(function(e) {
        	if(e.keyCode == 13){
			var choice = parseInt($(this).val());
			if(!isNaN(choice) && choice <= 5 && choice >= 1){
				switch(choice) {
					case 1:
      		 				var xmlhttp = new XMLHttpRequest();
        					xmlhttp.open("GET", "../getName.php?m=" + 0, true);
        					xmlhttp.send();
						location.replace("riverCross.html");
						break;
					case 2:
      		 				var xmlhttp = new XMLHttpRequest();
        					xmlhttp.open("GET", "../getName.php?m=" + 0, true);
        					xmlhttp.send();
						location.replace("riverCross.html");
						break;
					case 3:
      		 				var xmlhttp = new XMLHttpRequest();
        					xmlhttp.open("GET", "../getName.php?m=" + 5, true);
        					xmlhttp.send();

		 				var xmlhttp = new XMLHttpRequest();
        					xmlhttp.open("GET", "../../rest/getDays.php?p=" + 5, true);
        					xmlhttp.send();
						location.replace("riverCross.html");
						break;
					case 4:
       		 				var xmlhttp = new XMLHttpRequest();
        					xmlhttp.open("GET", "../../rest/getDays.php?p=" + 1, true);
        					xmlhttp.send();
						location.replace("crossing.php");
						break;
					case 5:
						location.replace("crossDesc.html");
						break;

					default:
						location.replace("crossing.php");
				}
			}
		}
	});
});