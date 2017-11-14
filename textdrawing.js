'use strict';

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const characters = "!@#$%^&*()-=_+[]{}\"';:/?.>,<\\|";
const numbers = "1234567890";

let userText = '';
let enableColor = true;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent('canvas');
}

function draw() {
  background(50, 50, 50);

  // Canvas
  noStroke();
  fill(230);
  rect(0, 0, width, height);

  // Drawing
  stroke(0);
  fill(60);

  userText = document.querySelector('textarea').value;
  let words = userText.split(' ');

  for (let i=0; i < words.length; i++) {
    let word = words[i];

    // Color
    if (enableColor) {
      if (word.length >= 3) {
        let r = mapColor(word.charAt(0));
        let g = mapColor(word.charAt(1));
        let b = mapColor(word.charAt(2));
        stroke(r, g, b);
        fill(r, g, b);
      } else {
        stroke(0);
        fill(60);
      }
    }

    // Shape
    if (word.length > 1 && word.length < 4) {
      let x = mapPos(word.charAt(0), width);
      let y = mapPos(word.charAt(1), height);
      line(x, y, y, x);
    }

    else if (word.length >= 4 && word.length % 2 == 0) {
      beginShape();
      for (let j=0; j < word.length; j++) {
        vertex(
          mapPos(word.charAt(j), width),
          mapPos(word.charAt(j+1), height)
        );
      }
      endShape();
    }

    else {
      beginShape();
      for (let k=0; k < word.length - 1; k++) {
        vertex(
          mapPos(word.charAt(k), width),
          mapPos(word.charAt(k+1), height)
        );
      }
      endShape();
    }
  }
}

function mapPos(char, max) {
  if (alphabet.includes(char.toLowerCase())) {
    return map(alphabet.indexOf(char), 0, 25, 0, max);
  }

  else if (numbers.includes(char)) {
    return map(numbers.indexOf(char), 0, 9, 0, max);
  }

  else if (characters.includes(char)) {
    return map(characters.indexOf(char), 0, 29, 0, max);
  }

  else {
    return -1;
  }
}

function mapColor(char) {
  if (alphabet.includes(char.toLowerCase())) {
    return map(alphabet.indexOf(char), 0, 25, 0, 255)
  }

  else if (numbers.includes(char)) {
    return map(numbers.indexOf(char), 0, 9, 0, 255);
  }

  else if (characters.includes(char)) {
    return map(characters.indexOf(char), 0, 29, 0, 255);
  }

  else {
    return -1;
  }
}
