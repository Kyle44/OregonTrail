<?php

function sellItem() {
	$oxen=$_SESSION['oxen'];
	$food=$_SESSION['food'];
	$clothing=$_SESSION['clothing'];
	$ammo=$_SESSION['ammo'];
	$wheels=$_SESSION['wheels'];
	$axles=$_SESSION['axles'];
	$tongues=$_SESSION['tongues'];

		do {
			$rand  = rand(1,7);
		
		switch ($rand) {
				case 1: 
					$amount = rand(0, $food);
					if($amount==1){$outcome=" pound of food";}
					else {$outcome = " pounds of food";}
					break;
				case 2:
					$amount = rand(0, $clothing);
					if($amount==1){$outcome=" set of clothing";}
					else {$outcome = " sets of clothing";}
					break;
				case 3:
					$amount = rand(0, $ammo);
					if($amount==1){$outcome=" bullet";}
					else {$outcome = " bullets";}
					break;
				case 4:
					$amount = rand(0, $oxen);
					if($amount==1){$outcome=" ox";}
					else {$outcome = " oxen";}
					break;
				case 5:
					$amount = rand(0, $wheels);
					if($amount==1){$outcome=" wheel";}
					else {$outcome = " wheels";}
					break;
				case 6:
					$amount = rand(0, $axles);
					if($amount==1){$outcome=" axle";}
					else {$outcome = " axles";}
					break;
				case 7:
					$amount = rand(0, $tongues);
					if($amount==1){$outcome=" tongue";}
					else {$outcome = " tongues";}
					break;
				default:
			}	
			
		} while ($amount<=0);
	
	return $amount . "" . $outcome;
}

function buyItem() {
		$tokens = explode(" ", $_SESSION['sell']);
		$item = $tokens[sizeof($tokens)-1];
		$index=1;
		if($item=='food'){$index=1;}
		if($item=='clothing'){$index=2;}
		if($item=='bullets'||$item=='bullet'){$index=3;}
		if($item=='oxen'||$item=='ox'){$index=4;}
		if($item=='wheels'||$item=='wheel'){$index=5;}
		if($item=='axles'||$item=='axle'){$index=6;}
		if($item=='tongues'||$item=='tongue'){$index=7;}
		do {
			$rand  = rand(1,7);
		} while ($rand==$index);
		
		switch ($rand) {
				case 1: 
					$amount = rand(1, 200);
					if($amount==1){$outcome=" pound of food";}
					else {$outcome = " pounds of food";}
					break;
				case 2:
					$amount = rand(1, 5);
					if($amount==1){$outcome=" set of clothing";}
					else {$outcome = " sets of clothing";}
					break;
				case 3:
					$amount = rand(1, 100);
					if($amount==1){$outcome=" bullet";}
					else {$outcome = " bullets";}
					break;
				case 4:
					$amount = rand(1, 5);
					if($amount==1){$outcome=" ox";}
					else {$outcome = " oxen";}
					break;
				case 5:
					$amount = rand(1,1);
					if($amount==1){$outcome=" wheel";}
					else {$outcome = " wheels";}
					break;
				case 6:
					$amount = rand(1,1);
					if($amount==1){$outcome=" axle";}
					else {$outcome = " axles";}
					break;
				case 7:
					$amount = rand(1,1);
					if($amount==1){$outcome=" tongue";}
					else {$outcome = " tongues";}
					break;
				default:
			}	
	
	return $amount . "" . $outcome;
}

function executeTrade() {
	$tokens = explode(" ", $_SESSION['sell']);
	$W = $tokens[0];
	$X = $tokens[sizeof($tokens)-1];
	
	$tokens2 = explode(" ", $_SESSION['buy']);
	$Y = $tokens2[0];
	$Z = $tokens2[sizeof($tokens2)-1];
	
	if($X=='bullets'){$X='ammo';}
	if($X=='ox'){$X='oxen';}
	if($X=='wheel'){$X='wheels';}
	if($X=='axle'){$X='axles';}
	if($X=='tongue'){$X='tongues';}
	if($X=='bullet'){$X='ammo';}
	
	if($Z=='bullets'){$Z='ammo';}
	if($Z=='ox'){$Z='oxen';}
	if($Z=='wheel'){$Z='wheels';}
	if($Z=='axle'){$Z='axles';}
	if($Z=='tongue'){$Z='tongues';}
	if($Z=='bullet'){$Z='ammo';}
	$_SESSION[$X]-=$W;
	$_SESSION[$Z]+=$Y;
}




?>