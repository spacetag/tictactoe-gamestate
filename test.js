var test = require('tape')

var tictactoe = require('./index.js')

test('fresh game test', function (t) {
	var newGameBoard = tictactoe.getNewGame()

	t.equal(newGameBoard.length, 9, 'game board has nine elements')

	var everyValueIsNull = newGameBoard.every(function (square) {
		return square === null
	})
	t.ok(everyValueIsNull, 'game board squares are null')

	t.end()
})

test('test for square claiming', function (t) {
	var newGameBoard = tictactoe.getNewGame()

	var secondGameBoard = tictactoe.claimSquare(newGameBoard, 'X', { x: 0, y: 0 })

	t.equal(secondGameBoard.length, 9, 'game board has nine elements')
	
	t.equal(secondGameBoard[0], 'X')

	var everyOtherValueIsNull = secondGameBoard.slice(1).every(function (square) {
		return square === null
	})
	t.ok(everyOtherValueIsNull, 'every other game board square is null')

	var thirdGameBoard = tictactoe.claimSquare(secondGameBoard, 'O', { x: 2, y: 1 })
	t.equal(thirdGameBoard[0], 'X')
	t.equal(thirdGameBoard[7], 'O')

	t.end()
})

test('test for seeing whose turn it is', function (t) {
	var newGameBoard = tictactoe.getNewGame()

	var whoseTurnItIsAtFirst = tictactoe.whoseTurnIsIt(newGameBoard)
	t.equal(whoseTurnItIsAtFirst, 'X')

	var secondGameBoard = tictactoe.claimSquare(newGameBoard, 'X', { x: 0, y: 0 })

	var whoseTurnItIs = tictactoe.whoseTurnIsIt(secondGameBoard)

	t.equal(whoseTurnItIs, 'O')

	t.end()
})

// test('test for checking winner', function(t) {

// })