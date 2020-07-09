import React, { Component } from "react";
import Jumbo from "./Jumbo";
import AddLapForm from "./AddLapForm";
import Axios from "axios";

class AddLaptop extends Component {
	state = { 
		laptop:{},
		response: ""		
	}

	handleChange = e => {
		let nam = e.target.name;
		let val =e.target.value ;
		
		this.setState(prevState => {
			let laptop = {... prevState.laptop};
			laptop[nam] = val;
			return {laptop};
		});
	}

	handleSubmit= e => {
		e.preventDefault();
		console.log("Submit");

		Axios.post("laptop", this.state.laptop)
			.then(resp => this.setState({response: resp.data}));
	}
	
	
	render() { 
		return ( 
			<>
				<Jumbo text={this.props.jumboText}/>
				<div className="container">
					<AddLapForm
						onSubmit = {this.handleSubmit}
						onChange = {this.handleChange}
					/>
				</div>
			</>
		);
	}
}
 
export default AddLaptop;