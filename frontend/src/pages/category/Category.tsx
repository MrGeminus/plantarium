import { FaRegStar, FaStar } from "react-icons/fa"

const Category = () => {
    return (
        <>
            <main id="main" className="flex-grow-1">
                <h1>Categories</h1>
            </main>
            <aside>
                <form action="">
                    <fieldset>
                        <legend>Rating</legend>
                        <label htmlFor="excellent">5 Star Rating <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></label>
                        <input type="checkbox" id="excellent" />
                        <label htmlFor="varygood">4 Star Rating <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></label>
                        <input type="checkbox" id="excellent" />
                        <label htmlFor="good">3 Star Rating <FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></label>
                        <input type="checkbox" id="excellent" />
                        <label htmlFor="bad">2 Star Rating <FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar /></label>
                        <input type="checkbox" id="excellent" />
                        <label htmlFor="varybad">1 Star Rating <FaStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /></label>
                        <input type="checkbox" id="varybad" />
                    </fieldset>
                    <label htmlFor="pricerange">Price</label>
                    <input type="range" name="pricerange" id="pricerange" min={0} max={999} />
                    <button type="submit">Apply</button>
                    <button type="reset">Reset</button>
                </form>
            </aside>
        </>
    );
}

export default Category;