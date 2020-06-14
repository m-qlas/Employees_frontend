import React, { Component } from "react";
import Jumbo from "./jumbo";
import GetForm from "./getForm";
import EmpTable from "./emps-table";
import LapsTable from "./laps-table";

class Get extends Component {
	state = { 
		requestId: 0,
		btnText: "Show Employees",
		employee:[],
		empTabVis: false,
		lapsTabVis: false,
		tabs:[]
	}

	appendTab = () =>{
		this.setState({
			tabs: [
				<EmpTable employee={this.state.employee}/>,
				<LapsTable laps={this.state.employee.laps}/>
			]
		});
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
								<div className="progress-bar progress-bar-striped bg-danger" id="bar" style={{width: "0%"}}></div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col">
							<GetForm
								onSubmit={this.handleSubmit}
								onChange={this.handleChange}
								btnText={this.state.btnText}
							/>
						</div>
					</div>
					<br></br>
				</div>
			</>
		);
	}

	handleSubmit= (e) => {
		fetch(`employee/${this.state.requestId}`)
			.then(resp => resp.json())
			.then(json => this.setState({employee: json}));
		
		e.preventDefault(); //Prevent from reloading page1
	}

	handleChange= (e)=> {
		this.setState({requestId: e.target.value});
		e.target.value === "" ? this.setState({btnText: "Show Employees"}) : this.setState({btnText: "Show Employee"});
	}
}


export default Get;