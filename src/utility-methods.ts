export const formatPrice = (amount: number): string => {
    return Intl.NumberFormat('gbp', {
        style: 'currency',
        currency: 'GBP'
    }).format(amount);
}

