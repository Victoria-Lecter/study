import React, { Component } from "react";

import Header from '../components/Header'
import Footer from '../components/Footer'
import Popup from '../components/Popup'



export default class App extends Component {
	render() {
		return (
			<div>
				<Header popup={this.handlePopup}/>
				{this.props.children}
				<Footer />
				<Popup {...this.state} changePopup={this.handlePopup}/>
			</div>
		);
	}
}