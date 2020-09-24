import React, { Component } from "react";
import DelButton from "./buttons/DelButton";
import LapModal from "./LapModal";
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
							<th>
								<LapModal 
									buttonLabel = "Add" 
									laps= {this.state.freeLaps} 
									onAdd = {this.props.onAdd}
									onChange = {this.props.onChange}/> 
							</th>
						</tr>
					</thead>
					<tbody>
						{laps.map((lap) => (
							<tr key={lap.lId}>
								<td>{lap.lId}</td>
								<td>{lap.brand}</td>
								<td>{lap.model}</td>
								<td><DelButton onDelete={this.props.onDelete} id={lap.lId} /></td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment> 
		);
	}
}

export default LapsTable;
