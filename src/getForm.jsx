import React, { Component } from "react";

class GetForm extends Component {
	
	state = { 
		btntext: "Show Employees",
	}
	
	
	handleKeydown = (e) => {
		if(e.charCode ===13){
			this.handleSubmit();
		}
	}
	
			
	render() { 
		return (
			<React.Fragment>
				<p>Selected ID: {this.props.requestId}</p> 
				<form onSubmit={this.props.onSubmit}>
					<input 
						type="text" 
						className="form-control" 
						placeholder="Employee ID" 
						style={{marginBottom: "12px"}}
						//value = {this.state.employeeId}
						onChange={this.props.onChange}
						onKeyDown={this.handleKeydown}
					/>
					<button 
						type="submit" 
						className="btn btn-primary"
					>
						{this.state.btntext}
					</button>
				</form>
			</React.Fragment>
		);
	}
}
// function getAlien(){
// 	fetch("employee/" + in1.value)
// 		.then(function (response) {
// 			response.json()
// 				.then(function (json) {
// 					alien=json;
// 					while(tab1.rows.length>1) {tab1.deleteRow(tab1.rows.length-1);}
// 					while(tab2.rows.length>1) {tab2.deleteRow(tab2.rows.length-1);}
// 					$(".result p").remove();
// 					bar.style.width = "0%";
// 					setTimeout(()=>{
// 						if(json.aId === 0) {
// 							$(".result").append("<p>Wrong input</p>");
// 							bar.className = "progress-bar progress-bar-striped bg-danger";
// 							bar.style.width = "100%";
// 						}
// 						else{
// 							bar.className = "progress-bar progress-bar-striped bg-success";
// 							bar.style.width = "100%";
// 							let delBtn=[];
// 							let row = tab1.tBodies[0].insertRow(-1);
// 							delBtn.push([document.createElement("button"),json.aId]);
// 							delBtn[0][0].textContent = "Delete";
// 							delBtn[0][0].className = "btn btn-outline-danger";
// 							for(let i=0; i<5;i++){row.insertCell(-1);}
// 							let cells = row.querySelectorAll("td");
// 							cells[0].append(json.id);
// 							cells[1].append(json.name);
// 							cells[2].append(json.tech);
// 							cells[3].append(json.manager_id);
// 							cells[4].append(delBtn[0][0]);
// 							for(let i=0; i<json.laptops.length;i++){
// 								let row2 = tab2.tBodies[0].insertRow(-1);
// 								for(let j=0;j<4;j++){row2.insertCell(-1);}
// 								let cells2 = row2.querySelectorAll("td");
// 								cells2[0].append(json.laptops[i].lId);
// 								cells2[1].append(json.laptops[i].lName);
// 								cells2[2].append(json.laptops[i].processor);
// 								cells2[3].append(json.laptops[i].ram);
// 							}
// 							deleteAlien(delBtn);
// 						}	
// 					},500);
// 				});
// 		});
// }		
export default GetForm;