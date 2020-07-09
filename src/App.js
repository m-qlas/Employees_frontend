import React, { Component } from "react";
import{BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Get from "./components/Get";
import Add from "./components/Add";
import LogForm from "./components/LogForm";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import AddLaptop from "./components/AddLaptop";

class App extends Component {
	state = { 
		subpage:<Get jumboText="get" />
	};
	
	handleGet = () => {this.setState({subpage: <Get jumboText="get" />});}
	handleEmpAdd = () => {this.setState({subpage: <Add jumboText="addEmp"/>});}
	handleLapAdd = () => {this.setState({subpage: <AddLaptop jumboText="addLap"/>});}
	
	
	render() { 
		return (
			<Router>
				<Switch>
					<AuthenticatedRoute exact path='/'>
						<Navbar
							onGet = {this.handleGet}
							onEmpAdd = {this.handleEmpAdd}
							onLapAdd = {this.handleLapAdd} 
						/>
						{this.state.subpage}
					</AuthenticatedRoute>
					<Route exact path='/login' component={LogForm}/>
				</Switch> 
			</Router>
		);
	}
}
 
export default App;