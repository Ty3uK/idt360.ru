import React from 'react';
import MobileDetect from 'mobile-detect';
import Hammer from 'hammerjs';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';
import Slide from '../../components/slide/script.es6.jsx';

export default class Index extends React.Component {
    state = {
        slide: 1,
        slideCount: 3
    };

    slideIntervalTimer = null;
    isMobile = null;

    slideInterval = ()=> {
        var slide = (this.state.slide < this.state.slideCount) ? this.state.slide + 1 : 1;
        this.slidePages(slide, false);
    };

    slidePages = (slide, manual=false)=> {
        if (slide !== this.state.slide)
            this.setState({slide: slide});
        if (manual && !this.isMobile) {
            clearInterval(this.slideIntervalTimer);
            this.slideIntervalTimer = setInterval(this.slideInterval, 8000);
        }
    };

    componentDidMount() {
        document.title = 'IDT - Главная';

        this.isMobile = new MobileDetect(window.navigator.userAgent).mobile() !== null;

        if (!this.isMobile)
            this.slideIntervalTimer = setInterval(this.slideInterval, 8000);

        var swipes = new Hammer(document.body);
        swipes.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});
        swipes.on('swipe', (events)=> {
            var slide = 1;
            if (events.direction === 4)
                slide = (this.state.slide === 1) ? this.state.slideCount : this.state.slide - 1;
            else
                slide = (this.state.slide === 3) ? 1 : this.state.slide + 1;
            this.slidePages(slide, true);
        });
    }

    render() {
        var markers = [,...new Array(this.state.slideCount)].map((key, slide)=> {
            return <li className={`slide ${(slide === this.state.slide) ? 'active' : ''}`} key={slide} onClick={this.slidePages.bind(null, slide, true)}></li>
        });

        return (
            <div id="index" className="container-fluid fullHeight">
				<div className="row fullHeight">

					<Header animated={true} />
					<Slide slide={this.state.slide} />

					<div className="col-xs-4 col-xs-offset-4 text-center animated fadeIn delay-1 sliderContainer">
						<ol className="carousel-indicators slider" style={{bottom: 0}}>
							{markers}
						</ol>
					</div>
				</div>
			</div>
        )
    }
};