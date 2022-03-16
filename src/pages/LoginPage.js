import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import logo from './../logo.png';

 //add event listner
 //elm.addEventListener

function LoginPage  (props){
    //window.location.assign('page.html')
    //router navigate to a path (/home/index dashboard)
let navigation = useNavigate();

function onHandleSubmit(evt) {
    evt.preventDefault();
    navigation('dashboard');
    //firebase auth signInWithUsernameAndPassword({email, password})
}

return( 
    
    <Container>
        <Row className='shadow-1-strong p-5 ' style={ {backgroundColor: "#E8EAF6"} }>
            <Col className='p-5 border border-light ' style={ {backgroundColor: "#EEEEEE"} } >
                <Row className='justify-content-md-center'>
                    <Col md="auto"><h1 className='my-4'>Sign In to DashBoard</h1></Col>
                    
                </Row>
                
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onHandleSubmit}>
                        Login!
                    </Button>
                </Form>
                <Row className='my-4'>
                    <Col><Link className='link-info' to="/#">Forgot Password?</Link></Col>
                    <Col>New user? <Link className='link-info' to="/#"> Sing up!</Link></Col>
                </Row>
                
            </Col>
            <Col className='p-5 border border-light' style={ {backgroundColor: "#E3F2FD"} }>
                <img src={logo} className='img-fluid' alt='company logo' />
            </Col>
        </Row>
        
        
    </Container>

)

}

export default LoginPage; 