document.body.onkeyup = function(e){
    if(e.keyCode == spacebarKey){ // spacebar
    	location.replace("../managementOptions.php");
    }
}

var spacebarKey = 32;