import React from 'react';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';

export default class Students extends React.Component {
    componentDidMount() {
        document.title = "IDT - Студентам";
    }

    render() {
        return (
            <div id="students" className="container-fluid fullHeight">
				<Header animated={true} active={1} />

				<div className="row height-90">
					<div className="col-xs-12 fullHeight">
						<div className="row fullHeight">
							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 valign animated fadeIn delay-1_5">
								<span className="sansPro title primary text-center">Студенческое конструкторское бюро</span>
								<span className="sansPro title sub padding" style={{textIndent: '7%', textAlign: 'justify'}}>
									На базе Отдела Инновационных Технологий Проектирования студенты могут принимать участи в жизни отдела. Каждый сможет получить опыт работы во множестве программ, прикоснутся к реальным проектам и задачам. Дружный коллектив, приятная атмосфера будет окружать каждого пришедшего.
								</span>
								<span className="sansPro title sub padding">
									Главный корпус, 4 этаж, аудитория Б410
								</span>
								<span className="sansPro title sub">
									тел. +7 (863) 272-65-31
								</span>
							</div>

							<div className="col-md-6 col-lg-6 hidden-xs hidden-sm valign animated fadeIn delay-1">
								<img src="/assets/students.png" className="img-responsive center-block" />
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
};