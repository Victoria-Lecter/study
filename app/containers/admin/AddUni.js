import React from 'react';

export default class AddUni extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_back">
				<div className="content admin clearfix">
					<label htmlFor="">Название университета</label>
					<input type="text" />
					<label htmlFor="">Тип университета</label>
					<div className="radio_wrap clearfix">
						<input type="radio" name="type_uni" id="type_uni_1" defaultChecked />
						<label htmlFor="type_uni_1"></label>
						<label htmlFor="type_uni_1">Государственный</label>
						<input type="radio" name="type_uni" id="type_uni_2" />
						<label htmlFor="type_uni_2"></label>
						<label htmlFor="type_uni_2">Государственный</label>
					</div>
					<label htmlFor="" >Город</label>
					<div className="radio_wrap clearfix">
						<input type="radio" name="radio_city" id="radio_city_1" defaultChecked />
						<label htmlFor="radio_city_1"></label>
						<label htmlFor="radio_city_1">Брно</label>
						<input type="radio" name="radio_city" id="radio_city_2" />
						<label htmlFor="radio_city_2"></label>
						<label htmlFor="radio_city_2">Прага</label>
						<input type="radio" name="radio_city" id="radio_city_3" />
						<label htmlFor="radio_city_3"></label>
						<label htmlFor="radio_city_3">Другие</label>
					</div>
					<label htmlFor="" >Фотографии</label>
					<div className="foto_admin_add_wrap">
						<div className="foto_item_add">
							<img src="img/ВУТ.jpg" alt="" />
							<div className="foto_item_add_delete">
								<i></i>
							</div>
						</div>
						<div className="foto_item_add">
							<img src="img/ВУТ.jpg" alt="" />
							<div className="foto_item_add_delete">
								<i></i>
							</div>
						</div>
					</div>
					<div className="but_wrap clearfix"><button className="send_form upload clearfix">Загрузить</button></div>
					<label htmlFor="">Описание</label>
					<div className="button_admin_reader_wrap">
						<div className="little_button">
							<button>Ж</button>
							<button>К</button>
							<button>П</button>
						</div>
						<div className="button_center">
							<button>Заголовок</button>
							<button>Цитата</button>
							<button>Список</button>
						</div>
						<div className="button_right">
							<button>Примечание</button>
							<button>Внимание</button>
						</div>
					</div>
					<textarea placeholder="Введите текст..."></textarea>
					<label htmlFor="">Факультеты и специальности</label>
					<div className="button_admin_reader_wrap">
						<div className="little_button">
							<button>Ж</button>
							<button>К</button>
							<button>П</button>
						</div>
						<div className="button_center">
							<button>Заголовок</button>
							<button>Цитата</button>
							<button>Список</button>
						</div>
						<div className="button_right">
							<button>Примечание</button>
							<button>Внимание</button>
						</div>
					</div>
					<textarea placeholder="Введите текст..."></textarea>
					<button className="send_form">Опубликовать</button>
				</div>
			</div>
    );
  }
}
