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
      login: false,
      id: '',
      password: '',
      error: 0
    }

    this.handlePopup = this.handlePopup.bind(this);
    this.login = this.login.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.constrolLogin = this.constrolLogin.bind(this);
    
  }

  login() {
    axios.post('/login', {
      data: this.state
    }).then(data => {
        this.constrolLogin(data);
      }).catch(err => {
        console.log(err)
      })
  }

  handlePopup(popup) {
    this.setState({ numPopup: popup })
  }

  handleUser(e){
    this.setState({[e.target.name]: e.target.value})
  }

  constrolLogin(data){
    if(data) {
      this.setState({login: true});
      console.log(data.data)
      console.log('Login done!');
    }else{
      this.setState({error: 1})
      console.log('Login faild');
    }
  }

	render() {
		return (
			<div>
				<Header 
          popup={this.handlePopup}
          changeLogin={this.handleUser}
          submitLogin={this.login}/>
				{this.props.children}
				<Footer />
				<Popup {...this.state} changePopup={this.handlePopup}/>
			</div>
		);
	}
}