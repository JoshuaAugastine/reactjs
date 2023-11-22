import React,{useState} from "react";
import { Form,Button,Container,Alert } from "react-bootstrap";

function EmployeeForm(){
    const [enteredId,setId]= useState('');
    const [enteredName,setName]= useState('');
    const [enteredRole,setRole] =useState('');

    const IdChangeHandler =(event) =>{
        setId(event.target.value);
    }

    const nameChangeHandler =(event) =>{
        setName(event.target.value);
    }

    const roleChangeHandler =(event) =>{
        setRole(event.target.value);
    }

    const submitHandler =(event) =>{
        event.preventDefault();
        setId('');
        setName('');
        setRole('');
        return alert('Entered Values are: '+ enteredId+","+enteredName+","+enteredRole)
    };
    return(
        <>
        <Alert variant="primary">
            <Container>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="form.id">
                        <Form.Label>Id</Form.Label>
                        <Form.Control type="number" value={enteredId}
                         onChange={IdChangeHandler} placeholder="Enter Id" required />
                    </Form.Group>

                    <Form.Group controlId="form.Name">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" value={enteredName}
                         onChange={nameChangeHandler} placeholder="Enter User Name" required />
                    </Form.Group>

                    <Form.Group controlId="form.Role">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" value={enteredRole}
                         onChange={roleChangeHandler} placeholder="Enter Role" required />
                    </Form.Group>
                    <Button type="submit">Add Employee </Button>
                </Form>
            </Container>
        </Alert>
        </>
    )
}
export default EmployeeForm;