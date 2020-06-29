import React, { Component } from "react";
import Jumbo from "./jumbo";

class LogForm extends Component {
	state = {
		user:{
			username:"",
			password:""
		},
		userRcv:{}
		
	}

	handleChange = e => {
		let nam = e.target.name;
		let val =e.target.value ;
		
		this.setState(prevState => {
			let user = {... prevState.user};
			user[nam] = val;
			return {user};
		});
	}

	handleSubmit = e =>{
		e.preventDefault();
		console.log("Submit");
		
		
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state.user)
		};

		fetch("login", requestOptions)
			.then(resp => resp.json())
			.then(json => this.setState({userRcv: json}));
	}
	render() { 
		return ( 
			<>
				<Jumbo
					text={this.props.jumboText}
				/>
				<form className='container' onSubmit={this.handleSubmit}>
					<div className='row'>
						<div className='col'>
							
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
						type="submit" 
						className="btn btn-primary"
					>
						Login
					</button>
				</form>
			
			</>
		);
	}
}
 
export default LogForm;