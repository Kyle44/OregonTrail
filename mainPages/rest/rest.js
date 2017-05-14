function directInput() {
	document.getElementById("optionsChoice").focus();
}
$(document).ready(function(){

    var game = JSON.parse(window.sessionStorage.game);

    $("#optionsChoice").keydown( function (e) {
        if (e.keyCode == 13) {
            var choice = parseInt($(this).val());
            if(!isNaN(choice) && choice <= 9 && choice >= 0){
		calcDays(choice, game);
                window.sessionStorage.game = JSON.stringify(game);
                location.replace("../main.html");
            }
        }
    });
});