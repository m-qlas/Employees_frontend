import React, { Component } from "react";
import Jumbo from "./Jumbo";
import axios from "axios";

class EmpDetailsSubpage extends Component {
	state = {  }
	componentDidMount = async () => {
		await axios.get(`employee/id/${this.state.id}`)
			.then(resp =>  this.setState({employee: resp.data}));
	
	}
	render() { 
		return ( 
			<Jumbo text='emdDet'/>
		);
	}
}
 


export default EmpDetailsSubpage;