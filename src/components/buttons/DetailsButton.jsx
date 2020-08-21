import React, { Component } from "react";
class DetailsButton extends Component {
	state = {  }
	render() { 
		
		return ( 
			<button 
				type="button" 
				className="btn btn-outline-info" 
				onClick= {this.props.onDetails}
			>
			Details
			</button> 
		);
	}
}
 
export default DetailsButton;