import React from 'react';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';

export default class Tour extends React.Component {
	state = {
      scale: 0  
    };
	
    computeScale = ()=> {
        this.setState({scale: ((window.innerHeight / 1830) + 0.03)});
    };
    
    componentDidMount() {
        document.title = "IDT - Тур";
        window.addEventListener('resize', this.computeScale);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.computeScale);
    }

    render() {
		var imacStyle = `scale(${this.state.scale}) translate(-50%,-50%)`;
		document.body.style.overflow = 'hidden';

		return (
			<div id="wrap" className="animated fadeIn duration-4">
				<div id="imac" onLoad={this.computeScale} style={{transform: imacStyle, WebkitTransform: imacStyle, MozTransform: imacStyle}}>
					<img src="/assets/iMac.png" alt="" />
					<a href="http://www.tour.rgups.ru/pk/park" target="_blank" className="full-circle hint--right animated bounceIn delay-1_2" data-hint="Парк" style={{zIndex: 1, position: 'absolute', bottom: 410, left: 415}}> </a>
					<a href="http://www.tour.rgups.ru/gl/glav" target="_blank" className="full-circle hint--right animated bounceIn delay-1_5" data-hint="Главный корпус" style={{zIndex: 1, position: 'absolute', top: 750, left: 820}}> </a>
					<a href="http://www.tour.rgups.ru/en/Energy" target="_blank" className="full-circle hint--right animated bounceIn delay-1_8" data-hint="Энергетический факультет" style={{zIndex: 0, position: 'absolute', top: 610, left: 1250}}> </a>
					<a href="http://www.tour.rgups.ru/gm/gum" target="_blank" className="full-circle hint--right animated bounceIn delay-2_1" data-hint="Гуманитарный факультет" style={{zIndex: 0, position: 'absolute', top: 740, left: 1180}}> </a>
					<a href="http://www.tour.rgups.ru/me/Meh" target="_blank" className="full-circle hint--right animated bounceIn delay-2_4" data-hint="Электромеханический факультет" style={{zIndex: 0, position: 'absolute', top: 430, left: 1140}}> </a>
					<a href="http://www.tour.rgups.ru/d/dk" target="_blank" className="full-circle hint--left animated bounceIn delay-2_7" data-hint="Дворец культуры" style={{zIndex: 0, position: 'absolute', top: 530, left: 1040}}> </a>
					<a href="http://www.tour.rgups.ru/sp/sport" target="_blank" className="full-circle hint--left animated bounceIn delay-3" data-hint="Спортивный комплекс" style={{zIndex: 1, position: 'absolute', top: 360, left: 1740}}> </a>
					<a href="http://www.tour.rgups.ru/lc/licey" target="_blank" className="full-circle hint--left animated bounceIn delay-3_3" data-hint="Лицей РГУПС" style={{zIndex: 0, position: 'absolute', top: 330, left: 1290}}> </a>
				</div>
			</div>
		)
    }
};