export class Board {
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