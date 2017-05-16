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
        case "trade": case "fish":
            // paceEffect is 0 for trading and fishing
            break;
        case "steady":
            paceEffect -= 1;
            break;
        case "strenuous":
            paceEffect -= 2;
            break;
        case "grueling":
            paceEffect -= 3;
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
	if (game.pace == 'strenuous') {
		game.miles += 30;
		game.toGo -= 30;
	}
	else if (game.pace == 'grueling') {
		game.miles += 40;
		game.toGo -= 40;
	}
	else {
		game.miles += 20;
		game.toGo -= 20;
	}

	if (game.toGo < 0) {
		game.toGo = 0;
	}
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

/// random functions

var game = JSON.parse(window.sessionStorage.game);

function getRandomEvents() {
	var rand = Math.floor(Math.random() * 5);
	var rand2 = Math.floor((Math.random() * 3) + 1);
		switch (rand2) {
				case 1:
					ailments(rand, game.weather, game.water);
					break;
				case 2:
					oxenStatus();
					break;
				case 3:
					robbed();
					break;
				default:
		}
}

function updateWeather(month) {
	var tempRand = Math.random();
	var preciptRand = Math.random();
	var coldUB;
	var coolUB;
	var warmUB;
	var preciptChance;
	var cond;
	switch (month) {
		case 1:
		// chance of 		COLD				 COOL	    WARM   HOT
		// JAN |---------------------------|--------------|------|----|
		//     0                          .8             .98   .999   1
			coldUB = 0.80; coolUB = 0.98; warmUB = 0.999;
			preciptChance = 0.30;
			break;
		case 2:
			coldUB = 0.80; coolUB = 0.98; warmUB = 0.999;
			preciptChance = 0.25;
			break;
		case 3:
			coldUB = 0.75; coolUB = 0.98; warmUB = 0.99;
			preciptChance = 0.25;
			break;
		case 4:
			coldUB = 0.50; coolUB = 0.95; warmUB = 0.99;
			preciptChance = 0.25;
			break;
		case 5:
			coldUB = 0.10; coolUB = 0.60; warmUB = 0.97;
			preciptChance = 0.30;
			break;
		case 6:
			coldUB = 0.001; coolUB = 0.10; warmUB = 0.80;
			preciptChance = 0.15;
			break;
		case 7:
			coldUB = 0.001; coolUB = 0.10; warmUB = 0.50;
			preciptChance = 0.15;
			break;
		case 8:
			coldUB = 0.001; coolUB = 0.05; warmUB = 0.40;
			preciptChance = 0.25;
			break;
		case 9:
			coldUB = 0.001; coolUB = 0.20; warmUB = 0.75;
			preciptChance = 0.25;
			break;
		case 10:
			coldUB = 0.15; coolUB = 0.75; warmUB = 0.99;
			preciptChance = 0.25;
			break;
		case 11:
			coldUB = 0.50; coolUB = 0.95; warmUB = 0.99;
			preciptChance = 0.25;
			break;
		case 12:
			coldUB = 0.80; coolUB = 0.98; warmUB = 0.99;
			preciptChance = 0.25;
			break;
		default:
			cond = "cool";
			break;
	}
	if(tempRand < coldUB)cond = "cold";
	if(tempRand >= coldUB && tempRand <= coolUB)cond = "cool";
	if(tempRand >= coolUB && tempRand <= warmUB)cond = "warm";
	if(tempRand > warmUB)cond = "hot";
	if(preciptRand < preciptChance && cond == "cool" || preciptRand < preciptChance && cond == "warm"|| preciptRand < preciptChance && cond == "hot")cond = "rainy";
	if(preciptRand < preciptChance && cond == "cold")cond = "snowy";
    //document.getElementById("weather").innerHTML = cond;
	return cond;
}

function waterStatus() {
	water = "good";
	var rand = Math.random();
	if(rand > 0.95) {
		water = "bad";
	}
	else {
		water = "good";
	}
	return water;
}

function ailments(person, weather, waterStatus) {
	var ailment;
	var rand = Math.random();
	if (rand > 0.95) {
		if(weather == "cold") ailment = "Diptheria";
		else if(waterStatus == "bad" && weather == "cool") ailment = "Cholera";
		else if(waterStatus == "bad" && weather == "hot") ailment = "Dysentery";
		else if(waterStatus == "bad" && weather == "warm") ailment = "Typhoid Fever";
		else {
			var rand2 = Math.floor((Math.random()*3) + 1);

			switch (rand2) {
				case 1:
					ailment = "the measles";
					game.ailment[person] = ailment;
					window.sessionStorage.game = JSON.stringify(game);
					break;
				case 2:
					ailment = "a snake bite";
					game.ailment[person] = ailment;
					window.sessionStorage.game = JSON.stringify(game);
					break;
				case 3:
					ailment = "a broken leg";
					game.ailment[person] = ailment;
					window.sessionStorage.game = JSON.stringify(game);
					break;
				default:
			}
		}
  		document.getElementById("random").style.display="block";
		document.getElementById("random").innerHTML = game.party[person] +" has "+ ailment;
	}

}

function oxenStatus() {
	var problem="";
	var rand = Math.random();
	console.log(rand);
	if(rand < 0.97) {
		problem = "No Problems.";
	}
	if(rand > 0.97) {
		problem = "One of your oxen is sick.";
	}
	if(rand > 0.989) {
		problem = "One of your oxen has wandered off.";
		--game.oxen;
		window.sessionStorage.game = JSON.stringify(game);
	}
	if(rand > 0.999) {
		problem = "One of your oxen has died.";
		--game.oxen;
		window.sessionStorage.game = JSON.stringify(game);
	}
  	document.getElementById("random").style.display="block";
	document.getElementById("random").innerHTML = problem;

}

function robbed() {
	var foodCount = 2000;
	var clothingCount = 15;
	var bulletCount = 250;
	var oxenCount = 18;
	var rand = Math.random();
	if(rand > 0.999) {
		var intro = "A thief comes during the <br> night and steals ";
		var amount;
		var outcome;
		var rand2 = Math.floor((Math.random()*4) + 1);
		switch (rand2) {
				case 1:
					amount = Math.floor((Math.random()*foodCount) + 1);
					outcome = " pounds of food.";
					game.food-=amount;
					if (game.food < 0){
						game.food = 0;
					}
					window.sessionStorage.game = JSON.stringify(game);
					break;
				case 2:
					amount = Math.floor((Math.random()*clothingCount) + 1);
					outcome = " sets of clothing.";
					game.sets-=amount;
					if (game.sets < 0){
						game.sets = 0;
					}
					window.sessionStorage.game = JSON.stringify(game);
					break;
				case 3:
					amount = Math.floor((Math.random()*bulletCount) + 1);
					outcome = " poles.";
					game.poles-=amount;
					if (game.poles < 0){
						game.poles = 0;
					}
					window.sessionStorage.game = JSON.stringify(game);
					break;
				case 4:
					amount = Math.floor((Math.random()*oxenCount) + 1);
					outcome = " oxen.";
					game.oxen-=amount;
					if (game.oxen < 0){
						game.oxen = 0;
					}
					window.sessionStorage.game = JSON.stringify(game);
					break;
				default:
			}
  		document.getElementById("random").style.display="block";
		document.getElementById("random").innerHTML = intro +amount +outcome;
	}

}
