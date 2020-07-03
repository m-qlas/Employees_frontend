import React, { Component } from "react";
import{BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Get from "./components/Get";
import Add from "./components/Add";
import LogForm from "./components/LogForm";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

class App extends Component {
	state = { 
		subpage:<Get jumboText="get" />
		
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