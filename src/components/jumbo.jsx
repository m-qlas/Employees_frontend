import React, { Component } from "react";

class Jumbo extends Component {
	constructor(props){
		super(props);
		
	}
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
		</>
	}
	
	
		
	
	
	
	renderText = () => {
		if(this.props.text === "get"){
			return this.state.getText;
		}
		else{
			return this.state.addText;
		}		
	};
	render() { 
		
		
		return ( 
			<div className="jumbotron" style={{marginTop: "1em", height: "15em" }}>
				<div className="container">
					<h2 className="display-4">Hello User!</h2>
					{this.renderText()}
					
	
				</div>
			</div> 
		);
	}
}
 
export default Jumbo;