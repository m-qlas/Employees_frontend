import React, { Component } from "react";
import Jumbo from "./Jumbo";
import AddLapForm from "./AddLapForm";
import Axios from "axios";

class AddLapSubpage extends Component {
	state = { 
		laptop:{
			"brand": "",
			"model": ""
		},
		response: "",
		showFailMessage: false,
		showSuccessMessage: false		
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
		const postOptions = {headers : "Content-Type: application/json"};
		e.preventDefault();
		
		if(this.state.laptop.brand === "" || this.state.laptop.model === ""){
			console.log("Input data not correct");
			this.setState({showFailMessage:true, showSuccessMessage:false});
		}
		else{
			console.log("Submit");
			Axios.post("laptop", this.state.laptop, postOptions)
				.then(resp => this.setState({response: resp.data, showSuccessMessage: true, showFailMessage:false})
				).catch(()=> {this.setState({showFailMessage: true, showSuccessMessage:false});});
		}
	}
	
	
	render() { 
		return ( 
			<>
				<Jumbo text={this.props.jumboText}/>
				<div className="container">
					{this.state.showFailMessage && <div className="alert alert-warning">Provide complete data of laptop</div>}
					{this.state.showSuccessMessage && <div className="alert alert-success">Laptop added!</div>}
					<AddLapForm
						onSubmit = {this.handleSubmit}
						onChange = {this.handleChange}
					/>
				</div>
			</>
		);
	}
}
 
export default AddLapSubpage;