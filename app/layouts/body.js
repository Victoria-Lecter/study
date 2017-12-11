import React, { Component } from 'react';

export default class Body extends Component {
	render() {
		return(
			<section className="main">{this.props.children}</section>
		)
	}
}