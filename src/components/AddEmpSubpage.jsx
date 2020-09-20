import React, { Component } from "react";
import Jumbo from "./Jumbo";
import AddEmpForm from "./AddEmpForm";
import Axios from "axios";

class AddEmpSubpage extends Component {
	state = { 
		employee:{
			laps:[],
			manager:{},
			department:{},
			eDetails:{
				salary: 0,
				role: "",
				hireDate:""
			},
			man: ""
		},
		showFailMessage: false,
		showSuccessMessage: false,
		
	}
	
	async componentDidMount(){
		await fetch("laps")
			.then(resp => resp.json())
			.then(json => this.setState(prevState => {
				let employee = {... prevState.employee};
				employee.laps[0] = json[0];
				return {employee};
			}));

		await fetch("departments")
			.then(resp => resp.json())
			.then(json => this.setState(prevState => {
				let employee = {... prevState.employee};
				employee.department = json[0];
				return {employee};
			}));
		
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
		let deptName = val.name;
		Axios.get(`manager/${deptName}`)
			.then(resp => this.setState(prevState => {
				let employee = {... prevState.employee};
				employee[nam] = val;
				employee.manager = resp.data;
				return {employee};
			}));
	}

	handleDetChange = e => {
		let nam = e.target.name;
		let val = e.target.value;
				
		this.setState(prevState => {
			let employee = {... prevState.employee};
			employee.eDetails[nam] = val;
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