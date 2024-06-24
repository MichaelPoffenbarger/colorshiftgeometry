let canvas = document.querySelector('canvas');
let canvas2 = document.querySelector('#canvas2');
let button = document.querySelector('.button');
let button1 = document.querySelector('.button1');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let ctx2 = canvas2.getContext('2d');

function drawLine(ctx, ball1, ball2) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(ball1.x, ball1.y);
    ctx.lineTo(ball4.x, ball4.y);
    ctx.lineTo(ball2.x, ball2.y);
    
    
    ctx.lineTo(ball3.x, ball3.y);
    ctx.lineTo(ball1.x, ball1.y);
    ctx.lineTo(ball4.x, ball4.y);
    ctx.lineTo(ball1.x, ball1.y);
    
    ctx.lineWidth = 1;
    ctx.opacity = 0.5;
    ctx.fill();
    ctx.stroke();
}

function move() {
    animationId = requestAnimationFrame(move);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx2.clearRect(0, 0, innerWidth, innerHeight);
     
    drawBall(ctx, ball1);
    drawBall(ctx, ball2);
    drawBall(ctx, ball3);
    drawBall(ctx, ball4);

    drawBall(ctx2, ball1);
    drawBall(ctx2, ball2);
    drawBall(ctx2, ball3);
    drawBall(ctx2, ball4);

    drawLine(ctx, ball1, ball2, ball3, ball4); // Draw line between ball1 and ball2

    updateBall(ball1);
    updateBall(ball2);
    updateBall(ball3);
    updateBall(ball4);

    updateBall(ball1);
    updateBall(ball2);
    updateBall(ball3);
    updateBall(ball4);
}
/*
let ball5 = {
    x: Math.floor(Math.random() * innerWidth),
    y: Math.floor(Math.random() * innerHeight),
    vx: 0, // No horizontal velocity
    vy: Math.floor(Math.random() * 1 + 1.1), // Random vertical velocity
    radius: 1
};*/
let ball1 = {
    x: Math.floor(Math.random() * innerWidth),
    y: Math.floor(Math.random() * innerHeight),
    vx: 0,
    vy: Math.floor(Math.random() * 1+ 1.1),
    radius: 1
};
let ball2 = {
    x: Math.floor(Math.random() * innerWidth),
    y: Math.floor(Math.random() * innerHeight),
    vx: 0,
    vy: Math.floor(Math.random() * 1 + 1.1),
    radius: 1
};

let ball3 = {
    x: Math.floor(Math.random() * innerWidth),
    y: Math.floor(Math.random() * innerHeight),
    vx: 0,
    vy: Math.floor(Math.random() * 1 + 1.1),
    radius: 1
}

let ball4 = {
    x:Math.floor(Math.random() * innerWidth),
    y: Math.floor(Math.random() * innerHeight),
    vx: 0,
    vy: Math.floor(Math.random() * 1 + 1),
    radius: 1
}

let animationId;

button1.addEventListener('click', function() {
    cancelAnimationFrame(animationId);
});
   
   

function drawBall(ctx, ball) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.fillStyle = ctx.createLinearGradient(45, 0, canvas.width, canvas.height);
    ctx.fillStyle.addColorStop(0, "#0F110C");
    ctx.fillStyle.addColorStop(0.25, "#0F110C");
    ctx.fillStyle.addColorStop(0.5, "#656363");
    ctx.fillStyle.addColorStop(0.57, "#dce288");
    ctx.fillStyle.addColorStop(0.65, "#4bcf2a");
    ctx.fillStyle.addColorStop(0.75, "#850c74");
    ctx.fillStyle.addColorStop(0.8, "#75d6b1");
    ctx.fillStyle.addColorStop(0.85, "#29d9f0");
    ctx.fillStyle.addColorStop(1, "#9328b4");
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.fill();
    
}

function updateBall(ball) {
    if (ball.radius + ball.x > innerWidth || ball.x - ball.radius < 0) {
        ball.vx = -ball.vx;
    }
    if (ball.y + ball.radius > innerHeight || ball.y - ball.radius < 0) {
        ball.vy = -ball.vy;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;
}




drawBall(ctx, ball1);
drawBall(ctx, ball2);
drawBall(ctx, ball3);
drawBall(ctx, ball4);

drawBall(ctx2, ball1);
drawBall(ctx2, ball2);
drawBall(ctx2, ball3);
drawBall(ctx2, ball4);

drawLine(ctx, ball1, ball2, ball3, ball4);



button.addEventListener('click', move);
button1.addEventListener('click', function() {
    cancelAnimationFrame(move);
});