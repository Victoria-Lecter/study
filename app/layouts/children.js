import React, { Component } from 'react';

export default class Children extends Component{
	render() {
		return React.cloneElement(this.props.children, this.props)
	}
}