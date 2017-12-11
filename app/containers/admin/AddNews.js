import React from 'react';

export default class AddNews extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_back">
				<div className="add_foto_news">
					<button>Загрузить фотографию</button>
				</div>
				<div className="content admin clearfix">
					<label htmlFor="">Название новости</label>
					<input type="text" />
					<label htmlFor="">Текст новости</label>
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
