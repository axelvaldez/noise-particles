const spacing = window.innerWidth / 50;
const size = 5;
const speed = 2;
var particles = [];

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  blendMode(MULTIPLY);
  frameRate(30);
  for (y = 0; y <= window.innerHeight; y+= spacing){
    for (x = 0; x <= window.innerWidth; x+= spacing){
      var particle = new Particle(x, y, size);
      particles.push(particle);
    }
  }
}

function draw(){
  clear();
  particles.forEach(function(particle){
    particle.update();
  });
}


function Particle(x, y, size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.color = color('hsl(' + round((360 * this.x) / window.innerWidth) + ', 100%, 50%)');

  this.update = function(){
    this.draw();
    this.move();
  }

  this.draw = function(){
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.move = function(){
    var fwdx = round(random()) == 1;
    var fwdy = round(random()) == 1;

    this.x = (fwdx) ? this.x += speed : this.x -= speed;
    this.y = (fwdy) ? this.y += speed : this.y -= speed;
  }
}
