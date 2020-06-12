import React, { Component } from "react";
import Jumbo from "./jumbo";
import GetForm from "../getForm";
import EmpTable from "./emps-table";
import LapsTable from "./laps-table";

class Get extends Component {
	state = { 
		requestId: 0,
		employee:[]
	}
	render() { 
		return ( 
			<>
				<Jumbo/>
				<div className="container">
					<div className="row">
						<div className="col">
							<EmpTable/>
							<br></br>
							<LapsTable/>
							<br></br>
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
								requestId={this.state.requestId}
							/>
						</div>
					</div>
					<br></br>
				</div>
			</>
		);
	}

	handleSubmit= (e) => {
		//console.log("Form submitted", this.state.requestId);
		fetch(`employee/${this.state.requestId}`)
			.then(resp => resp.json())
			.then(json => this.setState({employee: json}));
			
		e.preventDefault(); //Stop from reloading page1
	}

	handleChange= (e)=> {
		this.setState({requestId: e.target.value});
		e.target.value === "" ? this.setState({btntext: "Show Employees"}) : this.setState({btntext: "Show Employee"});
	}
}


export default Get;