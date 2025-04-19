import { products } from "../products";
import { ProductList } from "../components/ProductList";
import { Basket } from "../types";

type ProductPageProps = {
    basket: Basket,
    setBasket: React.Dispatch<React.SetStateAction<Basket>>;
};

export const ProductPage = ({ setBasket, basket }: ProductPageProps) => {
    console.log('ProductPage reloaded');

    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Available Products</h2>
            <ProductList basket={basket} products={products} setBasket={setBasket} />
        </div>
    );
};

