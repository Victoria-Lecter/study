import React, { Component } from 'react';

import InfoFamily from './quest/InfoFamily'
import Contacts from './quest/Contacts'
import Education from './quest/Education'
import PersonalInfo from './quest/PersonalInfo'
import Arrival from './quest/Arrival'
import Passport from './quest/Passport'


export default class Quest extends Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let quest
		if (this.props.params.quest == 'info-family') quest = <InfoFamily />
		else if (this.props.params.quest == 'contacts') quest = <Contacts />
		else if (this.props.params.quest == 'education') quest = <Education />
		else if (this.props.params.quest == 'personal-info') quest = <PersonalInfo />
		else if (this.props.params.quest == 'passport') quest = <Passport />
		else if (this.props.params.quest == 'arrival') quest = <Arrival />

    return (
      React.cloneElement(quest)
    );
  }
}
