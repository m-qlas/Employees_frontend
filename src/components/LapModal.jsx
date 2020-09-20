import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Col, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const ModalExample = (props) => {
	const {
		buttonLabel,
		className,
		laps,
		onAdd
	} = props;

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

    
	return (
		<div>
			<Button color="info" onClick={toggle}>{buttonLabel}</Button>
			<Modal isOpen={modal} toggle={toggle} className={className}>
				<ModalHeader toggle={toggle}>Select laptop to add</ModalHeader>
				<ModalBody>
					{laps=== undefined?
						<p>Loading...</p>
						:
						<Form>
							<FormGroup row>
								<Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
								<Col sm={10}>
									<Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
										{laps.map((lap) => (
											<option key={lap.id}>{lap.lId} {lap.brand} {lap.model}</option>
										))}
									</Input>
								</Col>
							</FormGroup>
							<FormGroup check row>
								<Col sm={{ size: 10, offset: 2 }}>
									<Button color="primary" onClick={onAdd}>Add</Button>
									<Button color="secondary" onClick={toggle}>Cancel</Button>
								</Col>
								
							</FormGroup>
						</Form>
					}
				</ModalBody>
				{/* <ModalFooter>
					<Button color="primary" onClick={onAdd}>Add</Button>{" "}
					<Button color="secondary" onClick={toggle}>Cancel</Button>
				</ModalFooter> */}
			</Modal>
		</div>
	);
};

export default ModalExample;
