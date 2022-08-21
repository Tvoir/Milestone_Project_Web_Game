let ball = document.querySelector('.ball');
let shootLength = 400;
let ballPosition = 0;

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
                        // if (ball.style.top >= rim.style.bottom || ball.style.top <= rim.style.top) 
                        // detect collision js in google
                    ball.style.bottom = `${ballPosition}px`
                ballPosition += 10}
                else {clearInterval(throwInterval)
                
                let fallInterval = setInterval(() => {
                    if (ballPosition > 0) {ballPosition -= 10
                        ball.style.bottom = `${ballPosition}px`}
                        else {clearInterval(fallInterval)}
                }, 40)}
            }, 40);
                // ball.style.bottom = parseInt(ball.style.bottom) + shootLength + 'px';
                break;
            }
        })

        //attach a rim div to the basketball hoop using position absolute on css
        //every frame a basketball moves run a collision detection that calculates 

        //make a function called checkForCollision, call it in the throwInterval