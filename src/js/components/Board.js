import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Piece from './Piece'
import Square from './Square'

export default React.createClass({
	getInitialState () {
		let state = this.props.store.getState();

		return state;

	},

	componentDidMount() {
		const { store } = this.props;

		this.unsubscribe = store.subscribe(() => {
				const state = store.getState()
				this.setState(state)
			}
		);

	},

	componentWillUnmount() {
		this.unsubscribe();
	},

	propTypes: {
		handleSquareSelect: React.PropTypes.func.isRequired
	},
	mixins: [PureRenderMixin],


	createSquare(x, y) {
		let black = (x+y) % 2 === 1;
		let selected = false;
		let piece = this.state.positions[x][y];

		if ([x,y].toString() === this.state.selectedCoord.toString()) {
			selected = true;
		}
		
		return (
			<div className='SquareWrap' key={[x,y]} onClick={() => this.props.handleSquareSelect(x, y)}>
				<Square isBlack={black} selected={selected} >
					{ (piece) ?
					<Piece color={ piece.color } type={ piece.type }/> : null }
				</Square> 
			</div>
		); //
	},

	buildRow(i) {
		let row = []
		for (let j = 0; j < this.state.positions[i].length; j++) {
			row.push(this.createSquare(i, j))
		}
		return row;
	},

	render() {
		let grid = [];

		for (let i = 0; i < this.state.positions.length; i++) {
			grid.push(
				<div className='row' key={i}>
					{ this.buildRow(i) }
				</div>)
		}

		return (
			<div className='ChessBoard'>
				{ grid }
			</div>
		)
	}
	
})

