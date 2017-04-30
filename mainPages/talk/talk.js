document.body.onkeyup = function(e){
    	if(e.keyCode == 32){
		location.replace("../main.php");
    	}
};

function talk(town) {
		var num = Math.floor(Math.random() * 3);
		if (town == "Independence") {
			document.getElementById("talk").innerHTML = Independence.people[num].intro + "<br>" + Independence.people[num].script;
		}
		if (town == "the Kansas River crossing") {
			document.getElementById("talk").innerHTML = KansasRC.people[num].intro + "<br>" + KansasRC.people[num].script;
		}
        if (town == "the Big Blue River crossing") {
			document.getElementById("talk").innerHTML = BlueRC.people[num].intro + "<br>" + BlueRC.people[num].script;
		}
		if (town == "Fort Kearney") {
			document.getElementById("talk").innerHTML = KearneyF.people[num].intro + "<br>" + KearneyF.people[num].script;
		}
		if (town == "Chimney Rock") {
			document.getElementById("talk").innerHTML = ChimneyR.people[num].intro + "<br>" + ChimneyR.people[num].script;
		}
		if (town == "Fort Laramie") {
			document.getElementById("talk").innerHTML = LaramieF.people[num].intro + "<br>" + LaramieF.people[num].script;
		}
		if (town == "Independence Rock") {
			document.getElementById("talk").innerHTML = IndependenceR.people[num].intro + "<br>" + IndependenceR.people[num].script;
		}
		if (town == "South Pass") {
			document.getElementById("talk").innerHTML = SouthP.people[num].intro + "<br>" + SouthP.people[num].script;
		}
		if (town == "the Green River Crossing") {
			document.getElementById("talk").innerHTML = GreenRC.people[num].intro + "<br>" + GreenRC.people[num].script;
		}
		if (town == "Fort Bridger") {
			document.getElementById("talk").innerHTML = BridgerF.people[num].intro + "<br>" + BridgerF.people[num].script;
		}
		if (town == "Soda Springs") {
			document.getElementById("talk").innerHTML = SodaS.people[num].intro + "<br>" + SodaS.people[num].script;
		}
		if (town == "Fort Hall") {
			document.getElementById("talk").innerHTML = HallF.people[num].intro + "<br>" + HallF.people[num].script;
		}
		if (town == "the Snake River crossing") {
			document.getElementById("talk").innerHTML = SnakeRC.people[num].intro + "<br>" + SnakeRC.people[num].script;
		}
		if (town == "Fort Boise") {
			document.getElementById("talk").innerHTML = BoiseF.people[num].intro + "<br>" + BoiseF.people[num].script;
		}
		if (town == "the Blue Mountains") {
			document.getElementById("talk").innerHTML = BlueM.people[num].intro + "<br>" + BlueM.people[num].script;
		}
		if (town == "Fort Walla Walla") {
			document.getElementById("talk").innerHTML = WallaF.people[num].intro + "<br>" + WallaF.people[num].script;
		}
		if (town == "The Dalles") {
			document.getElementById("talk").innerHTML = Dalles.people[num].intro + "<br>" + Dalles.people[num].script;
		}
}
