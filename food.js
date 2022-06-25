/**********************************************************************************************/
/******************************************food.js********************************************/
import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'
import { onObstacle } from "./obstacle.js";

export let score = 0;
let food = getRandomFoodPosition()
const EXPANSION_RATE = 1 // the snake grows by 1, if it eats food
// update the score and snake length every time the snake passes through food.
export function updateFoodAndScore() {
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE);
        incrementScore();
        food = getRandomFoodPosition();
    }
}
//new
export function clearScore(){
    score = 0;
}
//new
export function clearFood(){
    food = {x: 11, y: 10};
}
// helper function: returns a random food position on the grid.
function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition) || onObstacle(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
// helper function:
function incrementScore(){
    score++;
}

// View functions:
// place the food div on the grid.
export function drawFood(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}