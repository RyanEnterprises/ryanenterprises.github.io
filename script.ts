// Set up a new program that animates the image on "index.html" page to zoom in for a few seconds.



// Set up the canvas
var canvas = <HTMLCanvasElement>document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set up the image
var img = new Image();
img.src = "https://live.staticflickr.com/65535/51387802600_86d05a331d_w.jpg";

// Set up the animation
var time = 0;
var timeStep = 0.01;
var zoom = 1;
var zoomStep = 0.2;

// Draw the image
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillText("Zoom: " + zoom, 10, 30);
}

// Animate the image
function animate() {
    time += timeStep;
    zoom += zoomStep;
    draw();
    if (zoom > 1.5) {
        zoom = 1;
    }
    requestAnimationFrame(animate);
}

// Start the animation
animate();