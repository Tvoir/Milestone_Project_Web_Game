function movingHoop(x, y) {
    let element = newImage('assets/hoop.png')
    element.style.zIndex = -1;
    
    let direction = null;

    function moveHoop() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'east') {
            x += 1
        }
        element.style.left = x + 'px'
        element.style.right = x + 'px'
        
        // console.log(element.style.left, "left position")
    }

    setInterval(moveHoop, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = `./assets/hoop.png`
        await sleep(time);
        
    }
    

    async function walkWest(time) {
        direction = 'west'
        element.src = `./assets/hoop.png`
        await sleep(time);
    }

    
    return {
        element: element,
        walkWest: walkWest,
        walkEast: walkEast,
    }
}

function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve,time)
    })
}