import React, { Component } from "react";

class Jumbo extends Component {
	
	state = { 
		getText : 
		<>
			<p>Test database SpringBoot Rest App</p>
			<p>Insert Employee ID to get specific Employee or Manager. <br/>
			Don't enter ID to get list of all employees.</p>
		</>,
		addEmpText : 
		<>
			<p>Test database SpringBoot Rest App</p>
			<p>Insert Employee data and select one of the avaliable laptops. <br/>
			Rest will be added...</p>
		</>,
		addLapText : 
		<>
			<p>Test database SpringBoot Rest App</p>
			<p>Insert data of laptop you want to add <br/>
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
		let text = this.props.text;
		switch(this.props.text){
		case "get":
			return this.state.getText;
		case "addEmp":
			return this.state.addEmpText;
		case "addLap":
			return this.state.addLapText;
		default:
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