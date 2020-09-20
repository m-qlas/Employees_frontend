import React, { Component } from "react";
import Jumbo from "./Jumbo";
import AuthenticationService from "../services/AuthenticationService";

class LogForm extends Component {
	state = {
		username:"",
		password:"",
		hasLoginFailed: false,
		showSuccessMessage: false,
	}

	handleKeyPress = e => {
		if(e.charCode ===13){
			this.handleLogin();
		}
	}

	handleChange = e => {
		let nam = e.target.name;
		let val =e.target.value ;
		this.setState({[nam]:val});
	}

	handleLogin = () => {
		console.log("Login started");
		AuthenticationService
			.executeBasicAuthenticationService(this.state.username, this.state.password)
			.then(() => {
				console.log("Login succesfull");
				AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
				this.props.history.push("/");
			}).catch(() => {
				console.log("Login failed");
				this.setState({ showSuccessMessage: false });
				this.setState({ hasLoginFailed: true });
			});
	}

	render() { 
		return ( 
			<>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<span className="navbar-brand" href="#">Menu</span>
				</nav>
				<Jumbo
					text={this.props.jumboText}
				/>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							{this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
							{this.state.showSuccessMessage && <div>Login Sucessful</div>}
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='username' 
									placeholder="Enter login" 
									onChange={this.handleChange}
									onKeyPress={this.handleKeyPress}
								/>
							</div>
							<div className="form-group">
								<input 
									type="password" 
									className="form-control" 
									name='password' 
									placeholder="Enter password" 
									onChange={this.handleChange}
									onKeyPress={this.handleKeyPress}
								/>
							</div>
						</div>
					</div>
					<button 
						className="btn btn-primary"
						onClick = {this.handleLogin}
					>
						Login
					</button>
				</div>
			
			</>
		);
	}
}
 
export default LogForm;