import React, { Component } from "react";

class EmpTable extends Component {
	state = { 
		
	}
	
	
	render() { 
		let emp = this.props.employee;
		return (
			<React.Fragment>
				<h4>Employees</h4>
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
						<tr>
							<td>{emp.id}</td>
							<td>{emp.name}</td>
							<td>{emp.tech}</td>
						</tr>
					</tbody>
				</table>
			</React.Fragment> 
		);
	}

	

	
}


 
export default EmpTable;