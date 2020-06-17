import React, { Component } from "react";

class EmpTable extends Component {
	
	
	
	render() { 
		let emps = [];
		if(!Array.isArray(this.props.employee)){
			emps.push(this.props.employee);
		}
		else{
			emps=this.props.employee;
		}
		
		return (
			<React.Fragment>
				<h4>{this.props.text}</h4>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Technology</th>
							<th>Manager</th>
						</tr>
					</thead>
					<tbody>
						
						{emps.map((emp)=> (
							<tr key={emp.id}>
								<td>{emp.id}</td>
								<td>{emp.name}</td>
								<td>{emp.tech}</td>
								<td>{emp.managerName}</td>
								<td>
									<button 
										type="button" 
										className="btn btn-outline-danger" 
										onClick={() => this.props.onDelete(emp.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
						
					</tbody>
				</table>
			</React.Fragment> 
		);
	}

	

	
}


 
export default EmpTable;