// alert("Hello!");
// console.log("test");

const wins = 0;
const losses = 0;
const counter = 0;
const total = 0;

function getRandom(min, max) {
    return Math.floor(Math.random() * (120 - 19) + 19);
}

function crystalRandom(min, max) {
    return Math.floor(Math.random() * (12-1) + 1);
}

//here's where I start to get a little lost
// start function () {
$("#h2").append(getRandom);
// }

$("#red").append(crystalRandom);
$("#white").append(crystalRandom);
$("#green").append(crystalRandom);
$("#yellow").append(crystalRandom);

//need to configure start/reset
