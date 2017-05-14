/*

    start at 9 HP (very good)
    8 - 9 vg
    6 - 7 g
    4 - 5 f
    2 - 3 p
    1 - 2 vp
    0 d

    pace -> 0, -1, -2 (resting a day gives + 1)
    rations -> +1, 0, -1
    ailment -> -1 (for 1 week)

    File for common functions across files
    day -> food | weather -> health
*/

var months = ["monthsList", "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];

// create full date string from integer representation
function getDate(game) {
    var month = months[game.month];
    return month + " " + game.day.toString() + ", " + game.year.toString();
}

function calcWeather(game) {

}

function calcFood(game) {

}

function calcMiles(game) {

}

function calcTravelEvent(game) {

}

function calcDays(d, game) {
	game.day += d;
      	var m = game.month;

	if ((game.day>31) && (m==1 || m==3 || m==5 || m==7 || m==8 || m==10 || m==12)){
		
		game.day -= 31;

		if (m==12){
			game.year += 1;
			game.month = 1;
		}
		else {
			game.month += 1;
		}
	}
	else if ((game.day>30) && (m==4 || m==6 || m==9 || m==11)){
		game.day -= 30;
		game.month += 1;
	}
	else if ((game.day>28) && (m==2)){
		game.day -= 28;
		game.month += 1;
	}
	else {
	}
}

function calcHealth(game) {

}
