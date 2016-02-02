import React from 'react';
import './style.scss';

import Header from '../../components/header/script.es6.jsx';

export default class Video extends React.Component {
    componentDidMount() {
        document.title = "IDT - Видео";
    }

    render() {
        return (
			<div id="video" className="container-fluid fullHeight">
				<Header animated={true} active={0} />

				<div className="col-xs-12 col-md-12 col-md-12 col-lg-8 col-lg-offset-2 fullHeight animated fadeIn duration-4">
					<div className="row valign">
						<div className="col-lg-12">
							<div className="embed-responsive embed-responsive-16by9">
								<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VG0BreI3f3E" frameBorder="0" allowFullScreen></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
};