import React, { Component } from "react";
import{BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import GetEmpSubpage from "./components/GetEmpSubpage";
import AddEmpSubpage from "./components/AddEmpSubpage";
import LogForm from "./components/LogForm";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import AddLapSubpage from "./components/AddLapSubpage";
import EmpDetailsSubpage from "./components/EmpDetailsSubpage";

class App extends Component {
	state = { 
		subpage:<GetEmpSubpage jumboText="get" />
	};
	
	handleGet = () => {this.setState({subpage: <GetEmpSubpage jumboText="get" />});}
	handleEmpAdd = () => {this.setState({subpage: <AddEmpSubpage jumboText="addEmp"/>});}
	handleLapAdd = () => {this.setState({subpage: <AddLapSubpage jumboText="addLap"/>});}
	handleDetails = empID => {this.setState({subpage: <EmpDetailsSubpage jumboText="empDetails" id={empID} />});}
	
	
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