$(document).ready(function(){
	var tombstones = JSON.parse(window.sessionStorage.tombstones);

	for(tombstone in tombstones){
		if(game.toGo <= tombstone.mile && game.location == tombstone.start){
			$('name').text(tombstone.name);
			if(tombstone.mile > 1){
				$('toGo').text(tombstone.mile + "miles");
			}
			else{
				$('toGo').text("1 mile");			
			}
			$('location').text(tombstone.end);
			$('message').text(tombstone.message);
			tombstones.splice(i, 1);
			break;
		}
	}

	window.sessionStorage.game = JSON.stringify(game);
	$(document).keydown(function(e){
 		if(e.keyCode == spacebarKey){
			location.replace("../main.html"); 
		} // end keycode
	}); // end keydown

	var spacebarKey = 32, enterKey = 13;
});