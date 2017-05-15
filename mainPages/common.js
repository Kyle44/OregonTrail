/*

    start at 10 HP (very good)
    9 - 10 vg
    7 - 8 g
    5 - 6 f
    3 - 4 p
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

function healthStatus(healthArr) {
    var hAvg = 0;
    for (var i = 0; i < healthArr.length; i++) {
        hAvg += healthArr[i];
    }
    hAvg /= healthArr.length;

    if (hAvg >= 9) {
        return "very good";
    } else if (hAvg >= 7) {
        return "good";
    } else if (hAvg >= 5) {
        return "fair";
    } else if (hAvg >= 3) {
        return "poor";
    } else if (hAvg >= 1) {
        return "very poor";
    }
}

function calculateHealth(game) {

    var paceEffect = 0;
    var rationsEffect = 0;
    var rationsUse = 0;

    // pace effects
    switch (game.pace) {
        case "rest":
            paceEffect += 1;
            break;
        case "steady": case "trade":
            break;
        case "strenuous":
            paceEffect -= 1;
            break;
        case "grueling":
            paceEffect -= 2;
            break;
    }

    // rations effects
    switch (game.rations) {
        case "filling":
            rationsEffect += 2;
            rationsUse = 3;
            break;
        case "meager":
            rationsEffect += 1;
            rationsUse = 2;
            break;
        case "bare bones":
            rationsUse = 1;
            break;
    }

    // calculate for every party member
    for (var i = 0; i < game.party.length; i++) {
        // rations points only count if there's enough food
        game.health[i] += paceEffect;

        if (game.food > 0) {
            game.health[i] += rationsEffect;
            game.food -= rationsUse;
            if (game.food < 0) {
                game.food = 0;
            }
        } else {
            // if a party member can't eat, they lose health
            game.health[i] -= 1;
        }

        // if a party member has an ailment, they lose health
        if (game.ailment[i] != 0) {
            game.health[i] -= 1;
            // ailments only affect for so long
            game.ailment[i] -= 1;
        }

        if (game.health[i] > 10) {
            game.health[i] = 10;
        }
        if (game.health[i] <= 0) {
            // death state; remove from game tracking variables
            alert(game.party[i] + " has died.");
            game.party.splice(i, 1);
            game.health.splice(i, 1);
            game.ailment.splice(i, 1);

            // TODO: game oven when all dead
        }

    }
}

function calcMiles(game) {

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
