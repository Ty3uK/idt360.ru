import React from 'react';
import './style.scss';

export default class Slide extends React.Component {
    static defaultProps = {
        slide: 1
    };

    state = {
        firstLaunch: true
    };

    componentWillUpdate(nextProp, nextState) {
        if (this.state.firstLaunch)
            this.setState({firstLaunch: false})
    }

    render() {
        var renderSlide = () => {
            switch (this.props.slide) {
                case 2:
                    return (
                        <div id="slide_2" key={2} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 animated fadeIn duration-3">
							<div className="col-sm-6 col-md-7 col-lg-7 text-center hidden-xs hidden-sm valign">
								<img id="ipadImg" className="img-responsive hidden-xs" src="/assets/iPad-1024.png" />
							</div>
							<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center valign">
								<img className="img-responsive visible-xs visible-sm" src="/assets/iPad-1024.png" />
								<span className="sansPro mobileSize title primary">Обучающие комплексы </span>
								<span className="sansPro mobileSize title">Больше интерактивности.</span>
								<a className="sansPro button grey mobileSize" href="#">
									Попробовать
								</a>
							</div>
						</div>
                    );
                case 3:
                    return (
                        <div id="slide_3" key={3} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 animated fadeIn duration-3">
							<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center valign">
								<img className="img-responsive visible-xs visible-sm" src="/assets/QC-1024.png" alt="" />
								<span className="sansPro mobileSize title primary">Инновационные технологии </span>
								<span className="sansPro mobileSize title">Опережая время.</span>
								<a className="sansPro button grey mobileSize" href="/video" target="_blank">
									Подробнее
								</a>
							</div>
							<div className="col-sm-6 col-md-7 col-lg-7 text-center hidden-xs hidden-sm valign">
								<img className="img-responsive hidden-xs" src="/assets/QC-retina.png" alt="" />
							</div>
						</div>
                    );
                default:
                    return (
                        <div id="slide_1" key={1} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 animated fadeIn duration-3 #{if @state.firstLaunch then 'delay-1'}">
							<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center valign">
								<img className="img-responsive visible-xs visible-sm" src="/assets/macbook-1024.png" alt="" />
								<span className="sansPro mobileSize title primary">Виртуальный тур «РГУПС»</span>
								<span className="sansPro mobileSize title">Больше чем у всех...</span>
								<a className="sansPro button grey mobileSize" href="/tour" target="_blank">
									Попробовать
								</a>
							</div>
							<div className="col-sm-6 col-md-7 col-lg-7 text-center hidden-xs hidden-sm valign">
								<img className="img-responsive hidden-xs" src="/assets/macbook-retina.png" alt="" />
							</div>
						</div>
                    );
            }
        };

        return renderSlide();
    }
};