let xPos, YPos;
let xSpeed, ySpeed; = 250;
let xDirection, yDirection;
let dvdLogo = ("https://i.imgur.com/vb7nVNA.png");
let pingSound = ("ping-82822.mp3");

function preload()
  {
    dvdlogo = loadImage('dvdlogo.png')
    pingSound = loadsound('ping_sound.mp3')
  }


function setup() {
  createCanvas(500, 500);
  background(0);
  xPos = width / 2;
  yPos = height / 2;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
  xDirection = 1;
  yDirection = 1;
}

function draw() {
  background(0);

  xPos += xSpeed * xDirection;
  YPos += ySpeed * yDirection;

  if (YPos + dvdLogo.width / 2 >= width || xPos - dvdLogo.width / 2 <= 0) { xDirection *= -1;
                                                                          pingSound.play}

  if(yPos + dvdLogo.height / 2 >= height || yPos - dvdLogo.height / 2 <= 0) 
    pingSound.play();
  

  Image(dvdLogo, xPos - dvdLogo.width / 2, YPos - dvdLogo.height / 2)
}




