import type { Product } from '@/types/product';

export function ProductCard(product : Product) {
    return (
        <div className="border border-zinc-300 rounded-lg bg-zinc-50">
            <div className="text-xl">{product.title}</div>
            <div className="text-4xl">USD {product.price}</div>
            <div>{product.description}</div>
            <div><img src={product.image} alt={product.title} /></div>
        </div>
    )
}