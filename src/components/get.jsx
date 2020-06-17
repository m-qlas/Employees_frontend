import React, { Component } from "react";
import Jumbo from "./jumbo";
import GetForm from "./getForm";
import EmpTable from "./emps-table";
import LapsTable from "./laps-table";
import ManTable from "./man-table";

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
				<Jumbo/>
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

		if(this.state.text==="Employee"){
			await fetch(`employee/${this.state.requestId}`)
				.then(resp => resp.json())
				.then(json => this.setState({employee: json}));
			//Check if employee exists
			if(this.state.employee.id !== 0){
				//Check if it's manager
				if(this.state.employee.managerName !== null){
					this.setState({
						tabs: [
							<EmpTable key='emps' 
								employee={this.state.employee} 
								text = {this.state.text}
								onDelete = {this.handleDelete()}
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
			await fetch("employees")
				.then(resp => resp.json())
				.then(json => this.setState({employee: json}));
	
			this.setState({
				tabs: [
					<EmpTable key='emps' employee={this.state.employee} text = {this.state.text}/>,
				],
				progBarClass: "progress-bar progress-bar-striped bg-success"
			});
		}
	}

	handleChange= (e) => {
		this.setState({requestId: e.target.value});
		e.target.value === "" ? this.setState({text: "Employees"}) : this.setState({text: "Employee"});
	}

	handleDelete = empId => {
		fetch(`employee/${empId}`,{
			method: "DELETE"
		})
			.then(resp => resp.text())
			.then(text => this.setState({employee: text}));
	}
}


export default Get;