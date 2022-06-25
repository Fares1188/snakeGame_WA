/**********************************************************************************************/
/******************************************input.js********************************************/

let inputDirection = {x: 0, y: 0}
// save the previous input direction to decide the next direction.
let lastInputDirection = {x: 0, y: 0}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break // if the snake was already moving up or down, ignore this
            inputDirection = {x: 0, y: -1} //move up
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break
    }
})

// returns the input direction depending on user input.
export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection
}