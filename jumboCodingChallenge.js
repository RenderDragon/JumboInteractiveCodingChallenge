// Jumbo Interactive Coding Challenge
// Author: Sylvester Soetiantop

// Objective: Lottery Scoring - score each ticket & return winning tickets / which type were won

// To match
var winningNumbers = [7, 22, 24, 31, 33, 40];

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

// Tickets
var john = {game1: johnGame1, game2: johnGame2, game3: johnGame3};
var mary = {game1: maryGame1, game2: maryGame2, game3: maryGame3};

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
}

function CheckGame(ticket, match) {
    var matched = 0;
    var matching = [];
    // Iterate through the winning numbers
    for (i = 0; i < match.length; i++) {
        // Check each ticket number against each winning number
        for (j = 0; j < ticket.length; j++) {
            if(CheckNumber(ticket[j], match[i])) {
                matched++;
                matching.push(ticket[j]);
            }
        }
    }
    console.log("Matched " + matched + " numbers!");
    console.log(matching);
    return [matched, matching];
}

function CheckTickets(inputTicket) {
    var matchedGames = [];
    for(var game in inputTicket) {
        if(inputTicket.hasOwnProperty(game)) {
            matchedGames.push(CheckGame(inputTicket[game], winningNumbers));
        }
    }
    console.log(matchedGames);
    return matchedGames;
}

function checkDivision(ticketResults){
    results = [];
    for(var i in ticketResults){
        results.push((ticketResults[i][0]));
    }
    console.log(results);
    gameNum = 1 + results.indexOf(Math.max(...results));
    //matches = ticketResults[gameNum-1][1];
    matches = (ticketResults[gameNum-1][1]);
    switch(Math.max(...results)){
        case 3:
            console.log("Division 4");
            division = 4;
            break;
        case 4:
            console.log("Division 3");
            division = 3;
            break;
        case 5:
            console.log("Division 2");
            division = 2;
            break;
        case 6:
            console.log("Division 1");
            division = 1;
            break;
        default:
            break;
    }
    return division;
}

function runLotto(participant, ticketName){
    name = ticketName;
    division = checkDivision(participant);
    console.log(outputLine);

}

//CheckGame(johnGame1, winningNumbers);
//CheckGame(johnGame2, winningNumbers);
//CheckGame(johnGame3, winningNumbers);

//CheckTickets(john);
//checkDivision(CheckTickets(john));
runLotto(john, "John");