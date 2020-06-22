import React, { Component } from "react";
import Jumbo from "./jumbo";
import AddForm from "./add-form";

class Add extends Component {
	state = { 
		employee:{},
		empRcv:{} 
	}

	handleChange = e => {
		let nam = e.target.name;
		let val = e.target.value;
		
		this.setState(prevState => {
			let employee = {... prevState.employee};
			employee[nam] = val;
			return {employee};
		});
	}

	handleSubmit= e => {
		e.preventDefault();
		console.log("Submit");

		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(this.state.employee)
		};

		fetch("employee", requestOptions)
			.then(resp => resp.json())
		 	.then(json => this.setState({empRcv: json}));
	}
	render() { 
		return ( 
			<>
				<Jumbo/>
				<div className="container">
					<AddForm
						onSubmit = {this.handleSubmit}
						onChange = {this.handleChange}
					/>
				</div>
			</>
		);
	}
}
 
export default Add;