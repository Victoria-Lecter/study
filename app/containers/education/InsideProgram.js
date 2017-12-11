import React, { Component } from 'react';

export default class InsideProgram extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content_back">
				<div className="content">
					<h3 style={{marginTop: 0}}>Общяя информация</h3>
					<p>Программа предназначена для абитуриентов, которые заинтересованы в разработке индивидуальной программы и реализации себя в Чехии. Данная программа позволяет Вам изучать язык <b>при максимальном комфорте</b>. Участники программы в течении всего языкового курса будут заниматься исключительно самоподготовкой к поступлению, все остальные вопросы за них будут решать наши сотрудники.</p>
				</div>
				<div className="what_in_program_inside">
					<ul>
						<li>560 часов<span>чешского языка</span></li>
						<li>100 часов<span>Speaking club’a</span></li>
						<li>90 часов<span>индивид. занятий</span></li>
					</ul>
				</div>
				<div className="foto_s_info_wrap inside_prog_foto">
						<img src="img/photo-1439218162959-f94eda3a382a.jpg" alt="" />
						<div className="shadow_foto_s_info"><h3>Что входит в программу?</h3></div>
					</div>
				<div className="tabs_content_inside">
					<ul>
						<li className="active_tabs">До приезда в Чехию</li>
						<li>После приезда в Чехию</li>
						<li>Дополнительные услуги</li>
					</ul>
				</div>
				<div className="content">
					<div className="list_true">
						<ul>
							<li>Подготовка всех необходимых документов для получения визы</li>
							<li>Подготовка наших студентов к собеседованию в посольствах и консульствах</li>
							<li>Предоставление информации о системе образования в Чешской Республике</li>
							<li>Резервация выбранного студентом жилья <br />(год проживания включен встоимость программы)</li>
							<li>Оплата языковых курсов и подготовительных курсов по выбору студента</li>
							<li>Комплексное медицинское страхование от лучшей чешской страховой компании VZP</li>
						</ul>
					</div>
					<div className="info_red">
						<i></i>
						<p>Что не входит в программу?</p>
					</div>
					<div className="list_true list_false">
						<ul>
							<li>Консульский сбор в посольстве или консульстве Чешской Республике</li>
							<li>Стоимость проезда до Чехии</li>
							<li>Стоимость биометрической карты</li>
						</ul>
					</div>
					</div>
					<div className="bottom_prog_inside clearfix">
						<div className="price_inside">
							Стоимость: <b>8 999 €</b>
							<span>*возможна оплата частями</span>
						</div>
						<button className="yellow_button">Заполнить анкету</button>
					</div>
			</div>
    );
  }
}
