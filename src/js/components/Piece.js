import React from 'react';
import PieceList from '../utils/PieceList'

let Piece = ({color, type}) => {

	return (
		<div className = { 'Piece ' + color } onClick = { select() } >
			{ PieceList[type] }
		</div>
	);
}

let select = () => {

}


Piece.propTypes = {
	color: React.PropTypes.oneOf(['white', 'black']).isRequired,
	type: React.PropTypes.string.isRequired
	// isMoveable: React.PropTypes.bool.isRequired,
	// validMoves: React.PropTypes.instanceOf(Set).isRequired
}

export default Piece;