import React, { Component } from "react";
import axios from 'axios'
import {Route, Redirect} from 'react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Popup from '../components/Popup'


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      numPopup: 0,
      login: false,
      password: '',
      error: 0,
      id: '',
      name: '',
      surname: '',
      day: '',
      month: false,
      year: '',
      sex: '',
      country: false,
      city: '',
      email: '',
      phone: '',
      password: '',
      password_again: '',
      admin: ''
    }

    this.handlePopup = this.handlePopup.bind(this);
    this.login = this.login.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.constrolLogin = this.constrolLogin.bind(this);
    this.logOut = this.logOut.bind(this);

    this.changeInfoPopup = this.changeInfoPopup.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
    
  }

  componentDidMount(){
    var state = sessionStorage.getItem('app_state')
    state = JSON.parse(state)
    console.log(state)
    this.setState(state);
    console.log(this.state)
  }

  selectChange(name, val) {
    this.setState({ [name]: val.value })
  }


  changeInfoPopup(e){
    this.setState({[e.target.name]: e.target.value})  
  }

  changeRadio(val){
    this.setState({ sex: val })
  }

  login(e) {
    e.preventDefault();
    axios.post('/login', {
      data: this.state
    }).then(res => {
        this.constrolLogin(res.data);
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

  logOut() {
    sessionStorage.clear();
  }

  constrolLogin(data){
    if(data) {
      this.setState({login: true});
      this.setState(data)
      sessionStorage.clear();
      sessionStorage.setItem('app_state', JSON.stringify(this.state))
      window.location.href = '/scz_54940891';
    }else{
      this.setState({
        login: false,
        error: 1
      });
    }
  }

	render() {
		return (
			<div>
				<Header 
          {...this.state}
          popup={this.handlePopup}
          changeLogin={this.handleUser}
          submitLogin={this.login}
          logout={this.logOut}/>
				{this.props.children}
				<Footer />
				<Popup 
          {...this.state} 
          changePopup={this.handlePopup}
          selectChange={this.selectChange}
          changeInfoPopup={this.changeInfoPopup}
          changeRadio={this.changeRadio}/>
			</div>
		);
	}
}