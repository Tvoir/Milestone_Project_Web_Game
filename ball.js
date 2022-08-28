let shootLength = 650;
let ballPosition = 0;
let score = 0;
let playerScore = document.querySelector("#score-counter")
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.3;
    audio.play();
});


document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            let throwInterval = setInterval(() => {
                let myRim = document.querySelector('#rim')
                var ball = document.querySelector('.ball');
                if (ballPosition <= shootLength
                    ) {
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
                                if ((rimPosition < 800 && rimPosition > 700) || (rimRightPosition > 800 && rimRightPosition < 900)) {
                                    // console.log("my basketball", rimPosition)
                                    // console.log("collision detected")
                                    score++;
                                    playerScore.innerHTML = score;
                                    // alert('You made it!')
                                    drawScore();
                                    ballPosition = 0
                                }else {
                                    // console.log("You missed!")
                                    score = 0;
                                    missedScore();
                                }
                                ballPosition -= 30
                ball.style.bottom = `${ballPosition}px`
            }
            else { clearInterval(fallInterval) }
        }, 15)
    }
}, 15);
break;
}

})
window.addEventListener('load', () => {
    ball.style.position = 'absolute';
    ball.style.bottom = 0;
});

function drawScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`You made it!`, 100, 30);
    
}

function missedScore() {
    ctx.font = "30px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Close...`, 450, 30);
    
}



