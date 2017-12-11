import React, { Component } from 'react';
import { Route, Router, browserHistory } from 'react-router';

class Checkboxes extends Component{
	render() {
		return (
			<div className="checkbox_wrap">
				<input type="checkbox" id="type_uni_1" />
				<label htmlFor="type_uni_1"></label>
				<label htmlFor="type_uni_1">Только государственные</label>
				<input type="checkbox" id="type_uni_2" />
				<label htmlFor="type_uni_2"></label>
				<label htmlFor="type_uni_2">Только частные</label>
			</div>
		)
	}
}

export default class Controls extends Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let checkboxes;
  	if(this.props.url.type == 'university') checkboxes = <Checkboxes />;
    return (
	     <div className="top_button_line_wrap clearfix">
					<div className="button_top_city">
						<button className="active_but_city">Брно</button>
						<button>Прага</button>
						<button>Другие</button>

						{checkboxes}

					</div>
				</div>
    );
  }
}
