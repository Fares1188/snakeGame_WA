/**********************************************************************************************/
/******************************************grid.js********************************************/
const GRID_SIZE = 21
// returns a random position on the grid.
export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1, // "+1", so that we get a number between 1 and 21
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}
// checks if position is outside the grid limits.
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}
// creates a new position with the given parameter x, y.
export function createPosition(x, y){
    return {
        x: x,
        y: y
    }
}
// helper function: checks whether two positions are equal.
export function equalPositions(position1, position2){
    return (position1.x === position2.x && position1.y === position2.y)
}