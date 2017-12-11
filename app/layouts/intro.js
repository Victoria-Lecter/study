import React, { Component } from 'react';

export default class IntroLayout extends Component {
	render() {
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}