import React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import '../bower_components/bootstrap-sass/assets/javascripts/bootstrap';

import Index from './pages/index/script.es6.jsx';
import Students from './pages/students/script.es6.jsx';
import Courses from './pages/courses/script.es6.jsx';
import About from './pages/about/script.es6.jsx';
import Tour from './pages/tour/script.es6.jsx';
import Video from './pages/video/script.es6.jsx';
import Business from './pages/business/script.es6.jsx';

export default class App extends React.Component {
    render() {
        return <div className="fullHeight">{this.props.children}</div>
    }
};

const routes = (
    <Route path="/" component={App}>
		<IndexRoute component={Index} />
		<Route path="students" component={Students} />
		<Route path="courses" component={Courses} />
		<Route path="about" component={About} />
		<Route path="tour" component={Tour} />
        <Route path="video" component={Video} />
		<Route path="business" component={Business} />
	</Route>
);

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('react-container'));