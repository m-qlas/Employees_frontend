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
						</tr>
					</thead>
					<tbody>
						{this.row()}
					</tbody>
				</table>
			</React.Fragment> 
			
		);
	}
	row = ()=>{
		let laps = this.props.laps;
		console.log(laps);
		return(
			<tr>
				{/* <td>{laps.map((x) => {
					console.log(x);
				})}</td> */}
				{/* <td>{emp.laps[0].brand}</td>
				<td>{emp.laps[0].model}</td> */}
			</tr>
		);
	}
}


export default LapsTable;
