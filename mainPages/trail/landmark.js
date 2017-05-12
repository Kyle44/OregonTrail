var imgMap = {
    "Independence" : "../images/independence.png" ,
    "the Kansas River crossing" : "images/kansas.png" ,
    "the Big Blue River crossing" : "images/blueR.png" ,
    "Fort Kearney" : "images/kearney.png" ,
    "Chimney Rock" : "images/chimney.png" ,
    "Fort Laramie" : "images/laramie.png" ,
    "Independence Rock" : "images/indepr.png" ,
    "South Pass" : "images/south.png" ,
    "the Green River crossing" : "images/green.png" ,
    "Fort Bridger" : "images/bridger.png" ,
    "Soda Springs" : "images/soda.png" ,
    "Fort Hall" : "images/hall.png" ,
    "the Snake River crossing" : "images/snake.png" ,
    "Fort Boise" : "images/boise.png" ,
    "the Blue Mountains" : "images/blue.png" ,
    "Fort Walla Walla" : "images/walla.png" ,
    "The Dalles" : "images/columbia.png" ,
    "the Willamette Valley" : "images/will.png"
};

$(document).ready(function() {

    var game = JSON.parse(window.sessionStorage.game);
    // whatever the location variable is
    var loc = game.loc;
    var fullDate = getDate(game);
    var locationImage = "url(" + imgMap[loc] + ")";

    // sets the canvas background to the image specified
    $("#picture").css("background-image", locationImage);
    // set the location and date titling
    $("#dateLocation").html(loc + "<br>" + fullDate);


    $(document).keydown(function(e) {
        if (e.keyCode == 32) {
            location.replace("../main.php");
        }
    });

});
