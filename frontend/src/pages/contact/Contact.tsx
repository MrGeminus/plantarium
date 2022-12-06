import { FormEvent, useState } from 'react';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useLang } from "../../context/LangContext";
import ContactTranslation from "./Contact.json"

const Contact = () => {
    const { lang } = useLang()!;
    const translation = ContactTranslation[lang ? lang : "en"]
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: FormEvent) => {
        const form: any = event.currentTarget!;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <main id="main" className="flex-grow-1 py-5">
            <Row>
                <Col lg={5}>
                    <h1>{translation.title}</h1>
                    <p className="mt-4">{translation.description}</p>
                    <dl className="mt-3">
                        <div>
                            <dt>{translation.contactAddress}:</dt>
                            <dd className="d-flex flex-column">
                                <span>Plantarium D.O.O.</span>
                                <span>Bulevar Oslobodjenja 35</span>
                                <span>21209 Novi Sad, Serbia</span>
                            </dd>
                        </div>
                        <div className="d-flex gap-1">
                            <dt>{translation.contactPhone}:</dt>
                            <dd>+381 21 523 845</dd>
                        </div>
                        <div className="d-flex gap-1">
                            <dt>{translation.contactFax}:</dt>
                            <dd>+381 21 523 845</dd>
                        </div>
                        <div>
                            <dt>{translation.workingHours}:</dt>
                            <dd>Monday - Friday: 06:00 - 22:00</dd>
                        </div>
                    </dl>
                </Col>
                <Col lg={7}>
                    <Form as="form" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{translation.firstName}
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Required field</Tooltip>}>
                                        <span className="ms-1 text-danger">*</span>
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Control type="text" required />
                                <Form.Control.Feedback type="invalid">
                                    This field can't be empty.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{translation.lastName}
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Required field</Tooltip>}>
                                        <span className="ms-1 text-danger">*</span>
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Control type="text" required />
                                <Form.Control.Feedback type="invalid">
                                    This field can't be empty.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{translation.emailAddress}
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Required field</Tooltip>}>
                                        <span className="ms-1 text-danger">*</span>
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Control type="email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{translation.phoneNumber}</Form.Label>
                                <Form.Control type="tel" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid phone number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{translation.orderNumber}</Form.Label>
                                <Form.Control type="text" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid order number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{translation.articleNumber}</Form.Label>
                                <Form.Control type="text" />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid article number.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridState">
                                <Form.Label>{translation.chooseTopic}
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Required field</Tooltip>}>
                                        <span className="ms-1 text-danger">*</span>
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Select name="subject" required>
                                    <option value="" disabled selected>Choose a topic</option>
                                    <optgroup label="Retur">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </optgroup>
                                    <optgroup label="Payments">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </optgroup>
                                    <optgroup label="Delivery">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </optgroup>
                                    <optgroup label="Cancelation/Return">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </optgroup>
                                    <optgroup label="Complaint/Product Defect">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </optgroup>
                                    <optgroup label="Privacy Protection">
                                        <option value="1">Question about data handling or privacy protection</option>
                                        <option value="2">Request Data Deletion</option>
                                    </optgroup>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please select a topic.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>{translation.message}
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Required field</Tooltip>}>
                                        <span className="ms-1 text-danger">*</span>
                                    </OverlayTrigger>
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} required />
                                <Form.Control.Feedback type="invalid">
                                    This field can't be empty.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <div className="d-flex gap-2">
                                <Form.Check type="checkbox" required />
                                <Form.Label>I have read the {<Link to="/pricacypolicy">Privacy Policy</Link>}
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Required field</Tooltip>}>
                                        <span className="ms-1 text-danger">*</span>
                                    </OverlayTrigger>
                                </Form.Label>
                            </div>
                            <Form.Control.Feedback type="invalid">
                                You must accept our privacy policy.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">{translation.sendMessage}</Button>
                    </Form>
                </Col>
            </Row>
        </main>
    );
}

export default Contact;