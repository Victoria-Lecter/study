import React, { Component } from 'react';

export default class LeftSidebar extends Component{
	render() {
		return(
			<div className="sidebar">
				<ul>
					<li className="active_sidebar"><a href="">Высшее образование</a></li>
					<li><a href="">Cреднее образование</a></li>
					<li><a href="">Дополнительные услуги</a></li>
					<li><a href="">Университеты</a></li>
				</ul>
				<h4>ПОПУЛЯРНОЕ В БЛОГЕ</h4>
				<div className="pop_blog_sidebar">
					<ul>
						<li><a href="">Чешская кухня или самая вкусная еда на земле!</a><span>2415 просмотров</span></li>
						<li><a href="">У нас нельзя а чешском языке ЛЬЗЯ?</a><span>5242 просмотра</span></li>
						<li><a href="">Какая система обучения в Чехии?</a><span>4523 просмотра</span></li>
					</ul>
				</div>
			</div>
		)
	}
} 