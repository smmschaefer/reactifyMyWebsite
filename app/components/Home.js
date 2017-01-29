import React, { Component } from 'react';
import sass from '../scss/application.scss'
import Flip from './Flip';
import Header from './Header';
import Footer from './Footer';


class Home extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<Header />
				</div>
				<div className="row">
					<Flip />
				</div>
				<div className="row">
					<Footer />
				</div>
			</div>
		)
	}
}


export default Home;