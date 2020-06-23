import React, { Component } from "react";
import {
	Collapse,
	NavbarToggler,
} from "reactstrap";

class Navbar extends Component {
	constructor(props){
		super(props);

		this.state = { 
			isOpen: false 
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() { 
		return ( 
			<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
				<span className="navbar-brand" href="#">Menu</span>
				<NavbarToggler 
					className="navbar-toggler" 
					type="button" 
					data-toggle="collapse" 
					data-target="#myNav"
					onClick={this.toggle}
					// aria-controls="myNav" 
					// aria-expanded="false" 
					// aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</NavbarToggler>

				<Collapse isOpen={this.state.isOpen} navbar id="myNav">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item" id="navHome">
							<button 
								onClick= {this.props.onGet}
								className="btn btn-dark" 
								
							>
								Get
							</button>
						</li>
						<li className="nav-item">
							<button 
								onClick = {this.props.onAdd}
								className="btn btn-dark" 
							>
								Add
							</button>
						</li>
						<li>
							
						</li>
						{/* <li className="nav-item">
							<a className="nav-link" href="add.html">Remove</a>
						</li> */}
					</ul>
					<form className="navbar-nav form-inline my-2 my-lg-0" action="logout">
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
					</form>
				</Collapse>
			</nav>
		);
	}
}
 
export default Navbar;