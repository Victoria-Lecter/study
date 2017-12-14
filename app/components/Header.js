import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<header>
				<div className="header_top">
					<div className="logo"><img src="img/logo.png" alt="" /></div>
					<nav className="big_mnu">
						<ul>
							<li><Link to="/">Главная</Link></li>
							<li className="mnu_list" id="mnu_0"><Link to="/catalog/programs/brno">Образование</Link></li>
							<li><Link to="/catalog/living">Проживание</Link></li>
							<li className="mnu_list" id="mnu_1"><Link to="/catalog/blog">Медиатека</Link></li>
							<li className="mnu_list" id="mnu_2"><Link to="/about/company">О нас</Link></li>
							<li className="nav_ask"><Link to="/more-info/faq"><span></span><b className="targ_1">Ответы на частые вопросы</b></Link></li>
						</ul>
					</nav>
					<button onClick={(e) => this.props.popup(1)} className="yellow_button">Заполнить анкету</button>
					<div className="small_mnu_wrap">
						<button>
							<span></span>
						</button>
						<div className="small_mnu_hover">
							<div className="wrap_button_small_mnu">
								<button>
									<span></span>
								</button>
							</div>
							<ul>
								<li><i>Меню</i></li>
								<li><a href="">Главная</a></li>
								<li><i>Образование</i></li>
								<li><a href="">Проживание</a></li>
								<li><a href="">Медиатека</a></li>
								<li><a href="">О нас</a></li>
								<li><a href="">Ответы на частые вопросы</a></li>
								<li className="butt_mnu_small"><a href="">Заполнить анкету</a></li>
								<li><a href="">Войти в личный кабинет</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="header_bottom">
					<div className="contacts_header">
						<p><span></span>+7 (965) 77-253-77</p>
						<p><span></span>info@studyinczech.net</p>
					</div>
					<div className="login_wrap">
						<div className={this.props.login ? 'name_wrap' : 'hidden'}>
							<p>Дмитрий Печунка<i className="fa fa-angle-down" aria-hidden="true"></i></p>
							<div className="name_mnu">
								<ul>
									<li><Link to={this.props.id}><i></i>Личный кабинет</Link></li>
									<li><a href=""><i></i>Моя анкета</a></li>
									<li><a href=""><i></i>Оплата услуг</a></li>
									<li><a href=""><i></i>Изменить пароль</a></li>
									<li onClick={this.props.logout}><a href='/'><i></i>Выйти</a></li>
								</ul>
							</div>
						</div>
						<div className={!this.props.login ? 'login' : 'hidden'}>
							<p><span></span>Войти</p>
							<div className="authorization">
							<form onSubmit={(e) => this.props.submitLogin(e)}>
								<div className="autho_content">
									
										<input type="text" name="id" placeholder="Логин" onChange={(e) => this.props.changeLogin(e)} />
										<div className="wrap_password clearfix"><input type="password" name="password" placeholder="Пароль" onChange={(e) => this.props.changeLogin(e)} /><a href="">?</a></div>
										<p>*для получения доступа нужно <i onClick={(e) => this.props.popup(1)} className="link">заполнить анкету</i></p>
									
								</div>
								<button type="submit" onClick={e => this.props.submitLogin(e)}>Авторизоваться</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="wrap_hover_mnu">
					<div className="hover_mnu" id="hover_mnu_0">
						<ul>
							<li><Link to="/catalog/programs/brno">Высшее образование</Link></li>
							<li><Link to="/education/middle-school">Среднее образование</Link></li>
							<li><Link to="/education/more">Дополнительные услуги</Link></li>
							<li><Link to="/catalog/university/brno">ВУЗы</Link></li>
						</ul>
					</div>
					<div className="hover_mnu" id="hover_mnu_1">
						<ul>
							<li><Link to="/media/foto">Фотографии</Link></li>
							<li><Link to="/media/videos">Видео</Link></li>
							<li><Link to="/media/our-book">Наша книга</Link></li>
							<li><Link to="/catalog/blog">Блог о Чехии</Link></li>
						</ul>
					</div>
					<div className="hover_mnu" id="hover_mnu_2">
						<ul>
							<li><Link to="/about/company">О компании</Link></li>
							<li><Link to="/about/contacts">Контакты</Link></li>
							<li><Link to="/about/represent">Представители</Link></li>
							<li><Link to="/about/partners">Партнеры</Link></li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
}


// <!-- <ul>
									// 	<li><a href="">Высшее образование</a></li>
									// 	<li><a href="">Среднее образование</a></li>
									// 	<li><a href="">Дополнительные услуги</a></li>
									// 	<li><a href="">Университеты</a></li>
									// </ul> -->

