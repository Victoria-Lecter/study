import React, { Component } from 'react';

import Slide from '../components/home/Slide'
import Section2 from '../components/home/Section2'
import Section3 from '../components/home/Section3'
import Section4 from '../components/home/Section4'
import ContactsHome from '../components/home/ContactsHome'
import MapHome from '../components/home/MapHome'

export default class Home extends Component {

  constructor(props) {
    super(props);    
  }


  render() {
    return (
      <div className="home">
        <Slide />
        <Section2 />
        <Section3 />
        <Section4 />
        <ContactsHome />
        <MapHome />
      </div>
    )
  }
}