// Help from Ayren

// All values for MS Paint
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const sizeUp = document.getElementById("increase")
const sizeDown = document.getElementById("decrease")
const sizeCng = document.getElementById("size")

let size = 20
let isPressed = false
let color = 'black'
let x
let y

// Increase/Decrease/Limit drawing size
sizeUp.addEventListener("click", () => {
    size = size + 1
    sizeCng.textContent = size
    console.log(size)
});

sizeDown.addEventListener("click", () => {
    if (size === 1){
        size = size;
    } else {
        size = size - 1;
    }
    sizeCng.textContent = size
});

sizeCng.addEventListener("click", () => {
    
})



// Drawing with mouse via click/drag
canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

// Makes the line work as a line
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}