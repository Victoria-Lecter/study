import React, { Component } from 'react';
import { Link } from 'react-router';

export default class UniItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uni_catal_item item">
      	<Link to="education/university/uni">
					<h3>Tехнический университет</h3>
					<div className="foto_uni_item">
						<img src="img/foto.jpg" alt="" />
						<div className="foto_uni_item_shadow">
							<span>ГОСУДАРСТВЕННЫЙ ВУЗ</span>
							<span>8 ФАКУЛЬТЕТОВ</span>
						</div>
					</div>
					<p>Технический университет находится в рейтинге лучших институтов мира QS TopUniversities, здесь студенты изучают технические и экономические науки, а также искусство. Это старейший университет в городе Брно, основанный в 1899 году. В настоящее время обучение проходит на 8 факультетах и двух академических центрах, где учится боле </p>
				</Link>
			</div>
    );
  }
}
