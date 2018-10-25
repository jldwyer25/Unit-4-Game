//put this first to safeguard all functions

$(document).ready(function(){

//first things first, define global variables
//first, computer variable - will be random so string is needed
var computerPick = "";
//est wins & losses
var wins=0;
var losses=0;
//establish the different jewels, each will be random
var ruby = "";
var diamond = "";
var topaz = "";
var emerald = "";
//establish the user's score which will need to match computerPick at some point.
var userScore = 0;

//establish all starting values with randomization & display to page
function gameStart(){

    ruby = Math.floor(Math.random()*12)+1;
    diamond = Math.floor(Math.random()*12)+1;
    topaz = Math.floor(Math.random()*12)+1;
    emerald = Math.floor(Math.random()*12)+1;
    computerPick = Math.floor(Math.random()* 101)+19;
    //these display to page with jquery to specific HTML elements
    $("#random-area").text(computerPick);
    $("#score-area").text(userScore);
}

// var randomarea = Math.floor(Math.random() * 120) + 19;
// console.log()

gameStart();

// this function will define the parameters of a reset game and will be added to each button to help reset
function resetGame(){
    userScore = 0;
    gameStart();
}

//this function decides whether or not the score compiled by the user is equal to the random number
function scoreWin(){
    //for a win
    if (userScore === computerPick){
        alert("YER A WIZARD, HARRY!");
        wins++;
        $("#wins").text(wins);
        resetGame();
    }
    //for a loss
    else if (userScore>computerPick){
        alert("These jewels are worthless. Khajit does not want trade.");
        losses++;
        $("#losses").text(losses);
        resetGame();
    }
    //for not quite there
    else{
        return false;
    }
}

//on.click functions for each crystal. they must increment correctly and compare score to both userpick & compPick

$("#ruby").on("click", function () {
    score = userScore += ruby;
    $("#score-area").html(score);
    scoreWin();
});

$("#diamond").on("click", function () {
    score = userScore += diamond;
    $("#score-area").html(score);
    scoreWin();
});

$("#topaz").on("click", function () {
    score = userScore += topaz;
    $("#score-area").html(score);
    scoreWin();
});

$("#emerald").on("click", function () {
    score = userScore += emerald;
    $("#score-area").html(score);
    scoreWin();
});


//this was not helpful for adding - would always print same value from last click on specific jewel. unsure why code was figured out above, but worked in groups

// $("#ruby").on('click', function(){
//     userScore = ruby += 5;
//     $("#score-area").text(userScore);
//     // countScore();
//     console.log(userScore);
// });

// $("#diamond").on('click', function(){
//     userScore = diamond += 8;
//     $("#score-area").text(userScore);
//     // countScore();
//     // console.log(userScore);
// });

// $("#topaz").on('click', function(){
//     userScore = topaz += 11;
//     $("#score-area").text(userScore);
//     // countScore();
//     // console.log(userScore);
// });

// $("#emerald").on('click', function(){
//     userScore = emerald += 4;
//     $("#score-area").text(userScore);
//     // countScore();
//     // console.log(userScore);
// });


//CONSOLE LOGS TO MAKE SURE ITS WORKIN - 7:06pm it works. pls god keep working.
console.log(computerPick);
console.log(ruby);
console.log(diamond);
console.log(emerald);
console.log(topaz);

})