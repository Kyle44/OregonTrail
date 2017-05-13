/*

    start at 9 HP (very good)
    8 - 9 vg
    6 - 7 g
    4 - 5 f
    2 - 3 p
    1 - 2 vp
    0 d

    pace -> 0, -1, -2 (resting a day gives + 1)
    rations -> +1, 0, -1
    ailment -> -1 (for 1 week)

    File for common functions across files
    day -> food | weather -> health
*/

var months = ["monthsList", "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];

// create full date string from integer representation
function getDate(game) {
    var month = months[game.month];
    return month + " " + game.day.toString() + ", " + game.year.toString();
}

function calcWeather(game) {

}

function calcFood(game) {

}

function calcMiles(game) {

}

function calcTravelEvent(game) {

}

function calcDays(game) {

}

function calcHealth(game) {

}
