import React from 'react';

export default class ControlsTop extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top_button_line_wrap clearfix">
				<div className="top_button_count_view">
					<button>10</button>
					<button>50</button>
					<button>100</button>
				</div>
				<button className="add_some">Добавить новость</button>
				<input type="text" placeholder="Поиск студента" />
			</div>
    );
  }
}
