import React, { Component } from "react";
import Jumbo from "./Jumbo";
import GetForm from "./GetForm";
import EmpTable from "./EmpTable";
import LapsTable from "./LapsTable";
import ManTable from "./ManTable";
import AuthenticationService from "../services/AuthenticationService";
import axios from "axios";


class Get extends Component {
	constructor(props){
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}
	state = { 
		requestId: 0,
		text: "Employees",
		employee:[],
		tabs:[],
		progress: "0%",
		progBarClass: "progress-bar progress-bar-striped bg-success"
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
							<GetForm
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

		// if(this.state.text==="Employee"){
		// 	await fetch(`employee/${this.state.requestId}`)
		// 		.then(resp => resp.json())
		// 		.then(json => this.setState({employee: json}));

		if(this.state.text==="Employee"){
			await axios.get(`employee/${this.state.requestId}`)
				.then(resp =>  this.setState({employee: resp.data}));
			//Check if employee exists
			if(this.state.employee.id !== 0){
				//Check if it's manager
				if(this.state.employee.managerName !== null){
					this.setState({
						tabs: [
							<EmpTable key='emps' 
								employee={this.state.employee} 
								text = {this.state.text}
								onDelete = {this.handleDelete}
							/>,
							<LapsTable key='laps' 
								laps={this.state.employee.laps}
							/>
						],
						progBarClass: "progress-bar progress-bar-striped bg-success",
						
					});
				}
				else{
					this.setState({
						tabs: [
							<ManTable key='man' manager={this.state.employee}/>,
							<LapsTable key='laps' laps={this.state.employee.laps}/>
						],
						progBarClass: "progress-bar progress-bar-striped bg-success"
					});
				}
			}
			else{
				this.setState({
					tabs: [
						<p key='p'>Employee with selected ID doesn't exist</p>
					],
					progBarClass: "progress-bar progress-bar-striped bg-danger"
				})
				;
			}
				
		}
		else{
			this.showAll();
		}
	}

	handleChange= (e) => {
		this.setState({requestId: e.target.value});
		e.target.value === "" ? this.setState({text: "Employees"}) : this.setState({text: "Employee"});
	}

	handleDelete = async empId => {
		await fetch(`employee/${empId}`,{
			method: "DELETE"
		})
			.then(resp => resp.text())
			.then(text => this.setState({employee: text}));
		
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
					onDelete={this.handleDelete} />,
			],
			progBarClass: "progress-bar progress-bar-striped bg-success"
		});
	}
}


export default Get;