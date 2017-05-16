function animateCross() {
  	var ford = document.getElementById("ford");   
  	var start = 100;
 	var time = setInterval(frame, 15);

 	function frame() {
    		if (start == -250) {
      			clearInterval(time);
			location.replace("../trail.html");
    		}
    		else {
     			start--; 
      			ford.style.top = start + 'px'; 
      			ford.style.left = start + 'px'; 
    		}
  	}
}
document.body.onkeyup = function(e){
    	if(e.keyCode == 32){
		location.replace("crossing.html");
    	}
}