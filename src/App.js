import React, { Component } from "react";
import{BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Get from "./components/get";
import Add from "./components/add";
import LogForm from "./components/log-form";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

class App extends Component {
	state = { 
		subpage:<Get jumboText="get" />,
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

	
	
	render() { 
		return (
			
			<Router>
				<Switch>
					<AuthenticatedRoute exact path='/'>
						<Navbar
							onGet = {this.handleGet}
							onAdd = {this.handleAdd} 
						/>
						<main className="container">
							{this.state.subpage}
						</main>
					</AuthenticatedRoute>
					<Route exact path='/login' component={LogForm}/>
				</Switch> 
			</Router>

		);
	}
}
 
export default App;