import { drawFood, score } from "./food.js";
import { drawObstacles } from "./obstacle.js";
import { drawSnake } from "./snake.js";

const gameBoard = document.getElementById('game-board')

export function draw() {
    document.getElementById("score").innerHTML = `Score: ${score}`;
    gameBoard.innerHTML = '' // clear game board, so that "previous" pieces of the snake are deleted.
    drawObstacles(gameBoard)
    drawSnake(gameBoard)
    drawFood(gameBoard)
}