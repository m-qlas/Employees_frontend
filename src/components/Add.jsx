import React, { Component } from "react";
import Jumbo from "./Jumbo";
import AddEmpForm from "./AddEmpForm";
import Axios from "axios";

class Add extends Component {
	state = { 
		employee:{
			laps:[],
			manager:{}
		},
		empRcv:{},
		showFailMessage: false,
		showSuccessMessage: false,
		
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

		Axios.post("employee", this.state.employee)
			.then(resp => this.setState({empRcv: resp.data, showSuccessMessage: true, showFailMessage:false})
			).catch(()=> {this.setState({showFailMessage: true, showSuccessMessage:false});});
	}
	
	
	render() { 
		return ( 
			<>
				<Jumbo text={this.props.jumboText}/>
				<div className="container">
					{this.state.showFailMessage && <div className="alert alert-warning">Provide complete data for employee</div>}
					{this.state.showSuccessMessage && <div className="alert alert-success">Employee added!</div>}
					<AddEmpForm
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