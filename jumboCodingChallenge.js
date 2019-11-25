// Jumbo Interactive Coding Challenge
// Author: Sylvester Soetiantop

// Objective: Lottery Scoring - score each ticket & return winning tickets / which type were won

// To match
var winningNumbers = [7, 22, 24, 31, 33, 40];

// Tickets
var john = {johnGame1, johnGame2, johnGame3};
var mary = { maryGame1, maryGame2, maryGame3 };

// Placeholders for output
var name = '';
var division = '';
var gameNum = '';
var matches = [];
var currentGame = [];

// John's Ticket
var johnGame1 = [7, 9, 13, 24, 33, 40];
var johnGame2 = [16, 19, 22, 29, 31, 39];
var johnGame3 = [1, 7, 18, 22, 30, 36];

// Mary's Ticket
var maryGame1 = [2, 22, 13, 24, 32, 39];
var maryGame2 = [7, 22, 24, 31, 33, 40];
var maryGame3 = [3, 7, 18, 21, 37, 38];

var outputLine = name + ' wins a division '
    + division + ' on game #'
    + gameNum + ' with matches '
    + matches.toString() + ' in game '
    + currentGame.toString();

// Challenge Logic
function CheckNumber(inputNumber, matchingNumber) {
    if (inputNumber == matchingNumber) {
        console.log("Match! Input: " + inputNumber + " Winning: " + matchingNumber);
        return true;
    }
    return false;
};

function CheckGame(ticket, match) {
    var matches = 0;
    // Iterate through the winning numbers
    for (i = 0; i < match.length; i++) {
        // Check each ticket number against each winning number
        for (i = 0; i < ticket.length; i++) {
            if(CheckNumber(ticket[i], match[i])) {
                matches++;
            }
        }
    }
    console.log("Matched " + matches + " numbers!");
    return matches;
};

function CheckTickets() {

};

CheckGame(johnGame1, winningNumbers);