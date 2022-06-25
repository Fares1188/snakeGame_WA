/**********************************************************************************************/
/******************************************snake.js********************************************/
import { getInputDirection } from "./input.js"
import { equalPositions } from "./grid.js";

let snakeBody = [{x: 11, y: 11}]
export let snakeSpeed = 4 // times per second
let newSegments = 0;


//not complete
export function setGameSpeed(timesPerSecond){
    snakeSpeed = timesPerSecond;
}

// updates the snake length and/or direction
export function updateSnake() {
    addSegments();
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i-- ) {
        snakeBody[i + 1] = { ...snakeBody[i] }// create a new object "duplicate", so we don't have reference problems
    }
    // update snake head
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}
//new
export function clearSnake(){
    snakeBody = [{x: 11, y: 11}];
}
// checks whether the given position in on the snake body.
//
// ignoreHead: when set to true, the head of the snake is ignored.
// this is used in the function snakeIntersection bcs otherwise this method will always return true when applied on snake head.
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false
        return equalPositions(segment, position)
    })
}
// returns whether the snake head has intersected its body.
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}
// helper function: returns the snake head
export function getSnakeHead() {
    return snakeBody[0]
}
// expands the snake by the amount given.
export function expandSnake(amount){
    newSegments += amount
}
// helper function:
function addSegments() {// add the new parts to the snake after "eating" them
    for (let i=0; i < newSegments; i++){
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // append new element at the end of the snake.

    }
    newSegments = 0 // so that the elements aren't added uninterruptedly (constantly)
}
//View functions: draw the snake divs on the grid.
export function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake') // set Element's class to "snake"
        gameBoard.appendChild(snakeElement)

    })
}