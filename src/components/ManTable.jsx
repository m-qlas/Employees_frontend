import React, { Component } from "react";

class ManTable extends Component {
	state = { 

	}
	
	render() { 
		let manager = this.props.manager;
		
		return (
			<React.Fragment>
				<h4>Manager</h4>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Technology</th>
							<th>Subordinates</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{manager.id}</td>
							<td>{manager.name}</td>
							<td>{manager.tech}</td>
							<td>
								{this.props.manager.subordinates.map((sub) => (
									<span key= {sub.id}>{sub.name} </span>
								))}
							</td>
						</tr>
					</tbody>
				</table>
				<br/>
				<h4>Car</h4>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Brand</th>
							<th>Model</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{manager.car.brand}</td>
							<td>{manager.car.model}</td>
						</tr>
					</tbody>
				</table>
			</React.Fragment> 
		);
	}

 
	
}
 
export default ManTable;