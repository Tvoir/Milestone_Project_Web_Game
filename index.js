// if object is at this cooridinate and this cooridinate then count as a score 

const hoop = movingHoop(150, 350)

async function moveHoop(){
    while(true){
        await hoop.walkEast(3000)
            await hoop.walkWest(3000)
            
}}
moveHoop()


