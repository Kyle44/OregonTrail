function getRandomEvents() {
	ailments('dan',updateWeather(5),waterStatus());
	oxenStatus();
	robbed();
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
					break;
				case 2:
					ailment = "a snake bite";
					break;
				case 3:
					ailment = "a broken leg";
					break;
				default:
			}
		}
		// document.getElementById("ailments").innerHTML = person +" has "+ ailment;
	}
}

function oxenStatus() {
	var problem="";
	var rand = Math.random();
	console.log(rand);
	if(rand > 0.97) {
		problem = "One of your oxen is sick.";
	}
	if(rand > 0.989) {
		problem = "One of your oxen has wandered off.";
		//--oxen
	}
	if(rand > 0.999) {
		problem = "One of your oxen has died.";
		//--oxen
	}
	// document.getElementById("oxen").innerHTML = problem;

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
					break;
				case 2:
					amount = Math.floor((Math.random()*clothingCount) + 1);
					outcome = " sets of clothing.";
					break;
				case 3:
					amount = Math.floor((Math.random()*bulletCount) + 1);
					outcome = " bullets.";
					break;
				case 4:
					amount = Math.floor((Math.random()*oxenCount) + 1);
					outcome = " oxen.";
					break;
				default:
			}
//	document.getElementById("robbed").innerHTML = intro +amount +outcome;
	}

}
