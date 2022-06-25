import { drawFood, score } from "./food.js";
import { drawObstacles } from "./obstacle.js";
import { drawSnake } from "./snake.js";
import { level } from "./controller.js";
import {storage} from "./game.js";

const gameBoard = document.getElementById('game-board')

export function draw() {
    document.getElementById("score").innerHTML = `<strong>Score: ${score}</strong>`;
    document.getElementById("level").innerHTML = `<strong>Level: ${level}</strong>`
    document.getElementById("high_level").innerHTML = `<strong>High Score: ${storage.getItem("High Score") ?? "Level 1"}</strong>`;
    gameBoard.innerHTML = '' // clear game board, so that "previous" pieces of the snake are deleted.
    drawObstacles(gameBoard)
    drawSnake(gameBoard)
    drawFood(gameBoard)
}