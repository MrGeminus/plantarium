import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa"
import { useLang } from "../../context/LangContext";
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
    const { lang } = useLang()!;

    return (
        <footer className="d-flex flex-column">
            <Row className="d-flex py-4">
                <Col lg={2}>
                    <Navbar.Brand as={Link} to={`/${lang}/`}>
                        <img src={Logo} alt="logo" height="30" />
                        <span className='visually-hidden'>Take me home</span>
                    </Navbar.Brand>
                    <ul className="d-flex gap-4 ps-0 mt-4">
                        <li className="list-group-item"><a href="#" className="link link-dark green-on-hover"><FaFacebook /><span className='visually-hidden'>Follow us on Facebook</span></a></li>
                        <li className="list-group-item"><a href="#" className="link link-dark green-on-hover"><FaInstagram /><span className='visually-hidden'>Follow us on Instagram</span></a></li>
                        <li className="list-group-item"><a href="#" className="link link-dark green-on-hover"><FaTwitter /><span className='visually-hidden'>Follow us on Twitter</span></a></li>
                        <li className="list-group-item"><a href="#" className="link link-dark green-on-hover"><FaYoutube /><span className='visually-hidden'>Follow us on YouTube</span></a></li>
                        <li className="list-group-item"><a href="#" className="link link-dark green-on-hover"><FaTiktok /><span className='visually-hidden'>Follow us on TikTok</span></a></li>
                    </ul>
                </Col>
                <Col lg={6}>
                    <nav>
                        <Nav activeKey="/home" className="justify-content-around">
                            <div>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/about`}>About</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/careers`}>Careers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/blog`} eventKey="blog">Blog</Nav.Link>
                                </Nav.Item>
                            </div>
                            <div>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/impressum`}>Impressum</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/termsandconditions`} eventKey="termsandconditions">Terms and Conditions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/privacypolicy`} eventKey="privacypolicy">Privacy Policy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/cookiepolicy`} eventKey="cookiepolicy">Cookie Policy</Nav.Link>
                                </Nav.Item>
                            </div>
                            <div>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/faq`} eventKey="faq"><abbr title="Frequently asked questions">FAQ</abbr></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to={`/${lang}/contact`} eventKey="contact">Contact</Nav.Link>
                                </Nav.Item>
                            </div>
                        </Nav>
                    </nav>
                </Col>
                <Col lg={4}>
                    <h3>Plantarium Newsletter</h3>
                    <p>Subscribe now, don't miss any trends, offers and vouchers and get the €5 voucher!</p>
                    <Form>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="newsletter">
                                <Form.Label>Enter your email</Form.Label>
                                <Form.Control type="email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">Subscribe</Button>
                    </Form>
                </Col>
            </Row>
            <Row className="py-2 text-center bg-primary">
                <Col>
                    <p className="m-0">Copyright &copy;2022 Plantarium D.O.O. All rights reserved.</p>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;