import React, { Component } from "react";
import Jumbo from "./jumbo";
import AuthenticationService from "../services/AuthenticationService";

class LogForm extends Component {
	state = {
		username:"",
		password:"",
		hasLoginFailed: false,
		showSuccessMessage: false,
	}

	handleChange = e => {
		let nam = e.target.name;
		let val =e.target.value ;
		
		this.setState({[nam]:val});

		// this.setState(prevState => {
		// 	let user = {... prevState.user};
		// 	user[nam] = val;
		// 	return {user};
		// });
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
		// const requestOptions = {
		// 	method: "POST",
		// 	headers: { "Content-Type": "application/json" },
		// 	body: JSON.stringify(this.state.user)
		// };

		// fetch("/performLogin", requestOptions)
		// 	.then(resp => resp.json())
		// 	.then(json => this.setState({userRcv: json}));


			
	}

	render() { 
		return ( 
			<>
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
								/>
							</div>
							<div className="form-group">
								<input 
									type="password" 
									className="form-control" 
									name='password' 
									placeholder="Enter password" 
									onChange={this.handleChange}
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