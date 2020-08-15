https://www.codewars.com/kata/57e921d8b36340f1fd000059


    function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if ( dolphin == true) { if ((pontoonDistance / youSpeed ) < (sharkDistance * 2 / sharkSpeed )) return 'Alive!';
    else return "Shark Bait!";}
    else  { if ((pontoonDistance / youSpeed ) < (sharkDistance / sharkSpeed )) return 'Alive!';
    else return "Shark Bait!";}
}

