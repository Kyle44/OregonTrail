<?php
	session_start();

	$_SESSION['day'] += 1;
	if ($_SESSION['pace'] = 'strenuous') {
		$_SESSION['miles'] += 30;
		$_SESSION['nexLand'] -= 30;
	}
	elseif ($_SESSION['pace'] = 'grueling') {
		$_SESSION['miles'] += 40;
		$_SESSION['nexLand'] -= 40;
	}
	else {
		$_SESSION['miles'] += 20;
		$_SESSION['nexLand'] -= 20;
	}

	if ($_SESSION['rations'] = 'meager') {
		$_SESSION['food'] -= 10;
	}
	elseif ($_SESSION['rations'] = 'bare bones') {
		$_SESSION['food'] -= 5;
	}
	else {
		$_SESSION['food'] -= 20;
	}

	if ($_SESSION['food'] <= 0) {
		$_SESSION['food'] = 0;
	}

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
