import React from 'react';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';

export default class Courses extends React.Component {
    componentDidMount() {
        document.title = "IDT - Курсы";
    }

    render() {
		var courses = [
			{
				title: 'Системы автоматизированного проектирования',
				items: [
					'Основы проектирования',
					'Продвинутый курс',
					'Основы 3D-моделирования'
				]
			},
			{
				title: '3D-моделирование',
				items: [
					'Основы моделирования',
					'Сложное моделирование',
					'Создание материалов и освещения'
				]
			},
			{
				title: 'Unity 3D (с 26 января по 31 января 2016 г.)',
				items: [
					'Базовый курс',
					'Продвинутый курс'
				]
			}
		];

		var accordion = () => {
            return courses.map((course, index)=> {
                return (
                    <div className="panel panel-default" key={index}>
						<div className="panel-heading" role="tab" id="headingOne">
							<h2 className="panel-title sansPro title">
								<a className={`${(index > 0) ? 'collapsed' : ''}`} role="button" data-toggle="collapse" data-parent="#accordion" href={`#course_${index+1}`} aria-expanded="true" aria-controls={`course_${index+1}`}>
									{course.title}
								</a>
							</h2>
						</div>

						<div id={`course_${index+1}`} className={`panel-collapse collapse ${(index === 0) ? 'in' : ''}`} role="tabpanel" aria-labelledby="headingOne">
							<div className="panel-body">
								<ul>
									{course.items.map((item, key)=> <li className="sansPro item" key={key}>{item}</li>)}
								</ul>
							</div>
						</div>
					</div>
                );
            });
		};

        return (
            <div id="courses" className="container-fluid fullHeight">
				<Header animated={true} active={2} />

				<div className="row height-90">
					<div className="col-xs-12 fullHeight">
						<div className="row fullHeight">
							<div className="col-md-6 col-lg-6 hidden-xs hidden-sm valign animated fadeIn delay-1">
								<img src="/assets/courses.png" className="img-responsive center-block" />
							</div>

							<div id="right_column" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 valign animated fadeIn delay-1_5">
								<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
									{accordion()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
};