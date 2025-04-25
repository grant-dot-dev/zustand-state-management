import { useBasketStore } from "../store/store";
import { Basket, Product } from "../types";
import { formatPrice } from "../utility-methods";


type ProductCardProps = {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    console.log(`ProductCard ${product.name} reloaded`);

    const addToBasket = useBasketStore(state => state.addToBasket);

    const handleAddToBasket = () => {
        addToBasket(product);
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-500">{formatPrice(product.price)}</p>
            <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
                onClick={handleAddToBasket}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
            >
                Add to Basket
            </button>
        </div>
    );
};


