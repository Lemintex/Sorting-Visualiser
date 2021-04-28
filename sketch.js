//2715375
var numberOfBars = 50;
var values = [numberOfBars];
var init = [numberOfBars];
var done = false;
var state = [numberOfBars];
var animationSpeed = 200;
var volume = -10;
var paused = true;
var algorithmName = "";
var algorithmDesc = "";
var algorithmVid = "";

var bubble = new bubbleSort();
var insertion = new insertionSort();
var selection = new selectionSort();

function setup() {
  var canvas = createCanvas(windowWidth, 400);
  canvas.parent('sketch');
  randomLines();
  document.getElementById("sliderVal").innerHTML = 0;
  monoSynth = new p5.MonoSynth();
}

function draw() {
  background(214);
  updateRectangles();
  fill(0);
  if (!paused) {
    rect(50, 0, 5, 20);
    rect(60, 0, 5, 20);
  }
  else {
    triangle(50, 0, 50, 20, 65, 10);
    }
}

function updateRectangles(){
  fill(0);
  textSize(32);
  text("Scroll to change volume.", 50, 50);
  text("Current: " + (volume+10), 50, 75);
  textSize(20);
  fill(200, 20, 20);
  stroke(200, 20, 20);
  text("Compare", 50, 100);
  fill(25, 200, 0);
  stroke(25, 200, 0);
  text("Swap", 50, 120);
  fill(25, 100, 244);
  stroke(25, 100, 244);
  text("Remember", 50, 140);
  for (var i = 0; i < values.length; i++) {
    stroke(25);
    switch (state[i]) {
      case 0:
      fill(75);
        break;
      case 1:
        fill(200, 20, 20);
        break;
      case 2:
        fill(25, 200, 0);
        break;
      case 3:
        fill(25, 100, 244);
    }
    rect(i*(windowWidth/50), height-values[i]*5-20, windowWidth/50, values[i]*5+20);
  }
}

function randomLines() {
    for (var i = 0; i < numberOfBars; i++) {
      state[i] = 0;
      init[i] = i;
  }
  values = init;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function disableButtons(){
  document.getElementById("AlgorithmName").innerHTML = algorithmName;
  document.getElementById("AlgorithmDesc").innerHTML = algorithmDesc;
  document.getElementById("AlgorithmVid").src = algorithmVid;
  var button = document.getElementsByClassName('button');
  paused = false;
  for (i = 0; i < button.length; i++) {
    button[i].disabled = true;
  }
}

function mousePressed(){
  paused = !paused;
}

function enableButtons(){
  var button = document.getElementsByClassName('button');
  paused = true;
  for (i = 0; i < button.length; i++) {
    button[i].disabled = false;
  }
}

function windowResized(){
    resizeCanvas(windowWidth, 400);
}

function evalSlider(){
  var sliderVal = document.getElementById("speedSlider").value;
  document.getElementById("sliderVal").innerHTML = sliderVal;
  animationSpeed = 200 - sliderVal*2  ;
}

function mouseWheel(event){
  scroll = event.delta;
  if (scroll > 0 && volume >= 0) {
    volume-=10;
  }
  else if (scroll < 0 && volume <= 80) {
    volume+=10;
    print(volume);
  }
}

function playNote(i){
  var note = (i + 10) * 25;
  if (volume != -10) {
  monoSynth.play(note, (volume+10)/360, 0, 1/8);
  }
}
