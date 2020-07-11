import React, { Component } from "react";
import DelButton from "./DelButton";

class EmpTable extends Component {
	
	state = {
		data: this.props.employee,
		sortAsc: false
	}
	
	onSort(event, sortKey){
		let asc = this.state.sortAsc;
		const data = this.state.data;
		
		if(asc){
			data.sort((a,b)=>{
				if(a[sortKey] < b[sortKey])
					return -1;
			});
			asc = true;
		}
		else{
			data.sort((a,b)=>{
				if(a[sortKey] < b[sortKey])
					return 1;
			});
			this.setState({data});
			asc=false;
		}
		

		
	}
	render() { 
		let emps = [];

		if(!Array.isArray(this.state.data)){
			emps.push(this.state.data);
		}
		else{
			emps=this.state.data;
		}

		return (
			<React.Fragment>
				<h4>{this.props.text}</h4>
				<table className="table table-striped">
					<thead>
						<tr>
							<th onClick={e => this.onSort(e,"id")}>ID</th>
							<th onClick={e => this.onSort(e,"name")}>Name</th>
							<th onClick={e => this.onSort(e,"tech")}>Technology</th>
							<th onClick={e => this.onSort(e,"managerName")}>Manager</th>
						</tr>
					</thead>
					<tbody>
						{emps.map((emp)=> (
							<tr key={emp.id} >
								<td>{emp.id}</td>
								<td>{emp.name}</td>
								<td>{emp.tech}</td>
								<td>{emp.managerName}</td>
								<td>
									<DelButton
										onDelete={this.props.onDelete}
										id={emp.id}
									/>
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