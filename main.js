const canvas = document.getElementById("myCanvas");

const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;

const wave = {
  y: height / 2,
  firstDegree: -1080,
  lastDegree: 1080,
  amplitude: 200,
  frequency: 0.01,
};

const bgColor = {
  r: 0,
  g: 0,
  b: 0,
  a: 0.01,
};

const strokeColor = {
  h: 0,
  s: 50,
  l: 50,
};

let increment = wave.frequency;

function sineWave() {
  requestAnimationFrame(sineWave);
  c.fillStyle = `rgba(${bgColor.r},${bgColor.g},${bgColor.b}, ${bgColor.a})`;
  c.fillRect(0, 0, width, height);

  c.beginPath();

  c.moveTo(0, height / 2);

  for (let i = 0; i < width; i++) {
    let number = mapValue(i, 0, width, wave.firstDegree, wave.lastDegree);
    c.lineTo(
      i,
      wave.y +
        Math.sin((number * Math.PI) / 180 + increment) *
          wave.amplitude *
          Math.sin(increment)
    );
  }
  c.strokeStyle = `hsl(${strokeColor.h},${strokeColor.s}%,${strokeColor.l}%)`;
  c.stroke();

  increment += wave.frequency;
  if (strokeColor.h <= 360) {
    strokeColor.h += 1
  }
  else {
    strokeColor.h = 0
  }
}

function mapValue(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

sineWave();
