import React, { Component } from "react";
class DelButton extends Component {
	state = {  }
	render() { 
		return ( 
			<button 
				type="button" 
				className="btn btn-outline-danger" 
				onClick= {() => this.props.onDelete(this.props.id)}
			>
			Delete
			</button> 
		);
	}
}
export default DelButton;