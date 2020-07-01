import React, { Component } from "react";
import{BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Get from "./components/get";
import Add from "./components/add";
import LogForm from "./components/log-form";

class App extends Component {
	state = { 
		subpage:"",
		isLoading: true,
		isAuthenticated: false,
		user: undefined
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

	async componentDidMount() {
		const response = await fetch("/user", {credentials: "include"});
		const body = await response.text();
		if (body === "anonymousUser") {
			this.setState(({isAuthenticated: false}));
		}
		else {
			this.setState({isAuthenticated: true, user: body});
		}
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