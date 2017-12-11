import React, { Component } from 'react';

import NavLink from './NavLink';

class Back extends Component{
	render() {
		return(
			<div class="button_black">
				<i class="fa fa-angle-left" aria-hidden="true"></i>
				Назад
			</div>
		)
	}
}

class Quest1 extends Component{

	render() {
		return(
			<div className="right_info">
				<div className="button_right_wrap">
					<NavLink to="/user_user/quest/personal-info" location={this.props.location}>1. Персональные данные</NavLink>
					<NavLink to="/user_user/quest/passport" location={this.props.location}>2. Заграничный паспорт</NavLink>
					<NavLink to="/user_user/quest/info-family" location={this.props.location}>3. Информация о семье</NavLink>
					<NavLink to="/user_user/quest/education" location={this.props.location}>4. Образование</NavLink>
					<NavLink to="/user_user/quest/contacts" location={this.props.location}>5. Контакты</NavLink>
					<NavLink to="/user_user/quest/arrival" location={this.props.location}>6. Приезд в Чехию</NavLink>
				</div>
				<h3>Возникли трудности с анкетой?</h3>
				<p><a href="">Напишите нам</a> или <a href="">закажите звонок</a> и мы проконсультируем по любому интересующему Вас вопросу в кратчайшие сроки.</p>
			</div>
		)
	}
}

class StandartRight extends Component{
	render() {
		return(
			<div className="right_info">
				<h3>Для получения интересующей Вас услуги</h3>
				<p><a href="">Напишите нам</a> или <a href="">закажите звонок</a> и мы проконсультируем Вас.</p>
			</div>
		)
	}
}

export default class RightSidebar extends Component{
	render() {

		let rightSidebar;
		if(this.props.params.quest) rightSidebar = <Quest1 location={this.props.location} />
		else if(this.props.params.add || this.props.params.table) rightSidebar = <Back />
		else rightSidebar = <StandartRight />

		return(
			React.cloneElement(rightSidebar)
		)
	}
}