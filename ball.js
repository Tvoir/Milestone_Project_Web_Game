let shootLength = 650;
let ballPosition = 0;
let count = 15;
let score = 0;
let playerScore = document.querySelector("#score-counter")
window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.3;
    audio.play();
  });

window.addEventListener('load' , () => {
        ball.style.position = 'absolute';
        ball.style.bottom = 0;
    });
        
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            let throwInterval = setInterval(() => {
                let myRim = document.querySelector('#rim')
                var ball = document.querySelector('.ball');
                if (ballPosition <= shootLength
                ) { //check for collision here (checks the top position of bball against bottom position of rim/ bottom position of bball to top pos of rim.)
                    ball.style.bottom = `${ballPosition}px`
                    ballPosition += 10
                }
                else {
                    clearInterval(throwInterval)

                    let fallInterval = setInterval(() => {
                        if (ballPosition > 0) {
                            var rimPosition = parseInt(myRim.style.left)
                            var rimRightPosition = parseInt(myRim.style.right)
                            console.log("my rim", myRim.style.left)
                            if ((rimPosition < 700 && rimPosition > 600) || (rimRightPosition > 750 && rimRightPosition < 850)) {
                                //collsion detected
                                console.log("my basketball", rimPosition)
                                console.log("collision detected")
                                score ++;
                                playerScore.innerHTML = score;
                                
                                // alert('You made it!')
                                ballPosition = 0
                                // myRim.style.left = "150px"
                            }
                            else {
                                // console.log("You missed!")
                                score = 0;
                            }
                            // detect collision js in google
                            ballPosition -= 30
                            ball.style.bottom = `${ballPosition}px`
                        }
                        else { clearInterval(fallInterval) }
                    }, 15)
                }
            }, 15);
            // ball.style.bottom = parseInt(ball.style.bottom) + shootLength + 'px';
            break;
    }
})


       
//
        //attach a rim div to the basketball hoop using position absolute on css
        //every frame a basketball moves run a collision detection that calculates 

        //make a function called checkForCollision, call it in the throwInterval