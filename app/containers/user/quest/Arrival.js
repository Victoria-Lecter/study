import React from 'react';

export default class Arrival extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_center">
				<div className="form_wrap">
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Дата приезда:</label>
						</div>
						<div className="right_item_form clearfix">
							<div className="select_date_wrap">
								<input type="text" placeholder="5" />
								<div className="select_month">
									<span>Апрель</span>
									<i className="fa fa-angle-down" aria-hidden="true"></i>
									<div className="content_select_date">
										<span className="active_select_month">Сеньтябрь</span>
										<span>Октябрь</span>
										<span>Ноябрь</span>
										<span>Декабрь</span>
										<span>Декабрь</span>
										<span>Декабрь</span>
									</div>
								</div>
								<input type="text" placeholder="1996" />
							</div>
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Время приезда:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Город приезда:</label>
						</div>
						<div className="right_item_form">
							<div className="standart_select">
								<span>Не выбрано</span>
								<i className="fa fa-angle-down" aria-hidden="true"></i>
								<div className="content_standart_select">
									<span className="active_select_standart">Совободен</span>
									<span>Женат</span>
									<span>Не знаю</span>
									<span>Есть любовница</span>
								</div>
							</div>
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Вид транспорта:</label>
						</div>
						<div className="right_item_form">
							<div className="standart_select">
								<span>Не выбрано</span>
								<i className="fa fa-angle-down" aria-hidden="true"></i>
								<div className="content_standart_select">
									<span className="active_select_standart">Совободен</span>
									<span>Женат</span>
									<span>Не знаю</span>
									<span>Есть любовница</span>
								</div>
							</div>
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Номер рейса:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Название авиакомпании:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
				</div>
				<div className="bottom_form">
					<button>Сохранить</button>
				</div>
			</div>
    );
  }
}
