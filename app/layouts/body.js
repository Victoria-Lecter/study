import React, { Component } from 'react';

import Children from './children';

export default class Body extends Component {

	render() {
		var childrenWithProps = React.cloneElement(this.props.children, {appState: this.props.appState});

		return(
			<section className="main">{childrenWithProps}</section>
		)
	}
}