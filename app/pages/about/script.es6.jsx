import React from 'react';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';

export default class About extends React.Component {
    componentDidMount() {
        document.title = "IDT - О нас";
    }

    render() {
        return (
            <div id="contacts" className="container-fluid fullHeight">
				<div className="row fullHeight">
					<Header animated={true} active={3} />

					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{height: '90%'}}>
						<div id="perpective" className="row valign-landscape">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center animated fadeIn duration-1 delay-1">
								<span className="sansPro mobileSize title primary big">
									Отдел иновационных технологий проектирования
								</span>
							</div>

							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center animated fadeIn duration-1 delay-1_5 rotate-container">
								<div className="contact-front">
									<img className="img-responsive img-circle photo" src="/assets/contacts/01.jpg" />
									<span className="sansPro mobileSize title primary">Пачев Артём</span>
									<span className="sansPro mobileSize title sub">И. О. начальника отдела</span>
								</div>
								<div className="contact-back">
									<div className="valign">
										<span className="skills sansPro">Профессиональные навыки:</span>
										<span className="skills sansPro sub">3D-моделирование</span>
										<span className="skills sansPro sub">Unity-разработка</span>
										<span className="skills sansPro sub">Фотограф</span>
									</div>
								</div>
							</div>

							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center animated fadeIn duration-1 delay-2 rotate-container">
								<div className="contact-front">
									<img className="img-responsive img-circle photo" src="/assets/contacts/02.jpg" />
									<span className="sansPro mobileSize title primary">Манучарян Левон</span>
									<span className="sansPro mobileSize title sub">Инженер отдела</span>
								</div>
								<div className="contact-back">
									<div className="valign">
										<span className="skills sansPro">Профессиональные навыки:</span>
										<span className="skills sansPro sub">3D-моделирование</span>
										<span className="skills sansPro sub">Промышленный дизайн</span>
										<span className="skills sansPro sub">Unity-разработка</span>
									</div>
								</div>
							</div>

							<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 text-center animated fadeIn duration-1 delay-2_5 rotate-container">
								<div className="contact-front">
									<img className="img-responsive img-circle photo" src="/assets/contacts/04.jpg" />
									<span className="sansPro mobileSize title primary">Рустамов Азер</span>
									<span className="sansPro mobileSize title sub">Инженер отдела</span>
								</div>
								<div className="contact-back">
									<div className="valign">
										<span className="skills sansPro">Профессиональные навыки:</span>
										<span className="skills sansPro sub">Панорамная фотография</span>
										<span className="skills sansPro sub">Оператор беспилотника</span>
										<span className="skills sansPro sub">3D-моделирование</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
};