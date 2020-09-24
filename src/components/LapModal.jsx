import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ModalExample = (props) => {
	const {
		buttonLabel,
		className,
		onAdd,
		onChange
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	const [freeLaps, setLaps] = useState(null);
	
	useEffect(() => {
		if(modal){
			fetch("laps")
				.then(resp => resp.json())
				.then(json => setLaps(json));
		}
		
	});
    
	return (
		<div>
			<Button color="info" onClick={toggle}>{buttonLabel}</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Select laptop to add</ModalHeader>
				<ModalBody>
					{freeLaps=== null?
						<p>Loading...</p>
						:
						<Form>
							<FormGroup row>
								<Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
								<Col sm={10}>
									<Input type="select" name="selectMulti" id="exampleSelectMulti" onChange={onChange} multiple>
										{freeLaps.map((lap) => (
											<option key={lap.id} value={JSON.stringify(lap)}>{lap.lId} {lap.brand} {lap.model}</option>
										))}
									</Input>
								</Col>
							</FormGroup>
							{/* <FormGroup check row>
								<Col sm={{ size: 10, offset: 2 }}>
									<Button color="primary" onClick={onAdd}>Add</Button>
									<Button color="secondary" onClick={toggle}>Close</Button>
								</Col>
							</FormGroup> */}
						</Form>
					}
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={onAdd}>Add</Button>
					<Button color="secondary" onClick={toggle}>Close</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

export default ModalExample;
