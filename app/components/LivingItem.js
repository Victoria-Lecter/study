import React, { Component } from 'react';
import { Link } from 'react-router';

export default class LivingItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="kolej_item">
				<h3>Общежитие <span>“Young Space”</span></h3>
				<div className="kolej_slider_wrap">
					<img src="img/5.jpg" alt="" />
					<img src="img/1.jpg" alt="" />
					<img src="img/11.jpg" alt="" />
					<div className="kolej_shadow_tabs">
						<div className="tabs"></div>
					</div>
				</div>
				<div className="content">
					<div className="list_true">
						<ul>
							<li>Высокоскоростной Wi-FI</li>
							<li>Прачечная с сушкой (1 стирка — 60 крон или 2 € )</li>
							<li>Тренажерный зал с акклиматизацией</li>
							<li>Летняя террасса для отдыха</li>
						</ul>
					</div>
				</div>
				<div className="kolej_bottom_item clearfix">
					<div className="kolej_price">
						<p><b>от 122 €</b> или <b>3 300 крон</b></p>
						<span>*в месяц</span>
					</div>
					<button><Link to="living/accomodation">Подробнее</Link></button>
				</div>
			</div>
    );
  }
}
