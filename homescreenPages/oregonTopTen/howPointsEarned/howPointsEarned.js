$('body').keyup(function(e){
   if(e.keyCode == spacebarKey){
   		count++;
    	switch(count){
    		case 1:
    			$('#pointsInfoParagraph').text('The resources you arrive with will help you get started in the new land.  You receive points for each item you bring safely to Oregon.');
    			$('#tableHeader1').text('Resources of Party');
    			$('#tableHeader2').text('Points per Item');
    			$("#pointsTable").find("tr:gt(0)").remove();
    			//$('#pointsTable tr:last').after('<td><tr>wagon</tr><tr></tr><tr>50</tr></td>');
    			//$('#pointsTable tr:last').after('<td><tr>ox</tr><tr></tr><tr>4</tr></td>');
    			//$('#pointsTable tr:last').after('<td><tr>spare wagon part</tr><tr></tr><tr>2</tr></td>');
    			//$('#pointsTable tr:last').after('<td><tr>set of clothing</tr><tr></tr><tr>2</tr></td><tr><td>bullets (each 50)</td><td></td><td>1</td></tr><tr><td>food (each 25 pounds)</td><td></td><td>1</td></tr><tr><td>cash (each 50)</td><td></td><td>1</td></tr>');
    			break;
    		case 2:
    			$('#pointsInfoParagraph').text('You receive points for your occupation in the new land.  Because more farmers and carpenters were needed than bankers, you receive double points arriving in Oregon as a carpenter, and triple points for arriving as a farmer.');
    			$('#pointsTable').remove();
    			break;
    		default:
    			location.replace("../../../proj2.php");
    	}
   }
});

var spacebarKey = 32;
var count = 0;