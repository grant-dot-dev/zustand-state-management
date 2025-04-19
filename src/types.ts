export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

export type BasketItem = {
    product: Product,
    quantity: number,
}

export type Basket = {
    total: number;
    items: BasketItem[];
}