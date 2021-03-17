var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = 4,
    y = 4,
    speed = 1,
    isBottom = false;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#07C';
    ctx.lineCap = 'round';
    ctx.shadowBlur = 18;
    ctx.shadowColor = "#07C";
    ctx.fillRect(x, y, 210, 10);
	
    if (!isBottom && y < canvas.height - 14){
        y += speed;
    } else if (y === canvas.height - 14){
        isBottom = true;
    }
	
    if (isBottom && y > 4){
        y -= speed;
    } else if (y === 4){
        isBottom = false;
    }
    requestAnimationFrame(draw);
}

function stopDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(stopDraw);
}

document.getElementById("canvas").addEventListener('mousedown', () => {
    draw()
})

document.getElementById("canvas").addEventListener('mouseup', () => {
    stopDraw()
})