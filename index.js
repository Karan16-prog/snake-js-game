const rows = 40;
const height = 40;
const block = [10, 10];

const score = document.getElementById("score-label");
const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, block[0], block[1]);

// var reset_btn = document.getElementById("reset-btn");

function callReset() {
  // reset the game
}
