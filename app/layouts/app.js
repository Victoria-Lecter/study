import React, { Component } from "react";
import axios from 'axios'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Popup from '../components/Popup'


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numPopup: 0,
      login: false
    }

    this.handlePopup = this.handlePopup.bind(this);
    
  }

  componentDidMount(){
  	axios.post('/login')
  		.then(data => {
  			console.log(data)
  		}).catch(err => {
  			console.error(err);
  		})
  }

  handlePopup(popup) {
    this.setState({ numPopup: popup })
  }

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