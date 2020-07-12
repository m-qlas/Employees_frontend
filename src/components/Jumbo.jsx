import React, { Component } from "react";

class Jumbo extends Component {
	
	state = { 
		getText : 
		<>
			<p>Test React SpringBoot Database App</p>
			<p>Insert Employee data to get specific Employee or Manager. <br/>
			Don't enter enything to get list of all employees.</p>
		</>,
		addEmpText : 
		<>
			<p>Test React SpringBoot Database App</p>
			<p>Insert Employee data and select one of the avaliable laptops. </p>
		</>,
		addLapText : 
		<>
			<p>Test React SpringBoot Database App</p>
			<p>Insert data of laptop you want to add </p>
		</>,
		logText : 
		<>
			<p>Test React SpringBoot Database App</p>
			<p>Please enter your credentials to gain access</p>
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