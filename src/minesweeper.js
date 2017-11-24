class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
	this._board = Board(numberOfRows, numberOfColumns, numberOfBombs);	
	}

	playMove(rowIndex, columnIndex) {
		this._board.flipTile(rowIndex, columnIndex);
		if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
			console.log('Game Over');
			this._board.print();
		}if (this._board.playerBoard[rowIndex][columnIndex] === ' '){
			console.log('You Won');
		}else{
			console.log('Current Board:');
			this._board.print();
		}
	}
}



class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._numberOfBombs = numberOfBombs;
		this._numberofRows = numberOfRows*numberOfColumns;

		
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);

	}

		get playerBoard(){
			return this.playerBoard;
	}

	flipTile = (rowIndex, columnIndex) =>{
	if(playerBoard[rowIndex][columnIndex] !== ' '){
		console.log('This tile has already been flipped!');
		return;
	}else if(bombBoard[rowIndex][columnIndex] == 'B'){
		//FlipTile = 'B';
		this._playerBoard[rowIndex][columnIndex] = 'B';
	}else{
		this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
	}
	this._numberOfTiles--;
}

	getNumberOfNeighborBombs = funcion(rowIndex, columnIndex) {
	this._neighborOffsets = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1]
							];

	this._numberOfRows = bombBoard.length;
	this._numberOfColumns = bombBoard[0].length;
	this._numberOfBombs = 0;

	neighborOffsets.forEach(offset =>{
		this._neighborRowIndex = rowIndex + offset[0];
		this._neighborColumnIndex = columnIndex + offset[1];
		if(neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns){
			if(bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
				this._numberOfBombs++;
			}
		}
	});
	return this._numberOfBombs;
};

	static generateBombBoard = function(numberOfRows, numberOfColumns, numberofBombs) {
	let board = [];
	for(let i = 0; i < numberOfRows; i++){
		let row = [];
		for(let j = 0; j < numberOfColumns; j++){
			row.push(null);
	}
		board.push(row);
		}

	let numberofBombsPlaced = 0;
	while(numberofBombsPlaced < numberofBombs){
		let randomRowIndex = Math.floor(Math.random()*numberOfRows);
		let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
		if(board[randomRowIndex][randomColumnIndex] !== 'B'){
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberofBombsPlaced++;
		}

		//learn about control flow to avoid that bombs are placed on already existing ones
	}
	return board;
};

	hasSafeTiles() {
		(this._numberOfTiles !== this._numberOfBombs){
			return this;
		}
	}


}




let board = [];

for(let i = 0; i < numberOfRows; i++){
	let row = [];
	for(let j = 0; j < numberOfColumns; j++){
		row.push(' ');
	}
	board.push(row);
	}
	return board;
};


printBoard = print() {
	console.log(this._board.map(row => this._row.join(' | ')).join('\n'));
};

let this._playerBoard = generatePlayerBoard(3,4);
let this._bombBoard = generateBombBoard(3,4,5);


console.log('Player Board: ');
printBoard(this._playerBoard);
console.log('Bomb Board: ');
printBoard(this._bombBoard);

flipTile(playerBoard, bombBoard, 0, 0); 
console.log('Updated Player Board :');
printBoard(playerBoard);
this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);

const g = new Game(3, 3, 3);
g.playMove(0,0);