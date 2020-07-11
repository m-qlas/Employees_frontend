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
							<th>Brand</th>
							<th>Model</th>
						</tr>
					</thead>
					<tbody>
						{this.props.laps.map((laps)=> (
							<tr key={laps.lId}>
								{Object.values(laps).map((val) => (
									<td key={val.toString()}>{val}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment> 
			
		);
	}
	// row = ()=>{
	// 	let laps = this.props.laps;
	// 	console.log(laps);
	// 	return(
	// 		<tr>
	// 			{for(let i=0;i<{this.props.laps.length};i++)
	// 			{

	// 			}}
	// 			<td>{}</td> 
	// 			 <td></td>
	// 			<td>{}</td>
	// 		</tr>
	// 	);
	// }
}


export default LapsTable;
