let bears = [];

function setup() {
  createCanvas(400, 400);

  // 20隻狗熊
  for (let i = 0; i < 20; i++) {
    let size = random(20, 60);
    let speed = random(1, 4);
    let x = random(width);
    let y = random(height);
    let bear = new Bear(x, y, size, speed);
    bears.push(bear);
  }
}

function draw() {
  background(220);

  // 更新和繪製每隻狗熊
  for (let bear of bears) {
    bear.update();
    bear.display();
  }
}

function mousePressed() {
  // 
  for (let i = bears.length - 1; i >= 0; i--) {
    let bear = bears[i];
    if (bear.contains(mouseX, mouseY)) {
      bears.splice(i, 1);
    }
  }
}

class Bear {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.direction = createVector(random(-1, 1), random(-1, 1)).normalize();
    this.eyeSize = size / 6;
    this.earSize = size / 3;
  }

  update() {
    // 根據速度和方向更新狗熊的位置
    let velocity = this.direction.copy().mult(this.speed);
    this.x += velocity.x;
    this.y += velocity.y;

    // 邊界检查，使狗熊在範圍内移動
    if (this.x < 0 || this.x > width) {
      this.direction.x *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.direction.y *= -1;
    }
  }

  display() {
    // 繪製狗熊的身體
    fill(255, 204, 0);
    ellipse(this.x, this.y, this.size, this.size);

    // 繪製眼睛
    fill(0);
    let eyeX1 = this.x - this.size / 4;
    let eyeX2 = this.x + this.size / 4;
    let eyeY = this.y - this.size / 8;
    ellipse(eyeX1, eyeY, this.eyeSize, this.eyeSize);
    ellipse(eyeX2, eyeY, this.eyeSize, this.eyeSize);

    // 繪製耳朵
    let earX1 = this.x - this.size / 2;
    let earX2 = this.x + this.size / 2;
    let earY = this.y - this.size / 2;
    triangle(earX1, earY, this.x, this.y - this.size, earX2, earY);
  }

  contains(x, y) {
    // 检查给定的坐標是否在狗熊的範圍内
    let d = dist(x, y, this.x, this.y);
    return d < this.size / 2;
  }
}
