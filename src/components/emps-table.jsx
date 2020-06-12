import React, { Component } from "react";

class EmpTable extends Component {
	state = {  }
	render() { 
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
							<th></th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</React.Fragment> 
		);
	}
}
 
export default EmpTable;