import React from 'react';

import AddUni from './admin/AddUni'
import AddNews from './admin/AddNews'

export default class AddContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let add;
  	if(this.props.params.add == 'university') add = <AddUni />
  	else if(this.props.params.add == 'news') add = <AddNews />

    return (
      React.cloneElement(add)
    );
  }
}
