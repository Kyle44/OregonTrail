// document.body.onkeyup = function(e){
//         if(e.keyCode == 32){
//         location.replace("../main.php");
//         }
// }

$(document).ready(function() {

    var game = JSON.parse(window.sessionStorage.game);

    $("#oxen").text(game.oxen);
    $("#food").text(game.food);
    $("#clothing").text(game.clothing);
    $("#poles").text(game.poles);
    $("#axles").text(game.axles);
    $("#wheels").text(game.wheels);
    $("#tongues").text(game.tongues);
    $("#money").text(game.money);


    $(body).keyup(function(e){
        if(e.keyCode == 32){
            location.replace("../main.php");
        }
    });

});
