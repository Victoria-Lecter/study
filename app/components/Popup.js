import React from 'react';
import Select from 'react-select';
import { RadioGroup, Radio } from 'react-radio-group';
import CountryData from '../staticData/country.js'
import Month from '../staticData/month.js'
import axios from 'axios'
import { Link } from 'react-router'


export default class Popup extends React.Component {

  constructor(props) {
    super(props);

    this.singup = this.singup.bind(this);
    this.selectMiddleware = this.selectMiddleware.bind(this);
  }

  selectMiddleware(name, val){
  	this.props.selectChange(name, val);
  }

  singup(e) {

	  const createID = 'scz_' + Math.random().toString().slice(-8);

  	this.setState({
  		id: createID
  	})
  	
  	axios.post('/singup', {
  		state: this.state,
  		id: createID
  	}).then((res) => {
	  		this.props.changePopup(2);
			}).catch((err) => {
				console.log(err)
			})

  	e.preventDefault()
  }

  render() {
    return (
      <div>

      	<div className={this.props.numPopup == 1 ? "anketa_popup popup" : "hidden"}>
					<h3>ПЕРСОНАЛЬНАЯ ИНФОРМАЦИЯ</h3>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<form onSubmit={(e) => this.singup(e)}>
						<div className="anketa_wrap">
							<div className="left_anketa">
								<label htmlFor="">Имя:</label>
								<div className="right_item_form">
									<input type="text" name="name" placeholder="Иван" value={this.props.name} onChange={this.props.changeInfoPopup}/>
								</div>
								<label htmlFor="">Дата рождения:</label>
								<div className="right_item_form">

								<div className="select_date_wrap clearfix">
										<input type="text" name="day" placeholder="5" value={this.props.day} onChange={this.props.changeInfoPopup} />
										<div className="select_month">
											
											<Select
											  name="month"
											  value={this.props.month}
											  placeholder="Выбрать"
											  options={Month}
											  clearable={false}
											  onChange={this.selectMiddleware.bind(this, 'month')}
											/>


										</div>
										<input type="text" placeholder="1996" value={this.props.year} name="year" onChange={this.props.changeInfoPopup} />
									</div>									
								</div>
								<label className="stranno" htmlFor="">Страна:</label>


								<Select
								  name="country"
								  value={this.props.country}
								  options={CountryData}
								  placeholder="Выбрать"
								  clearable={false}
								  onChange={this.selectMiddleware.bind(this, 'country')}
								/>


								<label htmlFor="">E-mail:</label>
								<div className="right_item_form">
									<input type="text" palceholder="example@example.com" value={this.props.email} name="email" onChange={this.props.changeInfoPopup}/>
								</div>
								<label htmlFor="">Пароль:</label>
								<div className="right_item_form">
									<input type="password" value={this.props.password} name="password" onChange={this.props.changeInfoPopup}/>
								</div>
								<button onClick={(e) => this.props.changePopup(0)}>Отмена</button>
							</div>
							<div className="right_anketa">
								<label htmlFor="">Фамилия:</label>
								<div className="right_item_form">
									<input type="text" placeholder="Иванов" value={this.props.surname} name="surname" onChange={this.props.changeInfoPopup}/>
								</div>
								<label htmlFor="">Пол:</label>
								
								<RadioGroup className="radio_sex_wrap" selectedValue={this.props.sex} name="sex" onChange={this.props.changeRadio}>

									<Radio value="man" id="sex_1" />
									<label htmlFor="sex_1">Мужской</label>
									<Radio value="woman" id="sex_2" />
									<label htmlFor="sex_2">Женский</label>
									
								</RadioGroup>

								<label htmlFor="">Город:</label>
								<div className="right_item_form">
									<input type="text" placeholder="Москва" value={this.props.city} name="city" onChange={this.props.changeInfoPopup}/>
								</div>
								<label htmlFor="">Телефон:</label>
								<div className="right_item_form">
									<input type="text" placeholder="+7 777 777 777" value={this.props.phone} name="phone" onChange={this.props.changeInfoPopup}/>
								</div>
								<label htmlFor="">Повторите пароль:</label>
								<div className="right_item_form">
									<input type="password" value={this.props.password_again} name="password_again" onChange={this.props.changeInfoPopup}/>
								</div>
								<button type="submit">Отправить</button>
							</div>
						</div>
					</form>
				</div>

				<div className={this.props.numPopup == 2 ? "popup anketa_done_popup" : "hidden"}>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<div className="check_wrap">
						<svg xmlns="http://www.w3.org/2000/svg" width="75" height="57" viewBox="0 0 335.765 335.765"><path fill="#fff" d="M311.757 41.803L107.573 245.96l-83.587-83.596L0 186.394 107.573 293.96 335.765 65.795"/></svg>
					</div>
					<h3>Ваша заявка принята!</h3>
					<p>Мы отправили Вам письмо с паролем на указанный почтовый ящик.</p>
					<Link to={this.props.id} onClick={(e) => this.props.changePopup(0)}>Продолжить</Link>
				</div>

				<div className={this.props.numPopup == 3 ? "popup napisat_popup" : "hidden"}>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<div className="napisat_wrap">
						<div className="napis_line_wrap">
							<label htmlFor="">Ваше имя*</label>
							<input type="text" placeholder="Дмитрий" />
						</div>
						<div className="napis_line_wrap">
							<label htmlFor="">Ваш телефон (не обязательно)</label>
							<input type="text" placeholder="Дмитрий" />
						</div>
						<textarea placeholder="Здравствуйте, я хотел бы..."></textarea>
						<button>Отправить</button>
					</div>
				</div>

				<div className={this.props.numPopup == 4 ? "popup zakaz_popup" : "hidden"}>
					<img onClick={(e) => this.props.changePopup(0)} src="img/close-big.png" alt="" />
					<div className="zakaz_wrap">
						<label htmlFor="">Ваше имя*</label>
						<div className="right_item_form">
							<input type="text" />
						</div>
						<label htmlFor="">Ваш телефон*</label>
						<div className="right_item_form">
							<input type="text" />
						</div>
						<button>Заказать звонок</button>
					</div>
				</div>

				
      </div>
    );
  }
}


// <div className="radio_sex_wrap" onChange={this.changeInfoPopup}>
// 									<input type="radio" name="sex" id="sex_1" defaultChecked />
// 									<label htmlFor="sex_1">Мужской</label>
// 									<input type="radio" name="sex" id="sex_2" />
// 									<label htmlFor="sex_2">Женский</label>
// 								</div>