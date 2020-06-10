import React, { Component } from "react";

class Jumbo extends Component {
	state = {  }
	render() { 
		return ( <div className="jumbotron">
			<div className="container">
				<h2 className="display-4">Hello User!</h2>
				<p>Test database SpringBoot Rest App</p>
				<p>Insert Employee ID to get specific Employee or don't enter ID to get all aliens</p>
	
			</div>
		</div> 
		);
	}
}
 
export default Jumbo;