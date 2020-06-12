import React, { Component } from "react";

class LapsTable extends Component {
	state = {  }
	render() { 
		return (
			<React.Fragment>
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
						
					</tbody>
				</table>
			</React.Fragment> 
			
		);
	}
}
 
export default LapsTable;
