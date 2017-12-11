import React, { Component } from 'react';

export default class Contacts extends Component {

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
						<div className="right_item_form"><h3>Место прописки</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Страна / Регион:</label>
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
							<label htmlFor="">Город:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Улица, дом, квартира:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Почтовый индекс:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
				</div>

				<div className="form_item_wrap">
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form"><h3>Место проживания</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Страна / Регион:</label>
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
							<label htmlFor="">Город:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Улица, дом, квартира:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Почтовый индекс:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
				</div>

				<div className="form_item_wrap">
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form"><h3>Контактная информация</h3></div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Домашний телефон:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Мобильный телефон:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Телефон родителя:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">E-mail:</label>
						</div>
						<div className="right_item_form">
							<input type="text" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Skype:</label>
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
