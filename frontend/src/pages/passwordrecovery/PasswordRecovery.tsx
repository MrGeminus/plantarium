import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { FaCheck } from "react-icons/fa";

const PasswordRecovery = () => {
    const [show, setShow] = useState(false);
    return (
        <main id="main" className="d-flex flex-column flex-grow-1 justify-content-center">
            <h1>Request new password</h1>
            <Alert show={show} variant="success" className="mt-2">
                <Alert.Heading><FaCheck className="fs-6 align-baseline" /> Success</Alert.Heading>
                <p>An email has been sent to you with instructions.</p>
            </Alert>
            <p>Please enter your email address. You will receive an email to reset the password.</p>
            <form onSubmit={(e) => { e.preventDefault(); setShow(true) }} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Button type="submit" variant="primary">
                    Change Password
                </Button>
            </form>
        </main>
    )
}

export default PasswordRecovery;