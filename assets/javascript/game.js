$(document).ready(function () {

    //select a random number between 19 and 120

    var dealer = Math.floor(Math.random() * 101 + 19);
    console.log(dealer);
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    // Appending random number to the randomNumber id in the html doc
    $('#dealerNum').html(dealer);


    //// Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)



    //  Decaring variables for tallies
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').html(wins)
    $('#losses').html(losses)

    //reset the game
    function reset() {
        dealer = Math.floor(Math.random() * 101 + 19);

        $('dealerNum').html(dealer);
        num1 = Math.floor(Math.random() * 11 + 1)
        num2 = Math.floor(Math.random() * 11 + 1)
        num3 = Math.floor(Math.random() * 11 + 1)
        num4 = Math.floor(Math.random() * 11 + 1)
        totalScore = 0;
        $('#display').html(totalScore)
    }

    //scenerio: win
    function winning() {
        alert("WINNER!");
        wins++;
        $('#wins').html(wins);
        reset();
    }


    //scenerio: loss
    function womps() {
        alert("LOSER!");
        losses++;
        $('#losses').html(wins);
        reset();
    }

    //now we set up the clicks
    $('#blue').on('click', function () {
        totalScore = totalScore + num1;
        console.log(totalScore);
        $('#display').html(totalScore);
        //sets win/lose conditions
        if (dealer == totalScore) {
            winning()
        } else if (dealer < totalScore) {
            womps();
        }
    })

    $('#red').on('click', function () {
        totalScore = totalScore + num2;
        console.log(totalScore);
        $('#display').html(totalScore);
        //sets win/lose conditions
        if (dealer == totalScore) {
            winning()
        } else if (dealer < totalScore) {
            womps();
        }
    })

    $('#yellow').on('click', function () {
        totalScore = totalScore + num3;
        console.log(totalScore);
        $('#display').html(totalScore);
        //sets win/lose conditions
        if (dealer == totalScore) {
            winning()
        } else if (dealer < totalScore) {
            womps();
        }
    })

    $('#green').on('click', function () {
        totalScore = totalScore + num4;
        console.log(totalScore);
        $('#display').html(totalScore);
        //sets win/lose conditions
        if (dealer == totalScore) {
            winning()
        } else if (dealer < totalScore) {
            womps();
        }
    })




})