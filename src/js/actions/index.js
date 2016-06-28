/* Types */
export const SELECT_PIECE = 'SELECT_PIECE';
export const MOVE_PIECE = 'MOVE_PIECE';
export const DESELECT_PIECE = 'DESELECT_PIECE';

/* Action Creators */
export const movePiece = (newX, newY, startCoord, piece) => {
	let p = {};
	if (startCoord) {
		p = {
			new: {
				x: newX,
				y: newY
			},
			old: {
				x: startCoord[0],
				y: startCoord[1]
			},
			piece: piece
		};
	}

	return {
		type: MOVE_PIECE,
		payload: p
	};
};

export const selectPiece = (x, y) => {
	let p = {
		coords: {
			x: x,
			y: y
		}
	};

	return {
		type: SELECT_PIECE,
		payload: p
	};
};

export const deselectPiece = () => {
	return {
		type: DESELECT_PIECE,
		payload: {}
	};
};
