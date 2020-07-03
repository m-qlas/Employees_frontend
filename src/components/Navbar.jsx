import React, { Component } from "react";
import {
	Collapse,
	NavbarToggler,
} from "reactstrap";
import AuthenticationService from "../services/AuthenticationService";
import {Link, withRouter} from "react-router-dom";

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
						
					</ul>
					
					<Link 
						className="btn btn-outline-success my-2 my-sm-0" 
						onClick={AuthenticationService.logout} 
						to="/login"
					>
						Logout
					</Link>
					
				</Collapse>
			</nav>
		);
	}
}
 
export default Navbar;