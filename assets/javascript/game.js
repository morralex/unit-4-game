$(document).ready(function () {

    //select a random number between 19 and 20

    var dealer = Math.floor(Math.random() * 101 + 19);
    console.log(dealer);
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#dealerNum').html(dealer);
    // Appending random number to the randomNumber id in the html doc


    //// Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)


    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    //  Decaring variables for tallies

    //reset the game

    //add wins to the userTotal

    //add losses to the userTotal

    //sets up click for jewels

    //sets win/lose conditions

    //sets win/lose conditions






})