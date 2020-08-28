import React, { Component } from "react";
import Jumbo from "./Jumbo";
import AddEmpForm from "./AddEmpForm";
import Axios from "axios";

class AddEmpSubpage extends Component {
	state = { 
		employee:{
			laps:[],
			manager:{},
			department:"qwerty",
			empDetails:{
				salary: 0,
				role: "",
				hireDate:""
			},
			man: ""
		},
		empRcv:{},
		showFailMessage: false,
		showSuccessMessage: false,
		
	}
	
	componentDidMount(){
		
	}
	handleChange = e => {
		let nam = e.target.name;
		let val;
		nam === "department"? val= JSON.parse(e.target.value): val=e.target.value ;
		
		this.setState(prevState => {
			let employee = {... prevState.employee};
			employee[nam] = val;
			return {employee};
		});
	}

	handleDepChange = e => {
		let nam = e.target.name;
		let val = JSON.parse(e.target.value);
		let deptName = this.state.employee.department.name;
		console.log(deptName);
		Axios.get(`employee/department/${deptName}`)
			.then(resp => this.setState({man: resp.data}));
		this.setState(prevState => {
			let employee = {... prevState.employee};
			employee[nam] = val;
			return {employee};
		});
	}

	handleDetChange = e => {
		let nam = e.target.name;
		let val = e.target.value;
				
		this.setState(prevState => {
			let employee = {... prevState.employee};
			employee.empDetails[nam] = val;
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
						onDetChange={this.handleDetChange}
						onDepChange={this.handleDepChange}
						laptop={this.state.laptop}
					/>
				</div>
			</>
		);
	}
}
 
export default AddEmpSubpage;