import React, { Component } from "react";
class AddEmpForm extends Component {
	state = { 
		laps: [],
		managers: [],
		departments: []
	}
	async componentDidMount(){
		await fetch("laps")
			.then(resp => resp.json())
			.then(json => this.setState({laps: json}));

		await fetch("departments")
			.then(resp => resp.json())
			.then(json => this.setState({departments: json}));
	}
	render() { 
		return ( 
			<>
				<form  onSubmit={this.props.onSubmit}>
					<div className='row'>
						<div className='col'>
							<label>Enter employee data</label>
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='firstName' 
									placeholder="First name" 
									onChange={this.props.onChange}
									
								/>
							</div>

							<div>
								<input 
									type="text" 
									className="form-control" 
									name='lastName' 
									placeholder="Last name" 
									onChange={this.props.onChange}
								/>
							</div>
							<br/>
							<div className="form-group">
								<label htmlFor="depSelect">Select department</label>
								<select 
									className="form-control" 
									name='department' 
									id="depSelect"
									onChange={this.props.onDepChange}
								>
									{this.state.departments.map((dep => (
										<option key={dep.id} value={JSON.stringify(dep)}>
											{dep.name} 
										</option>
									)))}
								</select>
							</div>
						</div>
						<div className='col'>
							<div className='form-group'>
								<label>Select laptop for new employee</label>
								<select 
									className="form-control" 
									id="laptopSelect"
									value={this.props.laptop}
									onChange={this.props.onLapChange}
								>
									{this.state.laps.map((lap => (
										<option 
											key={lap.id} 
											value={JSON.stringify(lap)}
										>
											{lap.lId}. {lap.brand} {lap.model}
										</option>
									)))}
								</select>
							</div>
							<div className='form-group'>
								<label>Enter job details</label>
								<input 
									type="number" 
									className="form-control" 
									name='salary' 
									placeholder="Salary" 
									onChange={this.props.onDetChange}
								/>
							</div>

							<div className='form-group'>
								<input 
									type="text" 
									className="form-control" 
									name='role' 
									placeholder="Role" 
									onChange={this.props.onDetChange}
								/>
							</div>
								
							<div className='form-group'>
								<label htmlFor="hireDate">Enter hire date</label>
								<input 
									type="date" 
									className="form-control" 
									name='hireDate'
									id="hireDate" 
									placeholder="Hire date"
									onChange={this.props.onDetChange}
								/>
							</div>
						</div>	
					</div>
					
					<button 
						type="submit" 
						className="btn btn-primary"
					>
						Add Employee
					</button>
				</form>
			</>	);
	}
}
 
export default AddEmpForm;