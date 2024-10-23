
var c = document.getElementById('main-canvas');
var ctx = c.getContext("2d");

function drawLine(sx, sy, ex, ey) {
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex,ey);
    ctx.stroke();
}

// px = start position x; py = start position y; count = the count of how many triangles you want; aSize = size of first edges
function scaledTriangle(px, py, count, aSize, scaleSpeed) {
    for (let i = 0; i < count; i++) {
    
        let bx = px + aSize * Math.cos(60);
        let by = py + aSize * Math.sin(60);

        let cx = px + aSize;
        let cy = py;

        drawLine(px, py, bx, by);
        drawLine(bx, by, cx, cy);
        drawLine(cx, cy, px, py);

        aSize *= scaleSpeed;
    }
}

scaledTriangle(100, 500, 100, 20, 1.1);