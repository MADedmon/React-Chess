let GameStore = {
	selectedCoord: [],
	positions: [
	[
	{
		type: 'rook',
		color: 'white'
	},
	{
		type: 'knight',
		color: 'white'
	},
	{
		type: 'bishop',
		color: 'white'
	},
	{
		type: 'queen',
		color: 'white'
	},
	{
		type: 'king',
		color: 'white'
	},
	{
		type: 'bishop',
		color: 'white'
	},
	{
		type: 'knight',
		color: 'white'
	},
	{
		type: 'rook',
		color: 'white'
	}
	],
	[
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'white'
	}
	],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null],
	[
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	},
	{
		type: 'pawn',
		hasMoved: false,
		color: 'black'
	}
	],
	[
	{
		type: 'rook',
		color: 'black'
	},
	{
		type: 'knight',
		color: 'black'
	},
	{
		type: 'bishop',
		color: 'black'
	},
	{
		type: 'queen',
		color: 'black'
	},
	{
		type: 'king',
		color: 'black'
	},
	{
		type: 'bishop',
		color: 'black'
	},
	{
		type: 'knight',
		color: 'black'
	},
	{
		type: 'rook',
		color: 'black'
	}
	]

	]
};

export default GameStore;
