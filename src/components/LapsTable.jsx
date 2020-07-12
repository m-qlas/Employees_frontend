import React, { Component } from "react";

class LapsTable extends Component {
	
	state = { 
		data: this.props.laps,
		sortAsc: false
	}

	static getDerivedStateFromProps(props, state){
		if(state.data !== props.laps){
			return{
				data: props.laps
			};
		}
		return null;
	}

	onSort(event, sortKey){
		let asc = this.state.sortAsc;
		const data = this.state.data;
		
		if(asc){
			console.log("ASC");
			data.sort((a,b)=>{
				if(a[sortKey] < b[sortKey])
					return -1;
			});
			this.setState({sortAsc:false});
		}
		else{
			console.log("DESC");
			data.sort((a,b)=>{
				if(a[sortKey] > b[sortKey])
					return -1;
			});
			this.setState({sortAsc:true});
			
		}
	}
	
	render() {
		let laps = this.state.data;
	
		return (
			<React.Fragment>
				<h4>Laptops</h4>
				<table className="table table-striped" id="lap">
					<thead>
						<tr>
							<th onClick={e => this.onSort(e,"lId")}>ID</th>
							<th onClick={e => this.onSort(e,"brand")}>Brand</th>
							<th onClick={e => this.onSort(e,"model")}>Model</th>
						</tr>
					</thead>
					<tbody>
						{laps.map((lap)=> (
							<tr key={lap.lId}>
								{Object.values(lap).map((val) => (
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
