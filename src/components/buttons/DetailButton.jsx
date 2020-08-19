import React, { Component } from "react";
class DetailButton extends Component {
	state = {  }
	render() { 
		
		return ( 
			<button 
				type="button" 
				className="btn btn-outline-info" 
				onClick= {() => this.props.onDetails(this.props.id)}
			>
			Details
			</button> 
		);
	}
}
 
export default DetailButton;