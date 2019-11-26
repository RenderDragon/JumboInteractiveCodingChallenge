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
// John wins a division 3 on game #1 with matches 7,24,33,40 in game 7,9,13,24,33,40
scoreTickets(mary.games, mary.name);
// Mary wins a division 1 on game #2 with matches 7,22,24,31,33,40 in game 7,22,24,31,33,40
populateGames();
scoreTickets(system9.games, system9.name);
/*
John wins a division 4 on game #1 with matches 7,22,24 in game 3,5,7,11,22,24
John wins a division 4 on game #2 with matches 7,22,31 in game 3,5,7,11,22,31
John wins a division 4 on game #3 with matches 7,24,31 in game 3,5,7,11,24,31
John wins a division 3 on game #4 with matches 7,22,24,31 in game 3,5,7,22,24,31
John wins a division 4 on game #5 with matches 22,24,31 in game 3,5,11,22,24,31
John wins a division 3 on game #6 with matches 7,22,24,31 in game 3,7,11,22,24,31
John wins a division 3 on game #7 with matches 7,22,24,31 in game 5,7,11,22,24,31
John wins a division 4 on game #10 with matches 7,22,24 in game 3,5,7,22,24,34
John wins a division 4 on game #12 with matches 7,22,24 in game 3,7,11,22,24,34
John wins a division 4 on game #13 with matches 7,22,24 in game 5,7,11,22,24,34
John wins a division 4 on game #15 with matches 7,22,31 in game 3,5,7,22,31,34
John wins a division 4 on game #17 with matches 7,22,31 in game 3,7,11,22,31,34
John wins a division 4 on game #18 with matches 7,22,31 in game 5,7,11,22,31,34
John wins a division 4 on game #19 with matches 7,24,31 in game 3,5,7,24,31,34
John wins a division 4 on game #21 with matches 7,24,31 in game 3,7,11,24,31,34
John wins a division 4 on game #22 with matches 7,24,31 in game 5,7,11,24,31,34
John wins a division 4 on game #23 with matches 22,24,31 in game 3,5,22,24,31,34
John wins a division 3 on game #24 with matches 7,22,24,31 in game 3,7,22,24,31,34
John wins a division 3 on game #25 with matches 7,22,24,31 in game 5,7,22,24,31,34
John wins a division 4 on game #26 with matches 22,24,31 in game 3,11,22,24,31,34
John wins a division 4 on game #27 with matches 22,24,31 in game 5,11,22,24,31,34
John wins a division 3 on game #28 with matches 7,22,24,31 in game 7,11,22,24,31,34
John wins a division 4 on game #29 with matches 7,22,40 in game 3,5,7,11,22,40
John wins a division 4 on game #30 with matches 7,24,40 in game 3,5,7,11,24,40
John wins a division 3 on game #31 with matches 7,22,24,40 in game 3,5,7,22,24,40
John wins a division 4 on game #32 with matches 22,24,40 in game 3,5,11,22,24,40
John wins a division 3 on game #33 with matches 7,22,24,40 in game 3,7,11,22,24,40
John wins a division 3 on game #34 with matches 7,22,24,40 in game 5,7,11,22,24,40
John wins a division 4 on game #35 with matches 7,31,40 in game 3,5,7,11,31,40
John wins a division 3 on game #36 with matches 7,22,31,40 in game 3,5,7,22,31,40
John wins a division 4 on game #37 with matches 22,31,40 in game 3,5,11,22,31,40
John wins a division 3 on game #38 with matches 7,22,31,40 in game 3,7,11,22,31,40
John wins a division 3 on game #39 with matches 7,22,31,40 in game 5,7,11,22,31,40
John wins a division 3 on game #40 with matches 7,24,31,40 in game 3,5,7,24,31,40
John wins a division 4 on game #41 with matches 24,31,40 in game 3,5,11,24,31,40
John wins a division 3 on game #42 with matches 7,24,31,40 in game 3,7,11,24,31,40
John wins a division 3 on game #43 with matches 7,24,31,40 in game 5,7,11,24,31,40
John wins a division 3 on game #44 with matches 22,24,31,40 in game 3,5,22,24,31,40
John wins a division 2 on game #45 with matches 7,22,24,31,40 in game 3,7,22,24,31,40
John wins a division 2 on game #46 with matches 7,22,24,31,40 in game 5,7,22,24,31,40
John wins a division 3 on game #47 with matches 22,24,31,40 in game 3,11,22,24,31,40
John wins a division 3 on game #48 with matches 22,24,31,40 in game 5,11,22,24,31,40
John wins a division 2 on game #49 with matches 7,22,24,31,40 in game 7,11,22,24,31,40
John wins a division 4 on game #51 with matches 7,22,40 in game 3,5,7,22,34,40
John wins a division 4 on game #53 with matches 7,22,40 in game 3,7,11,22,34,40
John wins a division 4 on game #54 with matches 7,22,40 in game 5,7,11,22,34,40
John wins a division 4 on game #55 with matches 7,24,40 in game 3,5,7,24,34,40
John wins a division 4 on game #57 with matches 7,24,40 in game 3,7,11,24,34,40
John wins a division 4 on game #58 with matches 7,24,40 in game 5,7,11,24,34,40
John wins a division 4 on game #59 with matches 22,24,40 in game 3,5,22,24,34,40
John wins a division 3 on game #60 with matches 7,22,24,40 in game 3,7,22,24,34,40
John wins a division 3 on game #61 with matches 7,22,24,40 in game 5,7,22,24,34,40
John wins a division 4 on game #62 with matches 22,24,40 in game 3,11,22,24,34,40
John wins a division 4 on game #63 with matches 22,24,40 in game 5,11,22,24,34,40
John wins a division 3 on game #64 with matches 7,22,24,40 in game 7,11,22,24,34,40
John wins a division 4 on game #65 with matches 7,31,40 in game 3,5,7,31,34,40
John wins a division 4 on game #67 with matches 7,31,40 in game 3,7,11,31,34,40
John wins a division 4 on game #68 with matches 7,31,40 in game 5,7,11,31,34,40
John wins a division 4 on game #69 with matches 22,31,40 in game 3,5,22,31,34,40
John wins a division 3 on game #70 with matches 7,22,31,40 in game 3,7,22,31,34,40
John wins a division 3 on game #71 with matches 7,22,31,40 in game 5,7,22,31,34,40
John wins a division 4 on game #72 with matches 22,31,40 in game 3,11,22,31,34,40
John wins a division 4 on game #73 with matches 22,31,40 in game 5,11,22,31,34,40
John wins a division 3 on game #74 with matches 7,22,31,40 in game 7,11,22,31,34,40
John wins a division 4 on game #75 with matches 24,31,40 in game 3,5,24,31,34,40
John wins a division 3 on game #76 with matches 7,24,31,40 in game 3,7,24,31,34,40
John wins a division 3 on game #77 with matches 7,24,31,40 in game 5,7,24,31,34,40
John wins a division 4 on game #78 with matches 24,31,40 in game 3,11,24,31,34,40
John wins a division 4 on game #79 with matches 24,31,40 in game 5,11,24,31,34,40
John wins a division 3 on game #80 with matches 7,24,31,40 in game 7,11,24,31,34,40
John wins a division 3 on game #81 with matches 22,24,31,40 in game 3,22,24,31,34,40
John wins a division 3 on game #82 with matches 22,24,31,40 in game 5,22,24,31,34,40
John wins a division 2 on game #83 with matches 7,22,24,31,40 in game 7,22,24,31,34,40
John wins a division 3 on game #84 with matches 22,24,31,40 in game 11,22,24,31,34,40
*/