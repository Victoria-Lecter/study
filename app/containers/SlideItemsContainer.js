import React, { Component } from 'react';

import SlideItem from '../components/SlideItem'

export default class SlideItemsContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_center">
				
				<SlideItem />
				
			</div>
    );
  }
}
