import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
/* eslint-disable no-unused-vars */
import Piece from './Piece';
import Square from './Square';
/* eslint-enable no-unused-vars */

export default React.createClass({
	propTypes: {
		handleSquareSelect: React.PropTypes.func.isRequire
	},

	mixins: [PureRenderMixin],

	getInitialState() {
		let state = this.props.store.getState();

		return state;
	},

	componentDidMount() {
		const {store} = this.props;

		this.unsubscribe = store.subscribe(() => {
			const state = store.getState();
			this.setState(state);
		}
		);
	},

	componentWillUnmount() {
		this.unsubscribe();
	},

	createSquare(x, y) {
		let black = (x + y) % 2 === 1;
		let selected = false;
		let piece = this.state.positions[x][y];

		if ([x, y].toString() === this.state.selectedCoord.toString()) {
			selected = true;
		}

		return (
			<div className="SquareWrap" key={[x, y]} onClick={() => this.props.handleSquareSelect(x, y)}>
			<Square isBlack={black} selected={selected} >
			{ (piece) ?
				<Piece color={ piece.color } type={ piece.type }/> : null }
				</Square>
				</div>
				);
				//
			},

			buildRow(i) {
				let row = [];
				for (let j = 0; j < this.state.positions[i].length; j++) {
					row.push(this.createSquare(i, j));
				}
				return row;
			},

			render() {
				let grid = [];

				for (let i = 0; i < this.state.positions.length; i++) {
					grid.push(
						<div className="row" key={i}>
						{ this.buildRow(i) }
						</div>
						//
						);
					}

					return (
					<div className="ChessBoard">
					{ grid }
					</div>
					);
				}

			});

