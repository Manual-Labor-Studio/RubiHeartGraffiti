var heart;
var canvas;
var drawInterval;

function preload() {
    heart = loadImage("rubiheart-01.png");
}

function setup() {
    canvas = createCanvas(windowWidth - 100, windowHeight-100);
    canvas.id("canvas")
    canvas.parent("canvas_div");
}


function mousePressed() {
    drawInterval = setInterval(drawHeart, 100);
}

function mouseReleased() {
    clearInterval(drawInterval);
}

function drawHeart() {
    var randSize = random(100,700); 
    var x = mouseX - (randSize/2);
    var y = mouseY - (randSize/2);
    image(heart, x, y, randSize, randSize);
}

function windowResized() {
    canvas = resizeCanvas(windowWidth - 100, windowHeight-100);
}

const clear_btn = document.querySelector("#clear");
clear_btn.addEventListener('click', function(){
    clear();
});

const save = document.querySelector("#save");
save.addEventListener('click', function(){
    saveCanvas('RubiGraffiti.jpg');
});