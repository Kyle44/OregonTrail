$(document).ready(function(){
    var spacebarKey = 32;
    var pageNum = 1; // storeSetup.html is pageNum = 1
    var paragraph = $('#text'); // to change the paragraph
    var paragraphHead = $('#paragraphHead');
    $(document).keydown(function(e){
        if(e.keyCode == spacebarKey){
            pageNum++;
            switch(pageNum){
                case 2:
                    paragraph.text("You can buy whatever you need at Matt's general store.");
                    break;
                case 3:
                    paragraphHead.text("Hello, I'm Matt.  So you're going to Oregon!  I can fix you up with what you need: ");
                    paragraph.html("- a team of oxen to pull your wagon<br>- clothing for both summer and winter");
                    break;
                case 4:
                    paragraph.html("- plenty of food for the trip<br>- ammunition for your rifles<br>- spare parts for your wagon");
                    break;
                default: 
                    location.replace("../store.php"); 
                    break;

            } // end switch
        } // end if
    };
};



