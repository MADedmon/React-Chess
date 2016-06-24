import '../css/index.scss';

import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import Board from './components/Board'
import game from './reducers/game';
import { movePiece, selectPiece, deselectPiece } from './actions';
import { connect } from 'react-redux';

let store = createStore(game);

let unsubscribe = store.subscribe(() => {
		console.log("store updated", store.getState())
	}
)

let handleSquareSelect = (x, y) => {
	console.log("click")
	console.log(store.getState().selectedCoord)

	if(store.getState().selectedCoord.length > 0) {
		let pieceCoord = store.getState().selectedCoord;
		let selectedPiece = store.getState().positions[pieceCoord[0]][pieceCoord[1]]

		if ([x,y].toString() == store.getState().selectedCoord.toString()) {
			store.dispatch(deselectPiece());
		} //Same initial position is already selected
		else { 
			store.dispatch(deselectPiece());
			store.dispatch(movePiece(x, y, pieceCoord, selectedPiece));
		} //Initial position and destination position are selected; Piece gets moved
	}
	else {
		if (store.getState().positions[x][y]) {
			store.dispatch(selectPiece(x,y));
			//No initial position selected; clicked square set to initial if there is a piece on it.
		}
	}

}

ReactDOM.render(
	<div className='Body'>
		<Board 
			store = { store }
			handleSquareSelect={ handleSquareSelect } 
		/>
	</div>,
	document.getElementById('app')
)
