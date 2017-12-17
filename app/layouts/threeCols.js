import React, { Component } from 'react';
import Children from './children';
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'


export default class ThreeCols extends Component {
	render() {

		return[

			<LeftSidebar key="C" />,
			<Children key="D" children={this.props.children} />,
			<RightSidebar key="E" params={this.props.params} location={this.props.location}/>

		]
	}
}
