import React, { Component } from "react";

class Jumbo extends Component {
	state = {  }
	render() { 
		return ( 
			<div className="jumbotron" style={{marginTop: "1em", height: "15em" }}>
				<div className="container">
					<h2 className="display-4">Hello User!</h2>
					<p>Test database SpringBoot Rest App</p>
					<p>Insert Employee ID to get specific Employee or Manager. <br/>
						Don't enter ID to get list of all employees.</p>
	
				</div>
			</div> 
		);
	}
}
 
export default Jumbo;