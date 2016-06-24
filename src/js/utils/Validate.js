//Validates the chess piece moves
export const validate = (start, destination, piece) => {
	switch (piece.type) {
		case 'pawn':
			console.log("attempting to move pawn")
			let goodMoves = []

			if (piece.color === 'black') {
			  goodMoves.push([start.col+1, start.row])

				if (!piece.hasMoved) {
					goodMoves.push([start.col+2, start.row])
				}
			}
			else {
				goodMoves.push([start.col-1, start.row])

				if (!piece.hasMoved) {
			  		goodMoves.push([start.col-2, start.row])
				}
			}

	      for (let i in goodMoves) {
	      	console.log(goodMoves[i][0], goodMoves[i][1])
	      	console.log(destination.col, destination.row)
	      	if (destination.col === goodMoves[i][0] && destination.row === goodMoves[i][1]) {
	      		return true;
	      	}
	      }
	      return false;

	    case 'rook':
	      console.log("attempting to move rook")

	      if (start.row === destination.row) {
	      	return true;
	      }
	      else if (start.col === destination.col) {
	      	return true;
	      }

	      return false;
	    case 'bishop':
	      console.log("attempting to move bishop")

	      if (Math.abs(start.col - destination.col) === Math.abs(start.row - destination.row)) {
	      	return true;
	      }


	      return false;
	    case 'knight':
	      console.log("attempting to move knight")
	      console.log(start.row - destination.row)
	      if (Math.abs(start.row - destination.row) === 2) {
	      	if (Math.abs(start.col - destination.col) === 1) {
	      		return true;
	      	}
	      	else {
	      		return false;
	      	}
	      }
	      else if (Math.abs(start.col - destination.col) === 2) {
	      	if (Math.abs(start.row - destination.row) === 1) {
	      		return true;
	      	}
	      	else {
	      		return false;
	      	}
	      }

	      return false;
	    case 'king':
	      console.log("attempting to move king")
	      console.log(start.col - destination.col)
	      if (Math.abs(start.col - destination.col) === 1 && Math.abs(start.row - destination.row) == 1) {
	      	return true;
	      }
	      else if (start.row === destination.row && Math.abs(start.col - destination.col) === 1) {
	      	return true;
	      }
	      else if (start.col === destination.col && Math.abs(start.row - destination.row) === 1) {
	      	return true;
	      }


	      return false;
	    case 'queen':
	      console.log("attempting to move queen")
	      if (Math.abs(start.col - destination.col) === Math.abs(start.row - destination.row)) {
	      	return true;
	      }
	      else if (start.row === destination.row) {
	      	return true;
	      }
	      else if (start.col === destination.col) {
	      	return true;
	      }

	      return false;      	      	      
	    default:
	      return false;
	  }
}
