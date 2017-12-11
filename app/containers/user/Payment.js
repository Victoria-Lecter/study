import React, { Component } from 'react';

export default class Payment extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_center">

				<div className="form_wrap oplata">
					<div className="left_wrap_oplata">
						<form action="">

							<div className="line_oplata">
								<span>Сумма:</span>
								<input type="text" placeholder="0" />
								<span>€</span>
							</div>

							<div className="line_oplata">
								<input type="text" placeholder="Номер карты" />
							</div>

							<div className="line_oplata clearfix">
								<input type="text" placeholder="ДД / ГГГГ" />
								<input type="text" placeholder="CVC" />
							</div>

							<div className="line_oplata">
								<input type="text" placeholder="Имя на карте" />
							</div>

						</form>
					</div>
					<div className="right_wrap_oplata">
						<p>Мы работаем с</p>
						<ul>
							<li><a href=""><img src="img/Visa.png" alt="" /></a></li>
							<li><a href=""><img src="img/Maestro.png" alt="" /></a></li>
							<li><a href=""><img src="img/Mastercard.png" alt="" /></a></li>
						</ul>
						<p><span>HTTPS / SSL</span> Данные защищены <br /> по международному <br />стандарту PCI DSS</p>
						<img src="img/security.png" alt="" />
					</div>
				</div>
				<div className="bottom_oplata">
					<button>Оплатить</button>
				</div>
			</div>
    );
  }
}
