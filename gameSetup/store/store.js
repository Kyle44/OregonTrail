$(document).ready(function(){
    var spacebarKey = 32;
    var enterKey = 13;
    $(document).keydown(function(e){
        if(e.keyCode == spacebarKey){
            // TODO: check if oxen have been bought
            // TODO: check if amount bought is greater than the amount you have
            location.replace("../store.php"); 
        } // end if


    };
};



