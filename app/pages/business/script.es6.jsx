import React from 'react';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';

export default class Business extends React.Component {
    componentDidMount() {
        document.title = "IDT - Google Business";
    }

    render() {
		document.body.style.overflow = 'hidden';
		document.body.style.background = 'black';

        return (
            <div id="buisness">
				<Header animated={true} active={4} />
				<div id="background">
					<div className="row valign">
						<div className="col-lg-12 text-center">
							<h1 className="white sansPro shadow-text" style={{fontSize: '350%', fontWeight: 400}}>Google панорамы интерьеров</h1>
						</div>
						<div className="col-lg-12 text-center">
							<p className="white sansPro shadow-text" style={{fontSize: '150%', fontWeight: 200}}>
								Укрепите интернет-позиции своей компании – вооружитесь качественным виртуальным туром по технологии Street View.
							</p>
						</div>
						<div className="col-lg-12 text-center">
							<p className="white sansPro shadow-text" style={{fontSize: '150%', fontWeight: 200}}>
								Это просто, быстро и доступно.
							</p>
						</div>
						<div className="col-lg-12 text-center">
							<a target="_blank" className="sansPro button grey mobileSize" href="https://www.google.com/maps/@47.2193127,39.7113187,3a,75y,74.26h,89.89t/data=!3m7!1e1!3m5!1sFN7YbCeUlYcAAAQuq1sOkg!2e0!3e2!7i9508!8i4754?hl=ru">
									Попробовать
								</a>
						</div>
					</div>
				</div>
			</div>
        )
    }
};