import { Link } from "react-router-dom"
import { formatPrice } from "./utility-methods"
import { Basket } from "./types"

export interface NavProps {
    basket: Basket
}

export const Navigation: React.FC<NavProps> = ({ basket }) => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <Link to="/" className="text-xl m-1font-semibold">Home</Link>
            <Link to="/checkout" className="flex m-1 text-xl semibold items-center gap-2">
                <span>Basket</span>
                <span>{formatPrice(basket.total)}</span>
            </Link>
        </nav>
    )
}