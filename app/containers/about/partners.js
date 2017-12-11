import React, { Component } from 'react';

export default class Partners extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_center">
				<div className="partners">
					<div className="partner_item">
						<div className="partner_logo_wrap">
							<img src="img/509bd5_71c8748817a54378b643a4e2496fef0c.png" alt="" />
						</div>
						<div className="content">
							<h3>INFOBUS<a href="">infobus.eu</a></h3>
							<p>Компания «INFOBUS» — многопрофильная компания основанная в 1999 году. Основное направление компании - интернет разработки для систематизации процессов пассажирских перевозок.</p>
						</div>
					</div>
					<div className="partner_item">
						<div className="partner_logo_wrap">
							<img src="img/509bd5_254ebebe53624ffa8a4bfa97da7baf4f.jpg" alt="" />
						</div>
						<div className="content">
							<h3>VZP<a href="">vzp.cz</a></h3>
							<p>Страховая компания «VZP» является старейшим представителем страховых компаний в Чехии. Одним из приоритетных направлений в деятельности компании является страхование иностранцев в Чехии.</p>
						</div>
					</div>
				</div>
			</div>
    );
  }
}
