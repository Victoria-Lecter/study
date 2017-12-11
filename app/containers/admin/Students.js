import React from 'react';

import ControlsTop from '../../components/admin/ControlsTop'

export default class Students extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_admin_table">
				<ControlsTop />
				<div className="content_admin_student">
					<table>
						<tbody>
							<tr className="norm_strok">
								<td><div className="foto_tab_wrap"><img src="img/man.png" alt="" /></div></td>
								<td>Виктор Кириллов<span>№ 14204</span></td>
								<td>05.04.1997<span>19 лет</span></td>
								<td>Азербайджан<span>Баку</span></td>
								<td>+77772042720<span>viktor_kirrilov@mail.ru</span></td>
								<td>
									<span className="last_tab">
										<i></i>
										<span className="active_deist">
											<ul>
												<li><i></i></li>
												<li><i></i></li>
												<li><i></i></li>
												<li><i></i></li>
											</ul>
										</span>
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<table>
					<tbody>
						<tr className="active_all_info_student_in_admin">
							<td>
								<span>
									<span>
										<p>Программа:</p>
										<p>Имя:</p>
										<p>Фамилия:</p>
										<p>Пол:</p>
										<p>Дата рождения:</p>
										<p>Семейное положение:</p>
										<p>Страна рождения:</p>
										<p>Город рождения:</p>
										<p>Гражданство при рождении:</p>
										<p>Современное гражданство:</p>
									</span>
									<span>
										<p>“Эксклюзив” — Брно</p>
										<p>Виктор</p>
										<p>Кириллов</p>
										<p>Мужской</p>
										<p>5 апреля, 1997</p>
										<p>Не указано</p>
										<p>Казахстан</p>
										<p>Астана</p>
										<p>Казахстан</p>
										<p>Казахстан</p>
									</span>
								</span>
							</td>
							<td>
								<span className="active_but_table">1. Персональные данные</span>
								<span>2. Заграничный паспорт</span>
								<span>3. Информация о семье</span>
								<span>4. Образование</span>
								<span>5. Контакты</span>
								<span>6. Приезд в Чехию</span>
							</td>
						</tr>
						</tbody>
					</table>

					
				</div>
			</div>
    );
  }
}
