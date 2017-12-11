import React, { Component } from 'react';
import LeftSidebar from '../components/LeftSidebar';
import Children from './Children';


export default class TwoCols extends Component {
	render() {

		return[
			<LeftSidebar key="A" />,
			<Children key="B" children={this.props.children}/>
		]
	}
}