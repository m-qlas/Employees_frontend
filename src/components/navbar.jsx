import React, { Component } from "react";

class Navbar extends Component {
	state = {  }
	render() { 
		return ( 
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<a className="navbar-brand" href="#">Menu</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
					aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item" id="navHome">
							<a className="nav-link" href="get.html">Get</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="add.html">Add</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="add.html">Remove</a>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0" action="logout">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
					</form>
				</div>
			</nav>
		);
	}
}
 
export default Navbar;