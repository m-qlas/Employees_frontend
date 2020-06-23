import React, { Component } from "react";
import Jumbo from "./jumbo";
import AddForm from "./add-form";

class Add extends Component {
	state = { 
		employee:{
			laps:[],
			manager:{}
		},
		empRcv:{},
		
	}

	
	handleChange = e => {
		let nam = e.target.name;
		let val;
		nam === "manager"? val= JSON.parse(e.target.value): val=e.target.value ;
		
		this.setState(prevState => {
			let employee = {... prevState.employee};
			employee[nam] = val;
			return {employee};
		});
	}

	handleLapChange = e => {
		let array = this.state.employee.laps.slice();
		array[0]=(JSON.parse(e.target.value));
		const newEmp = { ...this.state.employee, laps: array};
		this.setState({employee: newEmp});
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
	
	componentDidMount(){
		
	}
	render() { 
		return ( 
			<>
				<Jumbo/>
				<div className="container">
					<AddForm
						onSubmit = {this.handleSubmit}
						onChange = {this.handleChange}
						onLapChange={this.handleLapChange}
						laptop={this.state.laptop}
					/>
				</div>
			</>
		);
	}
}
 
export default Add;