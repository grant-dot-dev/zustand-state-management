import { create } from "zustand";
import { Product } from "../types";


export type BasketStore = {
    items: BasketItem[],
    total: number,
    addToBasket: (product: Product) => void;
}

export type BasketItem = {
    product: Product,
    quantity: number
}

// -- create the Store --
export const useBasketStore = create<BasketStore>()(
    (set) => ({
        items: [],
        total: 0,
        addToBasket: (product: Product) => set((state) => {
            const existingItem = state.items.find(item => item.product.id === product.id);

            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.product.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + product.price,
                };
            } else {
                return {
                    items: [...state.items, { product, quantity: 1 }],
                    total: state.total + product.price,
                };
            }
        }),

    }),


);