import React from 'react';
import { Link } from 'react-router';

export default class NavLink extends React.Component {
	render() {

		var isActive = this.props.location.pathname === this.props.to;
		var className = isActive ? 'active_button' : '';

		return(
			<Link className={className} {...this.props}>
				{this.props.children}
			</Link>
		);
	}
}
