import React, { Component } from "react";
import Jumbo from "./Jumbo";
import LapsTable from "./LapsTable";
import axios from "axios";

class EmpDetailsSubpage extends Component {
	state = { 
		employee: null,
		changedLap: null,
		recvLap: null
	}

	componentDidMount = async() => {
		console.log("ComponentDidMount");
		await axios.get(`employee/id/${this.props.id}`)
			.then(resp =>  this.setState({employee: resp.data}));
	}

	handleChange = e => {
		// let array = this.state.employee[0].laps;
		// array[1]= (JSON.parse(e.target.value));
		// this.setState(prevState => {
		// 	let employee = {...prevState.employee};
		// 	employee.laps = array;
		// 	return {employee};
		// });
		this.setState({changedLap: JSON.parse(e.target.value)});
	}

	handleAdd = async() => {
		let lap = this.state.changedLap;
		console.log("handleAdd");
		await axios.put(`laptop/update/${lap.lId}`, this.state.employee[0])
			.then(resp => this.setState({recvLap: resp.data}));
		await axios.get(`employee/id/${this.props.id}`)
			.then(resp =>  this.setState({employee: resp.data}));
	}

	handleDelete = async lId => {
		await fetch(`laptop/${lId}`,{
			method: "PUT"
		});
		await axios.get(`employee/id/${this.props.id}`)
			.then(resp =>  this.setState({employee: resp.data}));
	}

	render() {
		let emp;
		let isManager = false;
		let carInf;
		if(this.state.employee!==null) {
			emp = this.state.employee[0]; 
			emp.car===undefined?isManager=false:isManager=true;
		}
		if(isManager){carInf = <li className="list-group-item"><b>Car:</b> {emp.car.brand} {emp.car.model}</li>;}
				
		return (
			<> 
				<Jumbo text='empDet'/>
				<div className= 'container'>
					<div className='row'>
						{this.state.employee!==null && !isManager?
							<h4>Employee details</h4>
							:
							<h4>Manager details</h4>}
					</div>
					<div className = 'row'>
						<div className = 'col'>
							{this.state.employee===null? 
								<p>Loading</p>
								:
								<ul className="list-group">
									<li className="list-group-item"><b>ID:</b> {emp.id}</li>
									<li className="list-group-item"><b>First name:</b> {emp.firstName}</li>
									<li className="list-group-item"><b>Last name:</b> {emp.lastName}</li>
									<li className="list-group-item"><b>Department:</b> {emp.departmentName}</li>
								</ul>
							}
						</div>
						<div className = 'col'>
							{this.state.employee===null? 
								<p>Loading</p>
								:
								<ul className="list-group">
									<li className="list-group-item"><b>Hire date:</b> {emp.eDetails.hireDate}</li>
									<li className="list-group-item"><b>Role:</b> {emp.eDetails.role}</li>
									<li className="list-group-item"><b>Salary:</b> {emp.eDetails.salary}</li>
									{carInf}
								</ul>
							}
						</div>
					</div>
					<br/>
					<br/>
					<div className="row">
						{this.state.employee===null? 
							<p>Loading</p>
							:
							<LapsTable key='laps' 
								onAdd={this.handleAdd} 
								onChange={this.handleChange} 
								onDelete={this.handleDelete}
								laps={emp.laps}/>
						}
					</div>
				</div>
			</>
		);
	}
}
 
export default EmpDetailsSubpage;