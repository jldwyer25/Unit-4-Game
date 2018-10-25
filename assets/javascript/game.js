//put this first to safeguard all functions

$(document).ready(function(){

//first things first, define global variables
//first, computer variable - will be random so string is needed
var computerPick = "";
//est wins & losses
var wins=0;
var losses=0;
//establish the different jewels, each will be random
var rubyScore = "";
var diamondScore = "";
var topazScore = "";
var emeraldScore = "";
//establish the user's score which will need to match computerPick at some point.
var userScore = "";

//establish all starting values with randomization & display to page
function gameStart(){

    rubyScore = Math.floor(Math.random()*12)+1;
    diamondScore = Math.floor(Math.random()*12)+1;
    topazScore = Math.floor(Math.random()*12)+1;
    emeraldScore = Math.floor(Math.random()*12)+1;
    computerPick = Math.floor(Math.random()* 101)+19;
    //these display to page with jquery to specific HTML elements
    $("#random-area").text(computerPick);
    $("#userScore").text(userScore);
}

// var randomarea = Math.floor(Math.random() * 120) + 19;
// console.log()

gameStart();

//on.click functions for each crystal. they must increment correctly and compare score to both userpick & compPick

$("#ruby").on('click', function(){
    userScore = rubyScore += 5;
    $("#score-area").text(userScore);
    // countScore();
    console.log(userScore);
});

$("#diamond").on('click', function(){
    userScore = diamondScore += 8;
    $("#score-area").text(userScore);
    // countScore();
    console.log(userScore);
});

$("#topaz").on('click', function(){
    userScore = topazScore += 11;
    $("#score-area").text(userScore);
    // countScore();
    console.log(userScore);
});

$("#emerald").on('click', function(){
    userScore = emeraldScore += 4;
    $("#score-area").text(userScore);
    // countScore();
    console.log(userScore);
});


//CONSOLE LOGS TO MAKE SURE ITS WORKIN - 7:06pm it works. pls god keep working.
console.log(computerPick);
console.log(ruby);
console.log(diamond);
console.log(emerald);
console.log(topaz);

})