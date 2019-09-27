// alert("Hello!");
// console.log("test");

let wins = 0;
let losses = 0;
let targetCount = 0;
let currentScore = 0;

//crystal values
let crystal = {
    
    red:
    {
        name: "red",
        value: 0
    },

    white:
    {
        name: "white",
        value: 0
    },

    green:
    {
        name: "green",
        value: 0
    },

    yellow:
    {
        name: "yellow",
        value: 0
    },

};

let getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startGame = function() {

     currentScore = 0;

      targetCount = getRandom(19, 120);

      crystal.red.value = getRandom(1, 12);
      crystal.white.value = getRandom(1, 12);
      crystal.green.value = getRandom(1, 12);
      crystal.yellow.value = getRandom(1, 12);

      $("#currentScore").html(currentScore);
      $("#goal").html(targetCount);
      $("")

      console.log("==============");
      console.log("Target Score: " + targetCount);
      console.log("Red: " + crystal.red.value + " | White: " + crystal.white.value + " | Green: " + crystal.green.value + " | Yellow: " + crystal.yellow.value);
      console.log("==============");
}


// let crystalRandom = function(min, max) {
//     return Math.floor(Math.random() * (12 - 1) + 1);
// }

//here's where I start to get a little lost
// start function () {
$("#h2").append(getRandom);
// }

let addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

$("#currentScore").html(currentScore);

checkWin();

    console.log("Your Score: " + currentScore); //this is where we left off
}

const checkWin = function() {

if (currentScore > targetCount) {
    alert("Sorry, you lost!");
    console.log("You Lost.");
    
    losses++;

    $("#losses").html(losses);

    startGame();
} else if (currentScore == targetCount) {
    alert("Congratulations! You Won!")
    console.log("You Won ^^");
    wins++;

    $("#wins").html(wins);

    startGame();
}

}



// $("#red").append(getRandom);
// $("#white").append(getRandom);
// $("#green").append(getRandom);
// $("#yellow").append(getRandom);

//need to configure start/reset

startGame();

$("#red").click(function(){
    addValues(crystal.red);
})

$("#white").click(function(){
    addValues(crystal.white);
})

$("#green").click(function(){
    addValues(crystal.green);
})

$("#yellow").click(function(){
    addValues(crystal.yellow);
});

