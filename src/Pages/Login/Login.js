import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {googleSignIn, setIsLoading, isLoading} = useAuth()
    const history = useHistory()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home'

    const handleSignIn = ()=>{
        googleSignIn()
        .then(result =>{
            history.push(redirect_uri)
        })
        .finally(
            setIsLoading(false)
        )
    }

    
    return (
        <>
        
        <Form className="form-control w-50 mx-auto mt-4">
            <h1>Please login...</h1>
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
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="d-flex">
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Button variant="primary" onClick={handleSignIn} className="ms-3">
            Sign in with Google
        </Button>
        </div>
        </Form>
            
        </>
    );
};

export default Login;