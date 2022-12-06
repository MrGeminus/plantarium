import { Formik, Field, Form, FormikHelpers } from 'formik';
import FedEx from "../../assets/images/fedex.svg"
import Dhl from "../../assets/images/dhl.svg"
import Ups from "../../assets/images/ups.svg"
import Visa from "../../assets/images/visa.svg"
import Mastercard from "../../assets/images/mastercard.svg"
import PayPal from "../../assets/images/paypal.svg"

interface ICartValues {
    firstName: string;
    lastName: string;
    email: string;
}

const Checkout = () => {
    return (
        <main id="main" className="flex-grow-1">
            <h1>Your Shopping Cart</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                onSubmit={(
                    values: ICartValues,
                    { setSubmitting }: FormikHelpers<ICartValues>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className="d-flex flex-column">
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <label htmlFor="phone">Phone</label>
                    <Field
                        id="phone"
                        name="phone"
                        type="tel"
                    />
                    <label htmlFor="address">Address</label>
                    <Field id="address" name="address" />
                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" />
                    <label htmlFor="country">Country</label>
                    <Field id="country" name="country" />
                    <label htmlFor="postalCode">Postal Code</label>
                    <Field id="postalCode" name="postalCode" />
                    <input type="checkbox" />
                    <label htmlFor="postalCode">Ship to a diffrent address?</label>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <label htmlFor="phone">Phone</label>
                    <Field
                        id="phone"
                        name="phone"
                        type="tel"
                    />
                    <label htmlFor="address">Address</label>
                    <Field id="address" name="address" />
                    <label htmlFor="city">City</label>
                    <Field id="city" name="city" />
                    <label htmlFor="country">Country</label>
                    <Field id="country" name="country" />
                    <label htmlFor="postalCode">Postal Code</label>
                    <Field id="postalCode" name="postalCode" />
                    <button type="button">Continue</button>

                    <fieldset>
                        <legend>Shipping Method</legend>
                        <input type="checkbox" />
                        <label htmlFor="postalCode">
                            <span>UPS</span>
                            <span>+32 USD</span>
                            <img src={Ups} alt="" />
                        </label>
                        <input type="checkbox" />
                        <label htmlFor="postalCode">
                            <span>DHL</span>
                            <span>+32 USD</span>
                            <img src={Dhl} alt="" />
                        </label>
                        <input type="checkbox" />
                        <label htmlFor="postalCode">
                            <span>FedEx</span>
                            <span>+32 USD</span>
                            <img src={FedEx} alt="" />
                        </label>
                        <button type="button">Back</button>
                        <button type="button">Continue</button>
                    </fieldset>
                    <fieldset>
                        <legend>Payment Method</legend>
                        <details>
                            <summary>
                                <input type="checkbox" />
                                <label htmlFor="postalCode">
                                    <span>Credit card</span>
                                    <img src={Visa} alt="" />
                                    <img src={Mastercard} alt="" />
                                </label>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                <input type="checkbox" />
                                <label htmlFor="postalCode">
                                    <span>PayPal</span>
                                    <img src={PayPal} alt="" />
                                </label>
                            </summary>
                        </details>
                        <details>
                            <summary>
                                <input type="checkbox" />
                                <label htmlFor="postalCode">Credit card</label>
                            </summary>
                        </details>
                        <button type="button">Back</button>
                        <button type="button">Continue</button>
                    </fieldset>
                    <fieldset>
                        <legend>Additional Information</legend>
                        <label htmlFor="postalCode">Your note</label>
                        <textarea name=""></textarea>
                        <button type="submit">Continue</button>
                    </fieldset>
                </Form>
            </Formik>
        </main>
    );
}

export default Checkout;