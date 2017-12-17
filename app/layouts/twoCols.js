import React, { Component } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Children from './children';


export default class TwoCols extends Component {
	render() {
		var childrenWithProps = React.cloneElement(this.props.children, {appState: this.props.appState});
		return[
			<LeftSidebar key="A" />,
			<Children key="B" children={childrenWithProps} />
		]
	}
}