import { onSnake } from "./snake.js";
import {randomGridPosition, createPosition, equalPositions} from "./grid.js";

// the obstacles are loaded from a json file.
export let obstacles = []
// for the random case of this class
let numberOfObstacles = 12;
let randomObstacles = [];

// returns an eligible random position on the grid for an obstacle.
function getRandomObstaclePosition() {
    let newObstaclePosition;
    // obstacles are drawn in the logic after the food, so no need to include food in this
    while (newObstaclePosition == null || onSnake(newObstaclePosition) || onObstacle(newObstaclePosition)) {
        newObstaclePosition = randomGridPosition()
    }
    return newObstaclePosition
}
// clears the obstacles array.
export function clearObstacles(){
    obstacles = [];
}

// creates obstacle positions randomly and adds them to an array.
function createRandomObstacles(numberOfObstacles){
    while (numberOfObstacles > 0) {
        let randomObstaclePosition = getRandomObstaclePosition();
        randomObstacles.push(randomObstaclePosition);
        numberOfObstacles--;
    }
}
// create obstacles out of an obstacle array and adds them to the operating array.
export function createObstacles(obstacleArray){
    for(let position of obstacleArray){
        let obstacle = createPosition(position.x, position.y);
        obstacles.push(obstacle);
    }
}

// checks whether the snake has ran through an obstacle. if the second parameter is set to true, this method
// operates on the methods of random generated obstacles.
export function onObstacle(snakeHead, random = false ) {
    if (random){
        return randomObstacles.some((segment) => {
            return equalPositions(segment, snakeHead);
        })
    } else {
        return obstacles.some((segment) => {
            return equalPositions(segment, snakeHead);
        })
    }

}

//View functions:
// draws the obstacle divs on the board. if the second attribute is set to true, the obstacles will be generated randomly.
export function drawObstacles(gameBoard, random= false){
    if(!random){
        obstacles.forEach(obstacle => {
            const obstacleElement = document.createElement('div')
            obstacleElement.style.gridRowStart = obstacle.y
            obstacleElement.style.gridColumnStart = obstacle.x
            obstacleElement.classList.add('obstacle') // set Element's class to "snake"
            gameBoard.appendChild(obstacleElement)
        })
    } else {
        if(randomObstacles.length < numberOfObstacles){
            createRandomObstacles(numberOfObstacles);
        }
        randomObstacles.forEach(obstacle => {
            const obstacleElement = document.createElement('div')
            obstacleElement.style.gridRowStart = obstacle.y
            obstacleElement.style.gridColumnStart = obstacle.x
            obstacleElement.classList.add('obstacle') // set Element's class to "snake"
            gameBoard.appendChild(obstacleElement)
        })
    }
}


