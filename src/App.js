import React, { Component } from "react";
import{BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Get from "./components/get";
import Add from "./components/add";
import LogForm from "./components/log-form";

class App extends Component {
	state = { 
		subpage:"",
		isLogged:false
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

	componentDidMount(){
		fetch();
	}
	
	render() { 
		return (
			
			<Router>
				<Switch>
					<Route exact path='/'>
						<Navbar
							onGet = {this.handleGet}
							onAdd = {this.handleAdd} 
						/>
						<main className="container">
							{this.state.subpage}
						</main>
					</Route>
					<Route exact path='/login'>
						<LogForm/>
					</Route>
				</Switch> 
			</Router>

		);
	}
}
 
export default App;