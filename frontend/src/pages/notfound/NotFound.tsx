import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useLang } from "../../context/LangContext";

const NotFound = () => {
    const { lang } = useLang()!;
    return (
        <main id="main" className="d-flex flex-grow-1 py-5">
            <Row className="flex-grow-1">
                <Col className="d-flex flex-column align-items-start justify-content-center">
                    <h1>Page Not Found</h1>
                    <p>Oops! It seems that such page doesn't exist!</p>
                    <div>
                        <Link to={`/${lang}/`} className="btn btn-primary me-2">Go Home</Link>
                        <Link to={`/${lang}/`} className="btn btn-outline-primary">Contact</Link>
                    </div>
                </Col>
                <Col>
                    <Image src="" alt="" fluid />
                </Col>
            </Row>
        </main>
    );
}

export default NotFound;