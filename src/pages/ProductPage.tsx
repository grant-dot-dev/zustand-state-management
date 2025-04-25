import { products } from "../products";
import { ProductList } from "../components/ProductList";
import { Basket } from "../types";



export const ProductPage = () => {
    console.log('ProductPage reloaded');

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Available Products</h2>
            <ProductList />
        </div>
    );
};

