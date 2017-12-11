import React from 'react';

import ControlsTop from '../../components/admin/ControlsTop'

export default class News extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_admin_table">
				<ControlsTop />
				<div className="content_news_admin">
					<table>
						<tbody>
							<tr>
								<td>19.11.2016</td>
								<td>Что такое нострификация?</td>
								<td><i></i><i></i></td>
							</tr>
							<tr>
								<td>19.11.2016</td>
								<td>Что такое нострификация?</td>
								<td><i></i><i></i></td>
							</tr>
							<tr>
								<td>19.11.2016</td>
								<td>Что такое нострификация?</td>
								<td><i></i><i></i></td>
							</tr>
							<tr>
								<td>19.11.2016</td>
								<td>Что такое нострификация?</td>
								<td><i></i><i></i></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
    );
  }
}
