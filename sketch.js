let message = "";鍵盤輸入事件，鍵盤按左鍵能顯示左鍵，按右鍵能顯示右鍵，按上鍵能顯示上鍵，按下鍵能顯示下鍵，按空白鍵能顯示空白鍵

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // 在畫面顯示文字
  textSize(20);
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);
}

function keyPressed() {
  if (key === 'ArrowLeft') {
    message = "Left arrow key";
  } else if (key === 'ArrowRight') {
    message = "Right arrow key";
  } else if (key === 'ArrowUp') {
    message = "Up arrow key";
  } else if (key === 'ArrowDown') {
    message = "Down arrow key";
  } else if (key === ' ') {
    message = "Space key";
  }
}

function keyReleased() {
  message = "";
}