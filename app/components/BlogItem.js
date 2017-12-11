import React, { Component } from 'react';
import { Link } from 'react-router';

export default class BlogItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog_item item">
      	<Link to="media/blog/item">
					<h3>Что такое нострификация?</h3>
					<div className="blog_img_wrap_item">
						<img src="img/IMG_2773.jpg" alt="" />
						<div className="shadow_blog">
							<span>13.10.2016</span>
							<span>9800 ПРОСМОТРОВ</span>
						</div>
					</div>
					<p>Всем иностранцам, которые планируют в Чехии поступать в ВУЗ необходимо пройти процедуру нострификации, т.е. признания вашего образования, полученного заграницей, равноценным чешскому. С этой целью на соответствующий ор</p>
				</Link>
			</div>
    );
  }
}
