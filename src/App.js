import React, { Component } from "react";
import Navbar from "./components/navbar";
import Get from "./components/get";
import Add from "./components/add";

class App extends Component {
	state = { 
		subpage:"",
	};
	
	handleGet = () => {
		this.setState({
			subpage: <Get jumboText="get" />,
		});
	}

	handleAdd = () => {
		this.setState({
			subpage: <Add jumboText="add"/>,
		});
	}

	render() { 
		return (
			<>
				<Navbar
					onGet = {this.handleGet}
					onAdd = {this.handleAdd} 
				/>
				<main className="containerl">
					{this.state.subpage}
				</main>
			</>

		);
	}
}
 
export default App;