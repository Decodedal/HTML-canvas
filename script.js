const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d');
// console.log(ctx);
const particlesArr = []

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// window.addEventListener('resize',()=>{
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// })

const mouse ={
    x: undefined,
    y: undefined,
}
canvas.addEventListener('click',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
  
})

canvas.addEventListener('mousemove',(e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
    // drawCircle();
})

// function drawCircle(){
    // ctx.fillStyle = 'green'
    // ctx.strokeStyle = 'red'
    // ctx.lineWidth = 1;
    // ctx.fillRect(150, 50, 500, 400)
    // ctx.beginPath();
    // ctx.arc(mouse.x,mouse.y,50,0  ,Math.PI * 2);
    // ctx.fill();
    // ctx.stroke();
//}
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate)
}
animate();

class Particle{
    constructor(){
        // this.x = mouse.x;
        // this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() *3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
     draw(){
        ctx.fillStyle = 'green'
        ctx.beginPath();
        ctx.arc(this.x,this.y,50,0  ,Math.PI * 2);
        ctx.fill();
     }
}

circles()
console.log(particlesArr)

function handleParticles(){
    for(let i = 0; i< particlesArr.length; i++){
        particlesArr[i].update();
        particlesArr[i].draw();
    }
}

function circles(){
    for(let i = 0; i<100; i++){
     particlesArr.push(new Particle)
    }
}

