import React from 'react';

export default class Passport extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_center">
				<div className="form_wrap">
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
							<label htmlFor="">Серия и номер паспорта:</label>
						</div>
						<div className="right_item_form">
							<input type="text" placeholder="Печунка" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Страна выдачи:</label>
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
							<label htmlFor="">Орган, выдавший документ:</label>
						</div>
						<div className="right_item_form">
							<input type="text" placeholder="Москва" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Дата выдачи:</label>
						</div>
						<div className="right_item_form">
							<input type="text" placeholder="ДД / ММ / ГГ" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form">
							<label htmlFor="">Действителен до:</label>
						</div>
						<div className="right_item_form">
							<input type="text" placeholder="ДД / ММ / ГГ" />
						</div>
					</div>
					<div className="form_item">
						<div className="left_item_form"></div>
						<div className="right_item_form">
							<div className="checkbox_wrap standart_form_checkbox">
								<input type="checkbox" id="otkaz_viza" />
								<label htmlFor="otkaz_viza"></label>
								<label htmlFor="otkaz_viza">У меня были отказы в визе</label>
							</div>
						</div>
						<div className="otkaz_viza_form">
							<div className="form_item">
								<div className="left_item_form">
									<label htmlFor="">Год отказа:</label>
								</div>
								<div className="right_item_form">
									<input type="text" />
								</div>
							</div>
							<div className="form_item">
								<div className="left_item_form">
									<label htmlFor="">Отказавшая страна:</label>
								</div>
								<div className="right_item_form">
									<input type="text" />
								</div>
							</div>
							<div className="form_item">
								<div className="left_item_form">
									<label htmlFor="">Тип визы:</label>
								</div>
								<div className="right_item_form">
									<input type="text" />
								</div>
							</div>
							<div className="form_item">
								<div className="left_item_form">
									<label htmlFor="">Причина отказа</label>
								</div>
								<div className="right_item_form">
									<input type="text" />
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
