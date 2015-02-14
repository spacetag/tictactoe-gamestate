module.exports = {
	getNewGame: getNewGame,
	claimSquare: claimSquare,
	whoseTurnIsIt: whoseTurnIsIt
}

var firstPlayer = 'X'
var secondPlayer = 'O'

function getNewGame()
{
	return [null, null, null, null, null, null, null, null, null]
}

function coordsToIndex(coords)
{
	return coords.x * 3 + coords.y
}

function claimSquare(gameState, token, coords)
{
	var index = coordsToIndex(coords)
	var resultGameState = gameState.slice()
	resultGameState[index] = token
	return resultGameState
}

function whoseTurnIsIt(gameState)
{
	return gameState.reduce(countNonNull, 0) % 2 == 0 ? firstPlayer : secondPlayer
}

function countNonNull(count, currentSquare)
{
	return count + (currentSquare === null ? 0 : 1)
}

function somebodyHasWon(gameState)
{

}

function whoWon(gameState)
{

}