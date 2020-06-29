import React, { Component } from "react";

class Jumbo extends Component {
	
	state = { 
		getText : 
		<>
			<p>Test database SpringBoot Rest App</p>
			<p>Insert Employee ID to get specific Employee or Manager. <br/>
			Don't enter ID to get list of all employees.</p>
		</>,
		addText : 
		<>
			<p>Test database SpringBoot Rest App</p>
			<p>Insert Employee data and select one of the avaliable laptops. <br/>
			Rest will be added...</p>
		</>,
		logText : 
		<>
			<p>Test database SpringBoot Rest App</p>
			<p>Please enter your credentials to gain access<br/>
			Rest will be added...</p>
		</>
	}
	
	
		
	
	
	
	renderText = () => {
		if(this.props.text === "get"){
			return this.state.getText;
		}
		else if(this.props.text ==="add"){
			return this.state.addText;
		}
		else{
			return this.state.logText;
		}		
	};
	render() { 
		
		
		return ( 
			<div className="jumbotron" style={{marginTop: "1em", height: "15em" }}>
				<div className="container">
					<h1 className="display-5">Hello User!</h1>
					{this.renderText()}
					
	
				</div>
			</div> 
		);
	}
}
 
export default Jumbo;