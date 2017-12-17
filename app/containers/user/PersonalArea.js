import React, { Component } from 'react';
import {hydrate} from 'react-dom';

export default class PersonalArea extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return [
      <div className="content_center" key="A">
				<div className="lich_top">
					<div className="content">
						<div className="preds_item_inside"><span>Программа:</span><p>Брно — “Эксклюзив”</p></div>
						<div className="preds_item_inside"><span>Дата курсов:</span><p>15 сентября, 2016</p></div>
						<div className="preds_item_inside"><span>Стоимость:</span><p>8 999 €</p></div>
					</div>
				</div>
				<div className="lich_steps">
					<div className="content">
						<div className="steps_item green_step">
							<h3>Выбор программы обучения</h3>
							<div className="content_steps">
								<p>Привет, Дмитрий! Первым делом <a href="">выберете программу</a>, которая будет отвечать Вашим требованиям и возможностям.</p>
							</div>
						</div>
						<div className="steps_item green_step">
							<h3>Заполнение анкеты</h3>
							<div className="content_steps">
								<p>Теперь Вам необходимо внимательно <a href="">заполнить анкету</a>, которая впоследствии будетотправлена на рассмотрение в консульство.</p>
							</div>
						</div>
						<div className="steps_item green_step">
							<h3>Подписать договор</h3>
							<div className="content_steps">
								<p>Наши сотрудники отправили Вам договор, который нужно изучить и при соглашении — подписать. </p>
							</div>
						</div>
						<div className="steps_item blue_step">
							<h3>Предоплата курсов</h3>
							<div className="content_steps">
								<p>После получения <a href="">оплаты</a> мы собираем Вам все необходимые документы для получения визы, записываем Вас на языковые курсы и бронируем место в общежитии. </p>
							</div>
						</div>
					</div>
				</div>
			</div>,

			<div className="right_info" key="B">
				<div className="logo_user_wrap clearfix">
					<div className="logo_user">
						<img src="img/user_logo.jpg" alt="" />
						<div className="logo_user_shadow">
							<i></i>
						</div>
					</div>
					<div className="user_info_top">
						<p>{this.props.appState.name} {this.props.appState.surname}</p>
						<span>Номер анкеты: 14204</span>
					</div>
				</div>
				<h3>Для получения интересующей Вас услуги</h3>
				<p><a href="">Напишите нам</a> или <a href="">закажите звонок</a> и мы проконсультируем Вас.</p>
			</div>
    ];
  }
}
