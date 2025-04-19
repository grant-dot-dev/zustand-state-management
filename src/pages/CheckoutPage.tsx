import { Basket } from "../types";
import { formatPrice } from "../utility-methods";

type CheckoutPageProps = {
    basket: Basket;
};

export const CheckoutPage = ({ basket }: CheckoutPageProps) => {
    console.log({ basket });
    return (
        <div className="bg-gray-100 p-6 rounded-lg">

            <h2 className="text-xl font-semibold">Checkout</h2>
            <div className="mt-4">
                {basket.items.length === 0 ? (
                    <p className="text-gray-500">Your basket is empty.</p>

                ) : basket.items.map(item => (
                    <div key={item.product.id} className="flex items-center justify-between p-2 border-b">
                        <img src={item.product.image} alt={item.product.name} className="w-16 h-16 mr-4" />
                        <div className="flex justify-end flex-col text-right">
                            <h3 className="text-lg">{item.product.name}</h3>
                            <p className="text-gray-600">{formatPrice(item.product.price * item.quantity)}</p>
                            <p className="text-gray-600">QTY:  {item.quantity}</p>
                        </div>
                    </div>
                ))}

                <div className="flex justify-between">
                    <span> Total Price:</span>
                    <p className="font-bold"> {formatPrice(basket.total)}</p>
                </div>
            </div>
            <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded">
                Confirm Order
            </button>
        </div>
    );
};