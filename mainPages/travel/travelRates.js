/* Travel rate information

*/


// Pace rates define distance traveled and time spent animating ox movement
// Time animated = 0.1 * miles traveled
//  e.g. steady goes 20 miles a day and animates for 2 seconds
var paceRate {

    "steady" : 2 ,
    "strenuous" : 3 ,
    "grueling" : 4

};

// Food consumption rates are per-person-still-alive multiplied
//  by some flat rate, which are listed below
var foodRate {

    "filling" : 3 ,
    "meager" : 2 ,
    "bare bones" : 1

};
