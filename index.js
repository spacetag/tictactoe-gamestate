module.exports = {
	getNewGame: getNewGame,
	claimSquare: claimSquare,
	whoseTurnIsIt: whoseTurnIsIt,
	whoWon: whoWon
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
	var testResults = [
		checkRowForWinner(gameState, 0),
		checkRowForWinner(gameState, 1),
		checkRowForWinner(gameState, 2),
		checkColumnForWinner(gameState, 0),
		checkColumnForWinner(gameState, 1),
		checkColumnForWinner(gameState, 2)
	]

	return testResults.reduce(function(winner, currentResult) {
		return winner || currentResult
	})
}

function allTheSame(tokenSoFar, currentSquare) {
	return tokenSoFar === currentSquare ? tokenSoFar : null
}

function checkRowForWinner(gameState, row)
{
	var startOfRow = row * 3
	return gameState.slice(startOfRow, startOfRow + 3).reduce(allTheSame)
}

function checkColumnForWinner(gameState, columnNumber)
{
	var tokensInColumn = gameState.filter(function(token, index) {
		return index % 3 === columnNumber
	})
	return tokensInColumn.reduce(allTheSame);
}
