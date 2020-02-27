var state;
var stateDressUp = 0;
var statePink = 1;
var stateGreen1 = 2;
var stateYellow = 3;
var stateBrown = 4;
var stateBlue1 = 5;
var statePurple = 6;


//***************************************************************RECTANGLES

// Rect 1
  rect1Left = 620;
  rect1Width = 150;
  rect1Top = 20;
  rect1Height = 110;

// Rect 2
  rect2Left = 620;
  rect2Width = 150;
  rect2Top = 150;
  rect2Height = 110;

// Rect 3
  rect3Left = 620;
  rect3Width = 150;
  rect3Top = 280;
  rect3Height = 110;

// Rect 4
  rect4Left = 620;
  rect4Width = 150;
  rect4Top = 410;
  rect4Height = 110;

// Rect 5
  rect5Left = 620;
  rect5Width = 150;
  rect5Top = 540;
  rect5Height = 110;

// Rect 6
  rect6Left = 620;
  rect6Width = 150;
  rect6Top = 670;
  rect6Height = 110;

//***************************************************************IMG PRELOAD

let img;
function preload() {
  dressup = loadImage('assets/dressup.png');
  pink = loadImage('assets/pink.png');
  green1 = loadImage('assets/green1.png');
  yellow = loadImage('assets/yellow.png');
  brown = loadImage('assets/brown.png');
  blue1 = loadImage('assets/blue1.png');
  sun = loadImage('assets/sun.png');
  leaf = loadImage('assets/leaf.png');
  strawberry = loadImage('assets/strawberry.png');
  acorn = loadImage('assets/acorn.png');
  butterfly = loadImage('assets/butterfly.png');
  purple = loadImage('assets/purple.png');
  flower = loadImage('assets/flower.png');
  strawberry2 = loadImage('assets/strawberry2.png');
  leaf2 = loadImage('assets/leaf2.png');
  sun2 = loadImage('assets/sun2.png');
  acorn2 = loadImage('assets/acorn2.png');
  butterfly2 = loadImage('assets/butterfly2.png');
  flower2 = loadImage('assets/flower2.png');
}

function setup() {
  textFont('Sacramento');
  createCanvas(800, 800);
  rectMode(CORNER);

  
}


function draw() {
  
  
//******************************************************************IMAGES
  
  background('#fce1ed');
  
  image(dressup, 300, 40);
  image(strawberry, 665, 40, 60, 75);
  image(sun, 645, 280, 100, 100);
  image(leaf, 660, 180);
  image(acorn, 660, 420, 65, 90);
  image(butterfly, 650, 560, 90, 80);
  image(flower, 660, 680);
  
  
  
  //***********************************************************STATE MACHINES
  
  
  
  if (state == statePink){
    drawPink();
    
  }

  else if (state == stateGreen1) {
    drawGreen1();
  }

   else if (state == stateYellow) {
    drawYellow();
  }

   else if (state == stateBrown ){
    drawBrown();
  }
  
  
   else if (state == stateBlue1 ){
    drawBlue1();
  }
  
   else if (state == statePurple ){
    drawPurple();
  }
  

  
  drawText();
  
}

//****************************************************************FUNCTIONS


function drawPink() {
  image(pink,300,40);
  image(strawberry2,665, 40, 60, 75);
}

function drawGreen1() {
  image(green1,300,40);
  image(leaf2, 660, 180);
}


function drawYellow() {
  image(yellow,300,40);
  image(sun2, 645, 280, 100, 100);
}


function drawBrown() {
  image(brown,292,40);
  image(acorn2, 660, 420, 65, 90);
}

function drawBlue1() {
  image(blue1,285,40);
  image(butterfly2, 650, 560, 90, 80);
}

function drawPurple() {
  image(purple,300,40);
  image(flower2, 660, 680);
}


//**************************************************************TEXT

function drawText(){
  fill(255);
  text("Dress Up Eleanor!", 20, 60,300, 300);
  textSize(70);
  fill(255);
  noStroke();
  
}

//***********************************************************DRAW RECTANGLES

function drawRects() {
  // draw an red at center
  //stroke(255,0,0);
  noFill();
  strokeWeight(2);
  
  rect(rect1Left,rect1Top,rect1Width,rect1Height);
  rect(rect2Left,rect2Top,rect2Width,rect2Height);
  rect(rect3Left,rect3Top,rect3Width,rect3Height);
  rect(rect4Left,rect4Top,rect4Width,rect4Height);
  rect(rect5Left,rect5Top,rect5Width,rect5Height);
  rect(rect6Left,rect6Top,rect6Width,rect6Height);
}


//**********************************************************MOUSE PRESSED

function mousePressed() {

  if( isMouseInRect(rect1Left,rect1Top,rect1Width,rect1Height) ){
  
   state = statePink;
  

  }
  
  else if( isMouseInRect(rect2Left,rect2Top,rect2Width,rect2Height) ){
 
    state = stateGreen1;

  }
  
  else if( isMouseInRect(rect3Left,rect3Top,rect3Width,rect3Height) ){
    
    state = stateYellow;
  }
  
  else if( isMouseInRect(rect4Left,rect4Top,rect4Width,rect4Height) ){
    
    state = stateBrown;
}

  
  else if( isMouseInRect(rect5Left,rect5Top,rect5Width,rect5Height) ){
    
    state = stateBlue1;
}
  
    
  else if( isMouseInRect(rect6Left,rect6Top,rect6Width,rect6Height) ){
    
    state = statePurple;
}
}



function isMouseInRect(rectL, rectT, rectW, rectH) {
  
  if( mouseX >= rectL && mouseX <= rectL + rectW ) {
    if( mouseY >= rectT && mouseY <= rectT + rectH ) {
      
      return true;
    }
  }

  return false;
}

//**************************************************************KEY PRESSED

function keyPressed() {
  if(key == '1'){
    state = stateDressUp;
    print("Changing to Dress up");
  }

  if(key == '2'){
    state = statePink;
     print("Changing to Pink");

  }

    if(key == '3'){
    state = stateGreen1;
    print("Changing to green");
  }

   if(key == '4'){
    state = stateYellow;
    print("Changing to yellow");
  }

   if(key == '5'){
    state = stateBrown;
    print("Changing to brown");
  }
  
   if(key == '6'){
  state = stateBlue1;
  print("Changing to blue");
  }
  
     if(key == '7'){
  state = statePurple;
  print("Changing to purple");
  }
}





