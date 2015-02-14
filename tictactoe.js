function nextTurn(whoseTurn)
{
	if (whoseTurn === "X") return "O";
	if (whoseTurn === "O") return "X";
}

function addSquareOnBoard(board, whoseTurn, selectedSquare)
{
	// Get just the number for the square
	selectedSquare = selectedSquare.substr(6, 1);
	// if (board[selectedSquare] !== "") Why is this wrong?
	board[selectedSquare] = whoseTurn;
	return board;
}

function checkWinner(board)
{
	var winner = "None";

	// Check cat game
	/* var occupiedSquares = 0;
	for(var i = 1; i <= 9; i++)
	{
		if(board[i] !== "") {
			occupiedSquares++;
		}
	}
	if (occupiedSquares = 9) {
		winner = "Cat";
	} */

	// Check X's as winner
	if(board[1] === "X" && board[2] === "X" && board[3] === "X") winner = "X"; // Row 1
	if(board[4] === "X" && board[5] === "X" && board[6] === "X") winner = "X"; // Row 2
	if(board[7] === "X" && board[8] === "X" && board[9] === "X") winner = "X"; // Row 3
	if(board[1] === "X" && board[4] === "X" && board[7] === "X") winner = "X"; // Col 1
	if(board[2] === "X" && board[5] === "X" && board[8] === "X") winner = "X"; // Col 2
	if(board[3] === "X" && board[6] === "X" && board[9] === "X") winner = "X"; // Col 3
	if(board[1] === "X" && board[5] === "X" && board[9] === "X") winner = "X"; // Diag 1
	if(board[3] === "X" && board[5] === "X" && board[7] === "X") winner = "X"; // Diag 2
	
	// Check O's as winner
	if(board[1] === "O" && board[2] === "O" && board[3] === "O") winner = "O"; // Row 1
	if(board[4] === "O" && board[5] === "O" && board[6] === "O") winner = "O"; // Row 2
	if(board[7] === "O" && board[8] === "O" && board[9] === "O") winner = "O"; // Row 3
	if(board[1] === "O" && board[4] === "O" && board[7] === "O") winner = "O"; // Col 1
	if(board[2] === "O" && board[5] === "O" && board[8] === "O") winner = "O"; // Col 2
	if(board[3] === "O" && board[6] === "O" && board[9] === "O") winner = "O"; // Col 3
	if(board[1] === "O" && board[5] === "O" && board[9] === "O") winner = "O"; // Diag 1
	if(board[3] === "O" && board[5] === "O" && board[7] === "O") winner = "O"; // Diag 2
	return winner;
}