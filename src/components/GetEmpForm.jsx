import React, { Component } from "react";

class GetEmpForm extends Component {
	
	state = { }
	
	handleKeydown = (e) => {
		if(e.charCode ===13){
			this.handleSubmit();
		}
	}
	
	render() { 
		return (
			<>
				<form onSubmit={this.props.onSubmit}>
					<div className='form-row'>
						<div className="col">
							<input 
								type="text" 
								className="form-control" 
								placeholder="Employee ID" 
								name="id"
								style={{
									marginBottom: "12px",
									marginTop:"12px"
								}}
								//value = {this.state.employeeId}
								onChange={this.props.onChange}
								onKeyDown={this.handleKeydown}
								
							/>
						</div>
						<div className="col">
							<input 
								type="text" 
								className="form-control" 
								placeholder="First name" 
								name="firstName"
								style={{
									marginBottom: "12px",
									marginTop:"12px"
								}}
								//value = {this.state.employeeId}
								onChange={this.props.onChange}
								onKeyDown={this.handleKeydown}
							/>
						</div>
	
						<div className="col">
							<input 
								type="text" 
								className="form-control"
								name='lastName' 
								placeholder="Last name" 
								style={{
									marginBottom: "12px",
									marginTop:"12px"
								}}
								//value = {this.state.employeeId}
								onChange={this.props.onChange}
								onKeyDown={this.handleKeydown}
							/>
						</div>

						<div className="col">
							<input 
								type="text" 
								className="form-control"
								name='role' 
								placeholder="Role" 
								style={{
									marginBottom: "12px",
									marginTop:"12px"
								}}
								//value = {this.state.employeeId}
								onChange={this.props.onChange}
								onKeyDown={this.handleKeydown}
							/>
						</div>

						<div className="col">
							<input 
								type="text" 
								className="form-control"
								name='department' 
								placeholder="Department" 
								style={{
									marginBottom: "12px",
									marginTop:"12px"
								}}
								//value = {this.state.employeeId}
								onChange={this.props.onChange}
								onKeyDown={this.handleKeydown}
							/>
						</div>
					</div>
					
					<button 
						type="submit" 
						className="btn btn-primary"
					>
						Show {this.props.text}
					</button>
				</form>
			</>
		);
	}
}
		
export default GetEmpForm;