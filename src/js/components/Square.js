import React from 'react';

export default React.createClass({

	propTypes: {
		isBlack: React.PropTypes.bool.isRequired,
		selected: React.PropTypes.bool.isRequired
	},

	render() {
		let sqClass = this.props.isBlack ? 'black' : 'white';
		sqClass = this.props.selected ? sqClass + ' selected' : sqClass;

		return (

			<div className={ 'Square ' + sqClass}>
			{ this.props.children }
			</div>
			);
		}
	});

