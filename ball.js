let shootLength = 350;
let ballPosition = 0;
let score = 0;
document.querySelector("#score-counter"). textContent = score;

// let dim1 = {x: 5, y: 5, w: 50, h: 50}
// let dim2 = {x:20, y:10, w: 60, h: 40}

// const bBall = attr(dim1);
// const rim = attr(dim2);

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
            
            
            class Basketball{
                constructor(x, y, height, width){
                    this.x = x;
                    this.y = y;
                    // this.radius = 150;
                    this.height = height;
                    this.width = width;
                }
            }
            
            let basketball = new Basketball(5, 5, 50, 50)
            // var rim = document.getElementsByName('movingHoop');
            class rim{
                constructor(x, y, height, width){
                    this.x = 10;
                    this.y = 10;
                    // this.radius = 300;
                    this.height = 40;
                    this.width = 60;
                }
            }
    window.addEventListener('load' , () => {
        ball.style.position = 'absolute';
        ball.style.bottom = 0;
    });
        
        document.addEventListener('keydown', (e) => {
            switch(e.key){
            case 'ArrowUp' :
                let throwInterval = setInterval(() => {
                    let myRim = document.querySelector('#rim')
                    var ball = document.querySelector('.ball');
                if( ballPosition <= shootLength
                    ) { //check for collision here (checks the top position of bball against bottom position of rim/ bottom position of bball to top pos of rim.)
                        //  if (distance < ball.radius + rim.radius)
                        var basketballPosition = parseInt(myRim.style.left)  
                        console.log("my rim", myRim.style.left)
                        if (basketballPosition < 400 && basketballPosition > 250 ){
                            //collsion detected
                            console.log("my basketball", basketballPosition)
                                console.log("collision detected")
                                score++
                                alert('You made it!')
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