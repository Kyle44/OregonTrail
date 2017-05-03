function talk(town) {
		if (town == "Independence") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + Independence.prices.ox + ".00 per ox<br>2. Clothing: " + Independence.prices.clothing + ".00 per set<br>3. Ammunition: " + Independence.prices.ammo + ".00 per box<br>4. Wagon wheels: " + Independence.prices.wheel + ".00 per wheel<br>5. Wagon axles: " + Independence.prices.axle + ".00 per axle<br>6. Wagon tongues: " + Independence.prices.tongue + ".00 per tongue<br>7. Food: " + Independence.prices.food + "0 per pound<br>8. Leave store";
		}
		else if (town == "Fort Kearney") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + KearneyF.prices.ox + ".00 per ox<br>2. Clothing: " + KearneyF.prices.clothing + "0 per set<br>3. Ammunition: " + KearneyF.prices.ammo + "0 per box<br>4. Wagon wheels: " + KearneyF.prices.wheel + "0 per wheel<br>5. Wagon axles: " + KearneyF.prices.axle + "0 per axle<br>6. Wagon tongues: " + KearneyF.prices.tongue + "0 per tongue<br>7. Food: " + KearneyF.prices.food + "per pound<br>8. Leave store";
		}
		else if (town == "Fort Laramie") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + LaramieF.prices.ox + ".00 per ox<br>2. Clothing: " + LaramieF.prices.clothing + ".00 per set<br>3. Ammunition: " + LaramieF.prices.ammo + ".00 per box<br>4. Wagon wheels: " + LaramieF.prices.wheel + ".00 per wheel<br>5. Wagon axles: " + LaramieF.prices.axle + ".00 per axle<br>6. Wagon tongues: " + LaramieF.prices.tongue + ".00 per tongue<br>7. Food: " + LaramieF.prices.food + "0 per pound<br>8. Leave store";
		}
		else if (town == "Fort Bridger") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + BridgerF.prices.ox + ".00 per ox<br>2. Clothing: " + BridgerF.prices.clothing + "0 per set<br>3. Ammunition: " + BridgerF.prices.ammo + "0 per box<br>4. Wagon wheels: " + BridgerF.prices.wheel + "0 per wheel<br>5. Wagon axles: " + BridgerF.prices.axle + "0 per axle<br>6. Wagon tongues: " + BridgerF.prices.tongue + "0 per tongue<br>7. Food: " + BridgerF.prices.food + "per pound<br>8. Leave store";
		}
		else if (town == "Fort Hall") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + HallF.prices.ox + ".00 per ox<br>2. Clothing: " + HallF.prices.clothing + ".00 per set<br>3. Ammunition: " + HallF.prices.ammo + ".00 per box<br>4. Wagon wheels: " + HallF.prices.wheel + ".00 per wheel<br>5. Wagon axles: " + HallF.prices.axle + ".00 per axle<br>6. Wagon tongues: " + HallF.prices.tongue + ".00 per tongue<br>7. Food: " + HallF.prices.food + "0 per pound<br>8. Leave store";
		}
		else if (town == "Fort Boise") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + BoiseF.prices.ox + ".00 per ox<br>2. Clothing: " + BoiseF.prices.clothing + "0 per set<br>3. Ammunition: " + BoiseF.prices.ammo + "0 per box<br>4. Wagon wheels: " + BoiseF.prices.wheel + "0 per wheel<br>5. Wagon axles: " + BoiseF.prices.axle + "0 per axle<br>6. Wagon tongues: " + BoiseF.prices.tongue + "0 per tongue<br>7. Food: " + BoiseF.prices.food + "per pound<br>8. Leave store";
		}
		else if (town == "Fort Walla Walla") {
			document.getElementById("talk").innerHTML = "1. Oxen: " + WallaF.prices.ox + ".00 per ox<br>2. Clothing: " + WallaF.prices.clothing + ".00 per set<br>3. Ammunition: " + WallaF.prices.ammo + ".00 per box<br>4. Wagon wheels: " + WallaF.prices.wheel + ".00 per wheel<br>5. Wagon axles: " + WallaF.prices.axle + ".00 per axle<br>6. Wagon tongues: " + WallaF.prices.tongue + ".00 per tongue<br>7. Food: " + WallaF.prices.food + "0 per pound<br>8. Leave store";
		}
		else {
			document.getElementById("talk").innerHTML = "No store here";
		}
}

function checkEnteredValue(e) {
	var choice = parseInt(document.getElementById('optionsChoice').value);
    	if(!isNaN(choice) && choice <= 8 && choice >= 1){
    		switch(choice){
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			case 6:
				break;
			case 7:
				break;
			case 8:
				location.replace("../main.php");
	
			default:
				location.replace("../main.php");
		}
    	}
}
