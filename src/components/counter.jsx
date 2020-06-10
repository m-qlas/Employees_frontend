import React, { Component } from "react";

class Counter extends Component {
	state = {
		
		imageUrl: "https://picsum.photos/200",
		tags:[]
	};

	// handleIncerement= ()=>{
	// 	this.setState({value: this.state.value+1});
	// }
	// handleDecerement= ()=>{
	// 	this.setState({value: this.state.value-1});
	// }
	// renderTags(){
	// 	if(this.state.tags.length===0) return <p>There are no tags!</p>;
	// 	return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
	// }
	render() { 
		return( 
			<React.Fragment>
				<h2>C#{this.props.counter.id}</h2>
				{/* <img src={this.state.imageUrl} alt=''></img><br></br> */}
				<span className={this.badgeClass()}>{this.formatCount()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-info m-2'>+</button>
				<button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-info'>-</button>
				<button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
				<br></br>
				{/* {this.renderTags()} */}
			</React.Fragment>
		);
	}
	
	badgeClass() {
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? "warning" : "primary";
		return classes;
	}

	formatCount(){
		const {value: count} = this.props.counter;
		return count === 0 ? <h4>Zero</h4> : <h4>{count}</h4>;
	}
}
 
export default Counter;