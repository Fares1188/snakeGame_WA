import {outsideGrid} from "./grid.js";
import {clearSnake, getSnakeHead, snakeIntersection, updateSnake} from "./snake.js";
import {clearObstacles, onObstacle} from "./obstacle.js";
import {clearFood, clearScore, updateFoodAndScore} from "./food.js";

export let maxScore = 2;
export let gameOver = false
export let level = 1;

// fetching level file
export const getJson = async (file) =>(await fetch(file)).json()


export function incrementLevel(byValue){
    level+=byValue;
}
export function setMaxScore(points){
    maxScore = points;
}
// runs the update cycle of the game
export function update() {
    updateSnake()
    updateFoodAndScore()
    checkDeath()
}
// checks whether the snake has died.
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() || onObstacle(getSnakeHead())
}

export function clearScreen(){
    clearObstacles();
    clearFood();
    clearSnake();
    clearScore();
}


/*function loadLevel(lev){
    switch (lev){
        case 1:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level1']['obstacles']);
                    setGameSpeed(res['level1']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level1']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 2:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level2']['obstacles']);
                    setGameSpeed(res['level2']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level2']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 3:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level3']['obstacles']);
                    setGameSpeed(res['level3']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level3']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 4:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level4']['obstacles']);
                    setGameSpeed(res['level4']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level4']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 5:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level5']['obstacles']);
                    setGameSpeed(res['level5']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level5']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 6:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level6']['obstacles']);
                    setGameSpeed(res['level6']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level6']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 7:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level7']['obstacles']);
                    setGameSpeed(res['level7']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level7']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
        case 8:
            getJson('levels.json')
                .then(res => {
                    createObstacles(res['level8']['obstacles']);
                    setGameSpeed(res['level8']['snakeSpeed']);
                    console.log(snakeSpeed);
                    setMaxScore(res['level8']['maxScore']);
                    console.log(maxScore);
                })
                .catch(err => console.error(err.message));
            break;
    }
}*/