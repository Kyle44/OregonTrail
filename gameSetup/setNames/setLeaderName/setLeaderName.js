$(document).ready(function(){
	var enterKey = 13;
	$(document).keydown(function(e){

 		if(e.keyCode == enterKey){
			var name = $('#nameInput').val();
			if(name != ""){ // can't be blank\
				
				var xmlhttp = new XMLHttpRequest();
	    		xmlhttp.open("GET", "getName.php?p=" + name, true);
	    		xmlhttp.send();

	    		location.replace("../setPartyNames/setPartyNames.php");
			}	
		}

	});
});

//var partyMember = 2;