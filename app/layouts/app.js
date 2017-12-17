import React, { Component } from "react";
import axios from 'axios'
import {Route, Redirect} from 'react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Popup from '../components/Popup'
import { Loader } from '../components/Loader';
// import Children from './children'

const stateDefaults = {
  loading: true,
  isLoggingIn: false, // waiting for login to happen
  isLoggingInError: false,

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
  password_again: '',
  admin: ''
};

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = Object.assign(stateDefaults);

    this.handlePopup = this.handlePopup.bind(this);
    this.login = this.login.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.constrolLogin = this.constrolLogin.bind(this);
    this.logOut = this.logOut.bind(this);

    this.changeInfoPopup = this.changeInfoPopup.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.changeRadio = this.changeRadio.bind(this);

  }

  componentDidMount() {
    const state = JSON.parse(sessionStorage.getItem('app_state'));

    this.setState(Object.assign({}, state, {
      loading: false
    }));
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

    this.setState({ isLoggingIn: true });

    axios.post('/login', {
      data: this.state
    })
      .then(res => {
        this.setState({ isLoggingIn: false });
        this.constrolLogin(res.data);
      })
      .catch(err => {
        this.setState({
          isLoggingIn: false,
          isLoggingInError: true,
        });
        console.log(err)
      });
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
      window.location.href = this.state.id;
    }else{
      this.setState({
        login: false,
        error: 1
      });
    }
  }



	render() {

    if (this.state.loading) {
      return <Loader />;
    }
    else if (this.state.isLoggingIn) {
      // return <Spinner />
      return "Singing in... Please wait";
    }
    else if (this.state.isLoggingInError) {
      // on error...
      return "You've messed up";
    }

    let childrenWithProps = React.cloneElement(this.props.children, {appState: this.state});
		return (
			<div>
				<Header
          {...this.state}
          popup={this.handlePopup}
          changeLogin={this.handleUser}
          submitLogin={this.login}
          logout={this.logOut}/>

				{childrenWithProps}

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
