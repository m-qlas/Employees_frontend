import React, { Component } from "react";

class GetForm extends Component {
	
	state = { }
	
	handleKeydown = (e) => {
		if(e.charCode ===13){
			this.handleSubmit();
		}
	}
	
	render() { 
		return (
			<React.Fragment>
				
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
								placeholder="Name" 
								name="name"
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
								name='tech' 
								placeholder="Technology" 
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
			</React.Fragment>
		);
	}
}
		
export default GetForm;