import React, { Component } from "react";
import Jumbo from "./jumbo";
import GetForm from "../getForm";

class Get extends Component {
	state = {  }
	render() { 
		return ( 
			<>
				<Jumbo/>
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="result">
								<h4>Employees</h4>
								<table className="table table-striped">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Technology</th>
											<th>Manager</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
	
										</tr>
									</tbody>
								</table>
								<br></br>
								<h4>Laptops</h4>
								<table className="table table-striped" id="lap">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Processor</th>
											<th>Ram [GB]</th>
										</tr>
									</thead>
									<tbody>
										<tr>
	
										</tr>
									</tbody>
								</table>
								<br></br>
								<div className="progress">
									<div className="progress-bar progress-bar-striped bg-danger" id="bar" style={{width: "0%"}}></div>
								</div>
							</div>
						</div>
	
					</div>
					<div className="row">
						<br/>
					</div>
					<div className="row">
						<div className="col">
							<GetForm/>
						</div>
					</div>
					<br></br>
					<form action="logout">
						<input type="submit" className="btn btn-info" value="logout"/>
					</form>
			
				</div>
			</>
		);
	}
}
 
export default Get;