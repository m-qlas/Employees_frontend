import React, { Component } from "react";
import Jumbo from "./Jumbo";
import GetEmpForm from "./GetEmpForm";
import EmpTable from "./EmpTable";
import LapsTable from "./LapsTable";
import AuthenticationService from "../services/AuthenticationService";
import axios from "axios";


class GetEmpSubpage extends Component {
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	state = { 
		text: "Employees",
		employee:[],
		tabs:[],
		progress: "0%",
		progBarClass: "progress-bar progress-bar-striped bg-success",
		selected: null
	}

	render() { 
		return ( 
			<>
				<Jumbo text={this.props.jumboText}/>
				<div className="container">
					<div className="row"> 
						<div className="col">
							{this.state.tabs.map(tab => tab)}
							<div className="progress">
								<div className = {this.state.progBarClass} id="bar" style={{width: this.state.progress}}></div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col">
							<GetEmpForm
								onSubmit={this.handleSubmit}
								onChange={this.handleChange}
								text={this.state.text}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}

	handleSubmit= async (e) => {
		e.preventDefault();
		await this.setState({progress: "100%"});

		if(this.state.text==="Employee"){
			switch(this.state.selected){
			case "id":
				await axios.get(`employee/id/${this.state.id}`)
					.then(resp =>  this.setState({employee: resp.data}));
				break;
			case "firstName":
				await axios.get(`employee/firstName/${this.state.firstName}`)
					.then(resp =>  this.setState({employee: resp.data}));
				break;
			case "lastName":
				await axios.get(`employee/lastName/${this.state.lastName}`)
					.then(resp =>  this.setState({employee: resp.data}));
				break;
			case "role":
				await axios.get(`employee/role/${this.state.role}`)
					.then(resp =>  this.setState({employee: resp.data}));
				break;
			case "department":
				await axios.get(`employee/department/${this.state.department}`)
					.then(resp =>  this.setState({employee: resp.data}));
				break;
			}
			
			//Check if employee exists
			if(this.state.employee.length !== 0){
				let emp;
				this.state.employee.length>1?emp=this.state.employee:emp=[this.state.employee[0]];
				
				this.setState({
					tabs: [
						<EmpTable key='emps'
							employee={emp}
							text={this.state.text}
							onDelete={this.handleDelete}
							onDetails = {this.props.onDetails} />,
					],
					progBarClass: "progress-bar progress-bar-striped bg-success"
				});
			}
			else{
				this.setState({
					tabs: [
						<p key='p'>Employee with selected paramaters doesn't exist</p>
					],
					progBarClass: "progress-bar progress-bar-striped bg-danger"
				});
			}
		}
		else{
			this.showAll();
		}
	}

	handleChange= (e) => {
		let nam = e.target.name;
		let val = e.target.value;
		this.setState({[nam]: val});
		this.setState({selected: nam});
		e.target.value === "" ? this.setState({text: "Employees"}) : this.setState({text: "Employee"});
	}

	handleDelete = async empId => {
		console.log("Deleting started");
		await fetch(`employee/${empId}`,{
			method: "DELETE"
		})
			.then(resp => resp.text())
			.then(text => this.setState({employee: text}));
		console.log("Deleting finished");
		this.showAll();
	}

	showAll = async () => {
		await axios.get("employees")
			.then(resp =>  this.setState({employee: resp.data}));
		this.setState({
			tabs: [
				<EmpTable key='emps'
					employee={this.state.employee}
					text={this.state.text}
					onDelete={this.handleDelete}
					onDetails={this.props.onDetails} 
				/>,
			],
			progBarClass: "progress-bar progress-bar-striped bg-success"
		});
	}
}


export default GetEmpSubpage;