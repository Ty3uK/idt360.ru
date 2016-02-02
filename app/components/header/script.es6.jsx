import React from 'react';
import './style.scss'

export default class Header extends React.Component {
    static defaultProps = {
        animated: false,
        active: 0
    };

    render() {
        return (
            <div id="header" className={`row ${this.props.animated ? 'animated fadeInDown': ''}`}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row text-center">
                        <div className={`col-xs-3 col-sm-3 col-md-2 col-lg-2 col-md-offset-2 col-lg-offset-1 ${(this.props.active === 0) ? 'active' : ''}`}>
                            <a href="/">
                                <span className="sansPro white mobileSize headerItem">Проекты</span>
                            </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-2 col-lg-2 ${(this.props.active === 1) ? 'active' : ''}`}>
                            <a href="/students">
                                <span className="sansPro white mobileSize headerItem">Студентам</span>
                            </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-2 col-lg-2 ${(this.props.active === 2) ? 'active' : ''}`}>
                            <a href="/courses">
                                <span className="sansPro white mobileSize headerItem">Курсы</span>
                            </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-2 col-lg-2 ${(this.props.active === 3) ? 'active' : ''}`}>
                            <a href="/about">
                                <span className="sansPro white mobileSize headerItem">О нас</span>
                            </a>
                        </div>
                        <div className={`col-xs-3 col-sm-3 col-md-2 col-lg-2 ${(this.props.active === 4) ? 'active' : ''}`}>
                            <a href="/business">
                                <span className="sansPro white mobileSize headerItem">Google Business</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};