import React, { Component } from 'react';

export default class InfoFamily extends Component {

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
							<div className="right_item_form"><h3>Отец</h3></div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Имя:</label>
							</div>
							<div className="right_item_form">
								<input type="text" placeholder="Дмитрий" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Фамилия:</label>
							</div>
							<div className="right_item_form">
								<input type="text" placeholder="Печунка" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Дата рождения:</label>
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
								<label htmlFor="">Гражданство:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Адрес прописки:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Профессия:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
					</div>

					<div className="form_item_wrap">
						<div className="form_item">
							<div className="left_item_form"></div>
							<div className="right_item_form"><h3>Мать</h3></div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Имя:</label>
							</div>
							<div className="right_item_form">
								<input type="text" placeholder="Дмитрий" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Фамилия:</label>
							</div>
							<div className="right_item_form">
								<input type="text" placeholder="Печунка" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Дата рождения:</label>
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
								<label htmlFor="">Гражданство:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Адрес прописки:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Профессия:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
					</div>

					<div className="form_item_wrap">
						<div className="form_item">
							<div className="left_item_form"></div>
							<div className="right_item_form"><h3>Братья</h3></div>
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
							<div className="right_item_form"><h3>Сестры</h3></div>
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
								<label htmlFor="">Имя:</label>
							</div>
							<div className="right_item_form">
								<input type="text" placeholder="Дмитрий" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Фамилия:</label>
							</div>
							<div className="right_item_form">
								<input type="text" placeholder="Печунка" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Дата рождения:</label>
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
								<label htmlFor="">Гражданство:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Адрес прописки:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
							</div>
						</div>
						<div className="form_item">
							<div className="left_item_form">
								<label htmlFor="">Профессия:</label>
							</div>
							<div className="right_item_form">
								<input type="text" />
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
