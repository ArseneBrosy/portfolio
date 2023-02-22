var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d");

const SPEED = 0.01;

var silX = 300;

var xpos = 0;

var run_frames = [];
var r_act_frame = 0;
for (var i = 0; i < 12; i++) {
    var newFrame = new Image();
    newFrame.src = "../src/img/run/run" + (i < 10 ? "0": "") + i.toString() + ".png";
    run_frames.push(newFrame);
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // resize
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // montagnes
    ctx.fillStyle = "#4a6c2f";
    for (var i = 0; i < canvas.width; i++) {
        var height = (Math.cos(((i / 8500) + xpos) * (180/Math.PI)) + 1) * 100 + 250;
        ctx.fillRect(i, canvas.height - height, 1, height);
    }
    ctx.fillStyle = "#7cad3e"
    for (var i = 0; i < canvas.width; i++) {
        var height = (Math.cos(((i / 8000) + (xpos * 0.9)) * (180/Math.PI)) + 1) * 75 + 200;
        ctx.fillRect(i, canvas.height - height, 1, height);
    }

    // chemin
    ctx.fillStyle = "#000000";
    ctx.lineWidth = 5;
    var iint = 0;
    for (var i = xpos * -5000 * 0.9 + silX + 75; i < canvas.width; i += 30) {
        var height = (Math.cos(((i / 5000) + (xpos * 0.9)) * (180/Math.PI)) + 1) * 20 + 100;
        ctx.beginPath();
        ctx.arc(i, canvas.height - height, 5, 0, 2 * Math.PI);
        ctx.fill();
        if (iint % 35 === 0) {
            ctx.beginPath();
            ctx.arc(i, canvas.height - height, 20, 0, 2 * Math.PI);
            ctx.stroke();
        }
        iint ++;
    }

    // silhouette
    var height = (Math.cos(((silX / 5000) + (xpos * 0.9)) * (180/Math.PI)) + 1) * 20 + 100;
    ctx.drawImage(run_frames[r_act_frame], silX, canvas.height - height - 150, 150, 150);

    requestAnimationFrame(loop);
}

document.addEventListener("wheel", (e) => {
    xpos += e.deltaY > 0 ? SPEED : -SPEED;
    if (xpos < 0) {xpos = 0;}

    r_act_frame += e.deltaY > 0 ? 1 : -1;
    if (r_act_frame < 0) {r_act_frame = 11;}
    r_act_frame %= 12;
});

requestAnimationFrame(loop);