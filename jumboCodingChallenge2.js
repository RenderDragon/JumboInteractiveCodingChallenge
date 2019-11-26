/*jshint esversion: 6 */
// Attempt 2
// Jumbo Interactive Coding Challenge
// Author: Sylvester Soetianto
var Combinatorics = require('js-combinatorics');
// The Problem
// Score each ticket, return how many winning tickets and of which type were won by J and M
// J and M buy 3 lottery tickets
var john = {
    name: "John",
    games: {
        game1: [7, 9, 13, 24, 33, 40],
        game2: [16, 19, 22, 29, 31, 39],
        game3: [1, 7, 18, 22, 30, 36]
    }
}; // 3 games

var mary = {
    name: "Mary",
    games: {
        game1: [2, 22, 13, 24, 32, 39],
        game2: [7, 22, 24, 31, 33, 40],
        game3: [3, 7, 18, 21, 37, 38]
    }
}; // 3 games

// Bonus objective
// Jack's System ticket with numbers
var numberSet = [3, 5, 7, 11, 22, 24, 31, 34, 40];
var system9 = {
    name: "John",
    games: {

    }
}; // 84 unique games

// Add 84 unique games to the system9 ticket
function populateGames(){
    var systemgames = [];
    var cmb = Combinatorics.combination(numberSet, 6);
    while(a = cmb.next()) systemgames.push(a);
    for(var i = 0; i < systemgames.length; i++){
        system9.games["game" + (i+1)] = systemgames[i];
    }
}

// The lottery was drawn and winning numbers were selected
var winningNumbers = [7, 22, 24, 31, 33, 40];
// Prizes are
function chooseDivision(numMatches) {
    switch(numMatches){
        case 3:
            return 4;
        case 4:
            return 3;
        case 5:
            return 2;
        case 6:
            return 1;
        default:
            return false;
    }
}
// Note: A game can only win one division, that is the division with the most matches
// The output of the program should be something like:
var desiredOutput = "John wins a division 3 on game #1 with matches 7,24,33,40 in game 7,9,13,24,33,40";

// Add matched numbers to an array for later
function matchNumbers(inputNumbers) {
    matches = [];
    if(inputNumbers.length > 0) {
        for (const inputNum of inputNumbers) {
            for (const winningNum of winningNumbers) {
                if(inputNum == winningNum) {
                    matches.push(inputNum);
                }
            }
        }
        if(matches.length > 0) {
            return matches;
        }
    }
    return false;
}

// Return the division, matched numbers, and current game
function runLotto(game) {
    if(game.length > 0) {
        var matched = matchNumbers(game);
        return [chooseDivision(matched.length), matched, game];
    }
    return false;
}

// Scores the games for a given set of tickets
function scoreTickets(tickets, player) {
    var gameNum = 1;
    for(var game in tickets) {
        if(tickets.hasOwnProperty(game)) {
            if(runLotto(tickets[game]) != false && runLotto(tickets[game])[0] != false) {
                var results = runLotto(tickets[game]);
                var division = results[0];
                var matching = results[1];
                var currentGame = results[2];
                var output = player + ' wins a division '
                + division + ' on game #'
                + gameNum + ' with matches '
                + matching.toString() + ' in game '
                + currentGame.toString();
                console.log(output);
            }
        }
        gameNum++;
    }
}

// Outputting the results
scoreTickets(john.games, john.name);
scoreTickets(mary.games, mary.name);
populateGames();
scoreTickets(system9.games, system9.name);