import React from 'react';

import ControlsTop from '../../components/admin/ControlsTop'

export default class Calls extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_admin_table">
				<ControlsTop />
				<div className="content_calls">
					<table>
						<tbody>
							<tr>
								<td>№ 14204</td>
								<td>Виктор</td>
								<td>+77772042720</td>
								<td>19.11.2016 - 11:28</td>
								<td>Азербайджан</td>
								<td><i></i></td>
							</tr>
							<tr>
								<td>№ 14204</td>
								<td>Виктор</td>
								<td>+77772042720</td>
								<td>19.11.2016 - 11:28</td>
								<td>Азербайджан</td>
								<td><i></i></td>
							</tr>
							<tr>
								<td>№ 14204</td>
								<td>Виктор</td>
								<td>+77772042720</td>
								<td>19.11.2016 - 11:28</td>
								<td>Азербайджан</td>
								<td><i></i></td>
							</tr>
							<tr>
								<td>№ 14204</td>
								<td>Виктор</td>
								<td>+77772042720</td>
								<td>19.11.2016 - 11:28</td>
								<td>Азербайджан</td>
								<td><i></i></td>
							</tr>
							<tr>
								<td>№ 14204</td>
								<td>Виктор</td>
								<td>+77772042720</td>
								<td>19.11.2016 - 11:28</td>
								<td>Азербайджан</td>
								<td><i></i></td>
							</tr>
						</tbody>
					</table>
					<div className="paggination">
						<ul>
							<li>В начало</li>
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
							<li>В конец</li>
						</ul>
					</div>
				</div>
			</div>
    );
  }
}
