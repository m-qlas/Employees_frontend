import React, { Component } from "react";

class GetForm extends Component {
	
	state = { 
		
	}
	
	
	handleKeydown = (e) => {
		if(e.charCode ===13){
			this.handleSubmit();
		}
	}
	
			
	render() { 
		return (
			<React.Fragment>
				
				<form onSubmit={this.props.onSubmit}>
					<input 
						type="text" 
						className="form-control" 
						placeholder="Employee ID" 
						style={{
							marginBottom: "12px",
							marginTop:"12px"
						}}
						//value = {this.state.employeeId}
						onChange={this.props.onChange}
						onKeyDown={this.handleKeydown}
					/>
					<button 
						type="submit" 
						className="btn btn-primary"
					>
						{this.props.btnText}
					</button>
				</form>
			</React.Fragment>
		);
	}
}
		
export default GetForm;