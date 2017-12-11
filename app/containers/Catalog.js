import React, { Component } from 'react';

import LivingItem from '../components/LivingItem';
import ProgramItem from '../components/ProgramItem';
import UniItem from '../components/UniItem';
import BlogItem from '../components/BlogItem';
import Controls from './ControlsTop';
import AxilaryItem from '../components/AxilaryItem';



export default class Catalog extends Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let item

		if (this.props.params.type == 'programs') item = <ProgramItem />
		else if(this.props.params.type == 'university') item = <UniItem />
		else if(this.props.params.type == 'living') item = <LivingItem />
		else if(this.props.params.type == 'blog') item = <BlogItem />

    return (
      <div className="content_admin_table">
				<div className="kolej_catalog content_program uni_catalog">

					<Controls url={this.props.params}/>
					
					<div className="content_kolej_catalog">

					{item}

					<AxilaryItem />

					</div>
				</div>
			</div>
    );
  }
}
