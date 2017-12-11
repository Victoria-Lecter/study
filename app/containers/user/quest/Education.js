import React, { Component } from 'react';

export default class Education extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
	   <div className="content_center">
			<div className="form_wrap">
				<div className="form_item_wrap">
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form"><h3>Текущая деятельность</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">На данный момент я:</label>
						</div>
						<div className="right_item_form">
							<div className="standart_select">
								<span>Учусь</span>
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
				</div>

				<div className="form_item_wrap">
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form"><h3>Среднее образование</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Образовательное учреждение:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Адрес:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Телефон учреждения:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Индекс:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Период обучения:</label>
						</div>
						<div className="right_item_form small_select_wrap">
							<span>от</span>
							<div className="small_select">
								<i className="fa fa-angle-down" aria-hidden="true"></i>
								<span>2007</span>
								<div className="small_select_content">
									<span className="active_small_selec">2008</span>
									<span>2009</span>
									<span>2010</span>
									<span>2011</span>
									<span>2012</span>
									<span>2013</span>
								</div>
							</div>
							<span>до</span>
							<div className="small_select">
								<i className="fa fa-angle-down" aria-hidden="true"></i>
								<span>2016</span>
								<div className="small_select_content">
									<span>2008</span>
									<span>2009</span>
									<span>2010</span>
									<span>2011</span>
									<span>2012</span>
									<span>2013</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="form_item_wrap">
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form"><h3>Колледж</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form">
							<div className="button_control_famyli clearfix">
								<span className="cancel">Отмена</span>
								<span className="add">Добавить</span>
							</div>
						</div>
					</div>
				</div>

				<div className="form_item_wrap">
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form"><h3>Высшее образование</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form">
							<div className="button_control_famyli clearfix">
								<span className="cancel">Отмена</span>
								<span className="add">Добавить</span>
							</div>
						</div>
					</div>
				</div>

				<div className="content_add_form">
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Образовательное учреждение:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Адрес:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Телефон учреждения:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Индекс:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Период обучения:</label>
						</div>
						<div className="right_item_form small_select_wrap">
							<span>от</span>
							<div className="small_select">
								<i className="fa fa-angle-down" aria-hidden="true"></i>
								<span>2007</span>
								<div className="small_select_content">
									<span className="active_small_selec">2008</span>
									<span>2009</span>
									<span>2010</span>
									<span>2011</span>
									<span>2012</span>
									<span>2013</span>
								</div>
							</div>
							<span>до</span>
							<div className="small_select">
								<i className="fa fa-angle-down" aria-hidden="true"></i>
								<span>2016</span>
								<div className="small_select_content">
									<span>2008</span>
									<span>2009</span>
									<span>2010</span>
									<span>2011</span>
									<span>2012</span>
									<span>2013</span>
								</div>
							</div>
						</div>
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
