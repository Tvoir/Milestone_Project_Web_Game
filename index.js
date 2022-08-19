// if object is at this cooridinate and this cooridinate then count as a score 

const hoop = movingHoop(50, 300)

// hoop.walkEast(4000, () => {
//     npc.walkWest(4000)                                                   
// })

// newImage('assets/hoop.png', 500,350)
// newImage('assets/ball.png', 550,10)

// const hoop = movingHoop(600, 500)

async function moveHoop(){
    await hoop.walkEast(1200)
    await hoop.walkWest(2700)
    
}
moveHoop()

// document.querySelector("body").style.color = "Red"