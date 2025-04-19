import { Basket, Product } from "../types";
import { formatPrice } from "../utility-methods";
import toast from "react-hot-toast";

type ProductCardProps = {
    product: Product;
    basket: Basket,
    setBasket: React.Dispatch<React.SetStateAction<Basket>>;
};

export const ProductCard = ({ basket, product, setBasket }: ProductCardProps) => {
    console.log(`ProductCard ${product.name} reloaded`);

    const addToBasket = () => {
        const existingItem = basket.items.find(item => item.product.id === product.id);
        if (existingItem) {
            setBasket((prev) => ({
                items: basket.items.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
                total: prev.total + product.price,
            }));
        } else {
            setBasket(prev => ({
                items: [...prev.items, { product, quantity: 1 }],
                total: prev.total + product.price,
            }));
        }

        toast.success(`${product.name} added to basket!`);
        return;
    };

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
                onClick={addToBasket}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
            >
                Add to Basket
            </button>
        </div>
    );
};


