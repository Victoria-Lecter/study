import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProgramItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="program_item">
				<h3><span>Программа — </span>«Эконом»</h3>
				<p>Программа рассчитана на более самостоятельных абитуриентов возрастом свыше 20 лет. Данная программа позволяет молодым людям познакомиться с страной, получить необходимую информацию непосредственно после приезда в Чехию. В дальнейшем абитуриент будет более самостоятельным, сам определиться с ВУЗом, ностри</p>
				<div className="what_in_program_inside">
					<ul>
						<li>560 часов<span>чешского языка</span></li>
						<li className="no_active">
							100 часов<span>Speaking club’a</span>
							<i>Эта услуга доступна в программе — <a href="">«Стандарт»</a></i>
						</li>
						<li className="no_active">
							90 часов<span>индивид. занятий</span>
							<i>Эта услуга доступна только в программе — <a href="">“Эксклюзив”</a></i>
						</li>
					</ul>
				</div>
				<div className="bottom_prog_inside clearfix">
					<div className="price_inside">
						Стоимость: <b>2 499 €</b>
						<span>*возможна оплата частями</span>
					</div>
					<button className="yellow_button blue_button"><Link to="/education/chipe">Подробнее</Link></button>
				</div>
			</div>
    );
  }
}
