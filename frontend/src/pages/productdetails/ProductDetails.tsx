import { useParams } from 'react-router-dom'
import { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import { FaRegStar, FaStar } from "react-icons/fa"
import Apple from "../../assets/images/apples.png"

const ProductDetails = () => {
    //const { productId } = useParams()
    const [key, setKey] = useState('nutritionalValues')
    return (
        <main id="main" className="flex-grow-1 row">
            <div className="col">
                <h1>Apples</h1>
                <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    (1 customer review)
                </div>
                <dl className='d-flex'>
                    <div>
                        <div className='d-flex'>
                            <dt>SKU:</dt>
                            <dd></dd>
                        </div>
                        <div className='d-flex'>
                            <dt>Category:</dt>
                            <dd>Fruits</dd>
                        </div>
                    </div>
                    <div>
                        <div className='d-flex'>
                            <dt>SKU:</dt>
                            <dd></dd>
                        </div>
                        <div className='d-flex'>
                            <dt>Category:</dt>
                            <dd>Fruits</dd>
                        </div>
                    </div>
                </dl>

                <p>30,<sup>99</sup>$</p>
                <form>
                    <button>-</button><input type="number" name="" id="" /><button>+</button>
                    <button type="submit">Add to cart</button>
                </form>
                <Tabs
                    id="additionalInformation"
                    activeKey={key}
                    onSelect={(k: any) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="nutritionalValues" title="Nutritional values">
                        <Table hover>
                            <thead>
                                <tr>
                                    <th >Vitamins</th>
                                    <th >Carbohydrates</th>
                                    <th >Proteins</th>
                                    <th >Fats</th>
                                    <th >Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">Mark</td>
                                    <td scope="row">Otto</td>
                                    <td scope="row">@mdo</td>
                                </tr>
                                <tr>
                                    <td scope="row">Jacob</td>
                                    <td scope="row">Thornton</td>
                                    <td scope="row">@fat</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                    <Tab eventKey="reviews" title="Reviews">
                        <p></p>
                    </Tab>
                </Tabs>
            </div>
            <div className="col">
                <img src={Apple} alt="apples" className="img-fluid" />
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </main>
    );
}

export default ProductDetails;