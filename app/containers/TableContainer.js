import React from 'react';

import Students from './admin/Students'
import News from './admin/News'
import Calls from './admin/Calls'

export default class TableContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let table;
  	if(this.props.params.table == 'students') table = <Students />
  	else if(this.props.params.table == 'news') table = <News />
  	else if(this.props.params.table == 'calls') table = <Calls />

    return (
      React.cloneElement(table)
    );
  }
}
