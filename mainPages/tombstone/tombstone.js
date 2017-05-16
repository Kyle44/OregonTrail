$(document).ready(function(){
	var tombstones = JSON.parse(window.sessionStorage.tombstones);
	var game = JSON.parse(window.sessionStorage.game);
	for(tombstone in tombstones){
		if (game.toGo <= tombstones[parseInt(tombstone)]['mile'] && game.location == tombstones[parseInt(tombstone)]['start']){
			var stone = tombstones[parseInt(tombstone)];
			$('#name').text(stone['name']);
			if(stone['#mile'] > 1){
				$('#toGo').html(tombstones[parseInt(tombstone)]['mile'] + "miles");
			}
			else{
				$('#toGo').html("1 mile");			
			}
			$('#location').html(stone['end']);
			$('#message').html(stone['message']);
			tombstones.splice(counter, 1); 
			window.sessionStorage.tombstones = JSON.stringify(tombstones); // update tombstones
			break;
		}
		counter++;
	}

	$(document).keydown(function(e){
 		if(e.keyCode == spacebarKey){
			location.replace("../main.html"); 
		} // end keycode
	}); // end keydown

	var spacebarKey = 32, enterKey = 13;
	var counter = 0;
});