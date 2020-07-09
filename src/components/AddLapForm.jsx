import React, { Component } from "react";
class AddLapForm extends Component {
	state = { 
		
	}
	
	render() { 
		return ( 
			<>
				<form onSubmit={this.props.onSubmit}>
					<div className='row'>
						<div className='col'>
							<h5>Enter laptop data</h5>
														
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='brand' 
									placeholder="Brand" 
									onChange={this.props.onChange}
								/>
							</div>
							<div className="form-group">
								<input 
									type="text" 
									className="form-control" 
									name='model' 
									placeholder="Model" 
									onChange={this.props.onChange}
								/>
							</div>
						</div>
					</div>
					<button 
						type="submit" 
						className="btn btn-primary"
					>
						Add Laptop
					</button>
				</form>
			</>
		);
	}
}
 
export default AddLapForm;