import React from 'react';
import PieceList from '../utils/PieceList';

let Piece = ({color, type}) => {
	return (
		<div className = { 'Piece ' + color } >
		{ PieceList[type] }
		</div>
		);
	};

	Piece.propTypes = {
		color: React.PropTypes.oneOf(['white', 'black']).isRequired,
		type: React.PropTypes.string.isRequired
		// isMoveable: React.PropTypes.bool.isRequired,
		// validMoves: React.PropTypes.instanceOf(Set).isRequired
	};

	export default Piece;
