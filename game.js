/**********************************************************************************************/
/******************************************game.js********************************************/
import { setGameSpeed, snakeSpeed } from './snake.js'
import { createObstacles} from "./obstacle.js";
import {update, gameOver, setMaxScore, maxScore, level, getJson, incrementLevel, clearScreen} from "./controller.js";
import { draw } from "./view.js";
import { score } from "./food.js";


const homeDir = '/snakeGame_WA';
// browser storage
// the high level concept is made in a way that the browser only saves high score in a specific round.
// once you play again and pass level 1, the storage high score will start counting again from Level 2 and so on.
export const storage = localStorage

// fetch the first level.
getJson('levels.json')
    .then(res => {
        createObstacles(res['level1']['obstacles']);
        setGameSpeed(res['level1']['snakeSpeed']);
        /*console.log(snakeSpeed);//debug*/
        setMaxScore(res['level1']['maxScore']);
        /*console.log(maxScore);//debug*/
    })
    .catch(err => console.error(err.message));



let lastRenderTime = 0
// endless loop function
async function main(currTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = homeDir;
        }
        return;
    }
    else if (maxScore === score) {
        if(level === 8){
            if(confirm("you win! there are no more available levels. click ok to restart.")){
                window.location = homeDir;
            }
            return;
        }
        incrementLevel(1);
        clearScreen();
        getJson('levels.json')
            .then(res => {
                createObstacles(res['level' + `${level}`]['obstacles']);
                setGameSpeed(res['level' + `${level}`]['snakeSpeed']);
                console.log(snakeSpeed);
                setMaxScore(res['level' + `${level}`]['maxScore']);
                console.log(maxScore);
            })
            .catch(err => console.error(err.message));
        storage.removeItem("High Score");
        storage.setItem("High Score", 'Level ' + `${level}`);
        alert("You win, press ok to continue.");
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currTime - lastRenderTime) / 1000 //convert to seconds
    if (secondsSinceLastRender < 1 / snakeSpeed) return // time to move snake is yet to come


    lastRenderTime = currTime

    update();
    draw();
}

// to start the function main the first time
window.requestAnimationFrame(main)
