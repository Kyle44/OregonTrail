document.body.onkeyup = function(e){
        if(e.keyCode == 13){
        location.replace("stop/stop.php");
    }
};

function go(miles, name, next) {

    //go('<?php echo $_SESSION["nexLand"]; ?>', '<?php echo $_SESSION["name"]; ?>')

	// miles -= 20;

    // arriving at a landmark, the location is set based on previously visited
	if (miles <= 0) {
		if (name == 'Independence') {
			game.location = 'the Kansas River crossing';
		}
		if (name == 'the Kansas River crossing') {
			game.location = 'the Big Blue River crossing';
		}
		if (name == 'the Big Blue River crossing') {
			game.location = "Fort Kearney";
		}
		if (name == 'Fort Kearney') {
			game.location = "Chimney Rock";
		}
		if (name == 'Chimney Rock') {
			game.location = "Fort Laramie";
		}
		if (name == 'Fort Laramie') {
			game.location = "Independence Rock";
		}
		if (name == 'Independence Rock') {
			game.location = "South Pass";
		}
		if (name == 'South Pass') {

			if (next == 'the Green River crossing') {
				game.location = 'the Green River crossing';
			}
			else {
				game.location = "Fort Bridger";
			}
		}
		if (name == 'the Green River crossing') {
			game.location = "None";
		}
		if (name == 'Fort Bridger') {
			game.location = "None";
		}
		if (name == 'Soda Springs') {
			game.location = "Fort Hall";
		}
		if (name == 'Fort Hall') {
			game.location = 'the Snake River crossing';
		}
		if (name == 'the Snake River crossing') {
			game.location = "Fort Boise";
		}
		if (name == 'Fort Boise') {
			game.location = "the Blue Mountains";
		}
		if (name == 'the Blue Mountains') {

			if (next == 'Fort Walla Walla') {
				game.location = "Fort Walla Walla";
			}
			else {
				game.location = "The Dalles";
			}
		}
		if (name == 'Fort Walla Walla') {
			game.location = "The Dalles";
		}
		if (name == 'The Dalles') {
			game.location = "the Willamette Valley";
		}
		window.sessionStorage.game = JSON.stringify(game);
		location.replace("landmark.html");

	}
	else {
		location.replace("go.html");
	}
}
