import { ProductCard } from "./ProductCard";
import { Basket, Product } from "../types";

type ProductListProps = {
    products: Product[],
    basket: Basket,
    setBasket: React.Dispatch<React.SetStateAction<Basket>>,
};

export const ProductList = ({ products, setBasket, basket }: ProductListProps) => {
    console.log('ProductList reloaded');

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} basket={basket} product={product} setBasket={setBasket} />
            ))}
        </div>
    );
};

