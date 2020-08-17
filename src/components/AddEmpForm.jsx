import React, { Component } from "react";
class AddEmpForm extends Component {
	state = { 
		laps: [],
		managers: [],
	}
	async componentDidMount(){
		await fetch("laps")
			.then(resp => resp.json())
			.then(json => this.setState({laps: json}));

		await fetch("managers")
			.then(resp => resp.json())
			.then(json => this.setState({managers: json}));
	}
	render() { 
		return ( 
			<>
				<form  onSubmit={this.props.onSubmit}>
					<div className='row'>
						<div className='col'>
							<h5>Enter employee data</h5>
														
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='firstName' 
									placeholder="First name" 
									onChange={this.props.onChange}
								/>
							</div>
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='lastName' 
									placeholder="Last name" 
									onChange={this.props.onChange}
								/>
							</div>
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='department' 
									placeholder="Department" 
									onChange={this.props.onChange}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="#managerSelect">Select Manager</label>
								<select 
									className="form-control" 
									name='manager' 
									id="managerSelect"
									onChange={this.props.onChange}
									
								>
									{this.state.managers.map((man => (
										<option key={man.id} value={JSON.stringify(man)}>
											{man.firstName} 
										</option>
									)))}
								</select>
							</div>
							{/* <div className="form-group">
								<input 
									type="number" 
									className="form-control" 
									name='salary' 
									placeholder="Salary" 
									onChange={this.props.onChange}
								/>
							</div> */}
						</div>
						<div className='col'>
							<h5>Select laptop for new employee</h5>
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
					</div>
					<button 
						type="submit" 
						className="btn btn-primary"
					>
						Add Employee
					</button>
				</form>
			</>
		);
	}
}
 
export default AddEmpForm;