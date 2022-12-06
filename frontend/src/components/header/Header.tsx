import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLang } from "../../context/LangContext";
import { FaSearch, FaUserCircle, FaRegHeart, FaShoppingBasket } from "react-icons/fa";
import Logo from '../../assets/images/logo.svg';

const Header = () => {
    const { lang, changeLang } = useLang()!;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="d-flex flex-column">
            <Row className="py-3">
                <Col md={2}>
                    <Navbar.Brand as={Link} to={`/${lang}/`}>
                        <img src={Logo} alt="logo" height="30" />
                        <span className='visually-hidden'>Take me home</span>
                    </Navbar.Brand>
                </Col>
                <Col lg={1}></Col>
                <Col md={5}>
                    <Form className="d-flex">
                        <InputGroup>
                            <Form.Control
                                aria-label="Enter product name"
                                aria-describedby="search-button"
                                name="search" id="search"
                            />
                            <Button variant="outline-success" id="button">
                                <FaSearch /><span className='visually-hidden'>Search</span>
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col lg={1}></Col>
                <Col md={3} className="d-flex gap-2">
                    <Form.Select className="me-1" aria-label="Translate page to" onChange={(e) => changeLang(e.target.value as "en" | "de" | "rs")}>
                        <option value="en">🇬🇧 English</option>
                        <option value="de">🇩🇪 Deutsch</option>
                        <option value="rs">🇷🇸 Srpski</option>
                    </Form.Select>
                    <Button variant="white" className="me-1 bg-primary-lighter">
                        <FaUserCircle className="align-baseline text-dark" />
                        <span className='visually-hidden'>Open account</span>
                    </Button>
                    <Button variant="white" className="me-1 bg-primary-lighter">
                        <FaRegHeart className="align-baseline text-dark" />
                        <span className='visually-hidden'>Open Favorite</span>
                    </Button>
                    <Button variant="white" onClick={handleShow}>
                        <FaShoppingBasket className="align-baseline text-dark" />
                        <span className='visually-hidden'>Open shopping cart</span>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Shopping cart</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ListGroup>
                                <ListGroup.Item>
                                    <h3>Product Title</h3>

                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h3>Product Title</h3>

                                </ListGroup.Item>
                            </ListGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="white" onClick={handleClose}>
                                Continue Shopping
                            </Button>
                            <Link to="/checkout" className="btn btn-success" onClick={handleClose}>
                                Go to checkout
                            </Link>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
            <Navbar bg="primary" expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Grasses
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/${lang}/grasses`}>Grasses 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/grasses`}>Grasses 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/grasses`}>Grasses 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Flowers
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/${lang}/flowers`}>Flowers 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/flowers`}>Flowers 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/flowers`}>Flowers 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Bushes
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/${lang}/bushes`}>Bushes 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/bushes`}>Bushes 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/bushes`}>Bushes 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Trees
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/${lang}/trees`}>Trees 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/trees`}>Trees 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/trees`}>Trees 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    Gardening Tools
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to={`/${lang}/gardeningtools`}>Gardening Tools 1</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/gardeningtools`}>Gardening Tools 2</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`/${lang}/gardeningtools`}>Gardening Tools 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;