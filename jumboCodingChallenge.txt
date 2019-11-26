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
var johnBonusGame1 = [3, 5, 7, 11, 22, 24, 31, 34, 40];

// Mary's Ticket
var maryGame1 = [2, 22, 13, 24, 32, 39];
var maryGame2 = [7, 22, 24, 31, 33, 40];
var maryGame3 = [3, 7, 18, 21, 37, 38];

// Tickets
var john = {game1: johnGame1, game2: johnGame2, game3: johnGame3};
var mary = {game1: maryGame1, game2: maryGame2, game3: maryGame3};
var johnSystem = {game1: johnBonusGame1};

var outputLine = name + ' wins a division '
    + division + ' on game #'
    + gameNum + ' with matches '
    + matches.toString() + ' in game '
    + currentGame.toString();

// Challenge Logic
function CheckNumber(inputNumber, matchingNumber) {
    if (inputNumber == matchingNumber) {
        return true;
    }
    return false;
}

// Checks each of the games of ALL tickets
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
    return [matched, matching];
}

// Gets the games in which matches were found
function CheckTickets(inputTicket) {
    var matchedGames = [];
    for(var game in inputTicket) {
        if(inputTicket.hasOwnProperty(game)) {
            matchedGames.push(CheckGame(inputTicket[game], winningNumbers));
        }
    }
    return matchedGames;
}

// Assigns a division to the division variable
function checkDivision(ticketResults){
    results = [];
    games = [];
    for(var i in ticketResults){
        results.push((ticketResults[i][0]));
        games.push((ticketResults[i][1]))
    }
    gameNum = 1 + results.indexOf(Math.max(...results));
    matches = games[gameNum-1];
    switch(Math.max(...results)){
        case 3:
            division = 4;
            break;
        case 4:
            division = 3;
            break;
        case 5:
            division = 2;
            break;
        case 6:
            division = 1;
            break;
        default:
            break;
    }
    return division;
}

// The actual program
function runLotto(participant, ticketName){
    name = ticketName;
    division = checkDivision(CheckTickets(participant));
    currentGame = participant[Object.keys(participant)[gameNum-1]];
    outputLine = name + ' wins a division '
    + division + ' on game #'
    + gameNum + ' with matches '
    + matches.toString() + ' in game '
    + currentGame.toString();
    console.log(outputLine);
}

runLotto(john, "John");
runLotto(johnSystem, "John");