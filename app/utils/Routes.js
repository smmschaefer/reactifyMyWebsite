import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import About from '../components/About';
import Main from '../components/Main';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import JsxConvert from '../components/JsxConvert';
import CVProject from '../components/CVProject';


class Routes extends Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Main}>
				<Route path="About" component={About}></Route>
				<Route path="Projects" component={Projects}></Route>
				<Route path="Contact" component={Contact}></Route>
				<Route path="JsxConvert" component={JsxConvert}></Route>
				<Route path="CVProject" component={CVProject}></Route>

				<IndexRoute component={Home}></IndexRoute>
			</Route>
			</Router>
		)	
	}
}

export default Routes;