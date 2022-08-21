// if object is at this cooridinate and this cooridinate then count as a score 

const hoop = movingHoop(150, 350)

// hoop.walkEast(4000, () => {
//     npc.walkWest(4000)                                                   
// })

// newImage('assets/hoop.png', 500,350)
// newImage('assets/ball.png', 550,10)

// const hoop = movingHoop(600, 500)

async function moveHoop(){
    await hoop.walkEast(3000)
    await hoop.walkWest(3000)
    
}
moveHoop()

// document.querySelector("body").style.color = "Red"