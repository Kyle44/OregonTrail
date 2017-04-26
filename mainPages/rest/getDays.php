<?php
	session_start();

	$p = $_REQUEST["p"];
	$d = intval($p);
	$_SESSION['day'] += $d;

	$m = $_SESSION['month'];
	$y = $_SESSION['year'];

	if (($_SESSION['day']>31) && ($m==1 or $m==3 or $m==5 or $m==7 or $m==8 or $m==10 or $m==12)){
		
		$_SESSION['day'] -= 31;

		if ($m==12){
			$_SESSION['year'] += 1;
			$_SESSION['month'] = 1;
		}
		else {
			$_SESSION['month'] += 1;
		}
	}
	elseif (($_SESSION['day']>30) && ($m==4 or $m==6 or $m==9 or $m==11)){
		$_SESSION['day'] -= 30;
		$_SESSION['month'] += 1;
	}
	elseif (($_SESSION['day']>28) && ($m==2)){
		$_SESSION['day'] -= 28;
		$_SESSION['month'] += 1;
	}
	else {
	}
?>