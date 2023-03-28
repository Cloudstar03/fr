let myShader;

function preload() {
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

let mCam = 0.5;
let pCam = [0.0, 0.0];

function draw() {
  // управление камерой
  if((keyIsPressed == true) && (key == 'w'))
    pCam[1] += 0.01 * mCam;
  if((keyIsPressed == true) && (key == 's'))
    pCam[1] -= 0.01 * mCam;
  if((keyIsPressed == true) && (key == 'a'))
    pCam[0] -= 0.01 * mCam;
  if((keyIsPressed == true) && (key == 'd'))
    pCam[0] += 0.01 * mCam;

  if((keyIsPressed == true) && (key == 'q'))
    mCam *= 1.01;
  if((keyIsPressed == true) && (key == 'e'))
    mCam /= 1.01;

  // запуск шейдера
  shader(myShader);

  myShader.setUniform('mnPos', [-width / height * mCam + pCam[0], -mCam + pCam[1]]);
  myShader.setUniform('mxPos', [width / height * mCam + pCam[0], mCam + pCam[1]]);
  rect(0, 0, width, height);
}