$(document).ready(function(){

    var game = JSON.parse(window.sessionStorage.game);

    $("#optionsChoice").keydown( function (e) {
        var choice = parseInt($(this).val());
            if(!isNaN(choice) && choice <= 3 && choice >= 1){
                switch (choice) {
                    case 1:
                        game.rations = "filling";
                        break;
                    case 2:
                        game.rations = "meager";
                        break;
                    case 3:
                        game.rations = "bare bones";
                        break;
                }
                window.sessionStorage.game = JSON.stringify(game);
                location.replace("../main.php");
            }
    });

});
