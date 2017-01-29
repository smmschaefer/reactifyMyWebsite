import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router'; 
import sass from '../scss/application.scss';


const TopNav = () => <div><Links /></div>;

const Links = () => 
	<nav>
		<div id="navDiv">Hmm </div>
		<Link className="disShadow" to="/">Home </Link>
		<Link className="disShadow" to="/About">About </Link>
		<Link className="disShadow" to="/Projects">Projects </Link>
		<Link className="disShadow" to="/Contact">Contact </Link>
	</nav>

class NavBar extends Component {
	render() {
		return (
			<div>
				 <TopNav />
			</div>
		)
	}
}


export default NavBar;