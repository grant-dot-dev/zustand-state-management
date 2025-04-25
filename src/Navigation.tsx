import { Link } from "react-router-dom"
import { formatPrice } from "./utility-methods"
import { useBasketStore } from "./store/store"
import { useShallow } from 'zustand/shallow'
import { useContext } from "react"



export const Navigation: React.FC = () => {
    console.log("nav rendered");




    const { items, total } = useBasketStore(useShallow(store => ({ items: store.items, total: store.total })));

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl m-1font-semibold">Home</Link>
            <Link to="/checkout" className="flex m-1 text-xl semibold items-center gap-2">
                <span>Basket</span>
                <span>{items.length}</span>
                <span>{formatPrice(total)}</span>
            </Link>
        </nav>
    )
}