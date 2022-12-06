import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaRegStar } from "react-icons/fa";
import { useLang } from "../../context/LangContext";
import PromotionImageOne from "../../assets/images/pottedAloeVera.jpg"
import PromotionImageTwo from "../../assets/images/pottedThuja.jpg"
import PromotionImageTree from "../../assets/images/gardeningTools.jpg"
import Roses from "../../assets/images/roses.jpg"

const Home = () => {
    const { lang } = useLang()!;
    return (
        <main id="main" className="flex-grow-1">
            <section >
                <Carousel >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
                            src={PromotionImageOne}
                            alt="First slide"
                        />
                        <div className="position-absolute top-0 left-0 d-block w-100 h-100 bg-dark opacity-50"></div>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
                            src={PromotionImageTwo}
                            alt="Second slide"
                        />
                        <div className="position-absolute top-0 left-0 d-block w-100 h-100 bg-dark opacity-50"></div>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
                            src={PromotionImageTree}
                            alt="Third slide"
                        />
                        <div className="position-absolute top-0 d-block w-100 h-100 bg-dark opacity-50"></div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
                            src={PromotionImageTree}
                            alt="Third slide"
                        />
                        <div className="position-absolute top-0 d-block w-100 h-100 bg-dark opacity-50"></div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
                            src={PromotionImageTree}
                            alt="Third slide"
                        />
                        <div className="position-absolute top-0 d-block w-100 h-100 bg-dark opacity-50"></div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            style={{ maxHeight: '50vh', objectFit: 'cover', objectPosition: 'center' }}
                            src={PromotionImageTree}
                            alt="Third slide"
                        />
                        <div className="position-absolute top-0 d-block w-100 h-100 bg-dark opacity-50"></div>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="py-5">
                <h2></h2>
                <Row xs={1} md={3} xl={5} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Roses} />
                                <Card.Body>
                                    <Card.Title><Link to={`/${lang}/products/flowers/:plantId`}>Product Name</Link></Card.Title>
                                    <Card.Text>
                                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /> <abbr title="Number of reviews">(2)</abbr>
                                    </Card.Text>
                                    <Card.Text>
                                        45,<sup>52</sup> USD
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </main >
    );
}

export default Home;