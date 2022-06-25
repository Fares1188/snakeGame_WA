/**********************************************************************************************/
/******************************************game.js********************************************/
import { setGameSpeed, snakeSpeed } from './snake.js'
import { createObstacles} from "./obstacle.js";
import {update, gameOver, setMaxScore, maxScore, level, getJson, incrementLevel, clearScreen} from "./controller.js";
import {draw} from "./view.js";
import { score } from "./food.js";

//const homeDir = '/wa/index.html';


getJson('levels.json')
    .then(res => {
        createObstacles(res['level1']['obstacles']);
        setGameSpeed(res['level1']['snakeSpeed']);
        console.log(snakeSpeed);
        setMaxScore(res['level1']['maxScore']);
        console.log(maxScore);
    })
    .catch(err => console.error(err.message));


// endless loop function
let lastRenderTime = 0

async function main(currTime) {
    if (gameOver) {
        if (confirm('You lost. Press ok to restart.')) {
            window.location = '/wa1/index.html'
        }
        return;
    }
    else if (maxScore === score) {
        if(level === 8){
            if(confirm("you win! there are no more available levels. click ok to restart.")){
                window.location = '/wa1/index.html';
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
        console.log("level is" + level);
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