let shootLength = 450;
let ballPosition = 0;
let score = 0;
document.querySelector("#score-counter"). textContent = score;

// let dim1 = {x: 5, y: 5, w: 50, h: 50}
// let dim2 = {x:20, y:10, w: 60, h: 40}

// const bBall = attr(dim1);
// const rim = attr(dim2);
var ball = document.querySelector('.ball');
    function ball(x, y, radius){
        this.x = 500;
        this.y = 500;
        // this.radius = 150;
        this.height = 50;
        this.width = 50;
    }


var rim = document.getElementsByName('movingHoop');
    function rim(x, y, radius){
        this.x = 10;
        this.y = 10;
        // this.radius = 300;
        this.height = 40;
        this.width = 60;
    }

    // ball("EnterFrame", () => {
    //     const dx = ball.x - hoop.x;
    //     const dy = ball.y - hoop.y;
    //     const distance = Math.sqrt(dx * dx + dy * dy);

    //     if (distance < rim.radius + ball.radius) {
    //         // collision detected!
    //         this.color = "green";
    //     } else {
    //         // no collision
    //         this.color = "blue";
    //     }
    // });

    window.addEventListener('load' , () => {
        ball.style.position = 'absolute';
        ball.style.bottom = 0;
    });
        
        document.addEventListener('keyup', (e) => {
            switch(e.key){
            
            case 'ArrowUp' :
                let throwInterval = setInterval(() => {
                if( ballPosition <= shootLength
                    ) { //check for collision here (checks the top position of bball against bottom position of rim/ bottom position of bball to top pos of rim.)
                        //  if (distance < ball.radius + rim.radius)
                        if (ball.x < rim.x + rim.w &&
                            ball.x + ball.w > rim.x &&
                            ball.y < rim.y + rim.h &&
                            ball.h + ball.y > rim.y){
                                //collsion detected
                                console.log("collision detected")
                                score++
                            }
                            else {
                                console.log("You missed!")
                                score = 0
                            }
                        // detect collision js in google
                    ball.style.bottom = `${ballPosition}px`
                ballPosition += 10}
                else {clearInterval(throwInterval)
                
                let fallInterval = setInterval(() => {
                    if (ballPosition > 0) {ballPosition -= 10
                        ball.style.bottom = `${ballPosition}px`}
                        else {clearInterval(fallInterval)}
                }, 20)}
            }, 20);
                // ball.style.bottom = parseInt(ball.style.bottom) + shootLength + 'px';
                break;
            }
        })

       
// function Circle(x, y, radius, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;

//     this.update = function() {
//         this.draw();
//     };
    
//     this.draw = function() {
//         c.beginpath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.fillStyle = this.color;
//         c.fill();
//         c.closePath();
//     };
// }
//         let circle1 = document.querySelector('.circle');
//         function init() {
//             circle1 = new Circle (300, 300, 100, 'black');
//         }
//         let circle2 = document.querySelector('movingHoop');
        //attach a rim div to the basketball hoop using position absolute on css
        //every frame a basketball moves run a collision detection that calculates 

        //make a function called checkForCollision, call it in the throwInterval