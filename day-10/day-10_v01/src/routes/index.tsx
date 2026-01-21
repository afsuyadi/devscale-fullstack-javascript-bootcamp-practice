import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/header';
import type { Product } from '@/types/product';
import { ProductCard } from '@/components/productCard';
// import { createFileRoute } from '@tanstack/react-route';

export const Route = createFileRoute("/")({
  component : App,
  loader: async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data as Product[];
  }
})


function App() {
  const products = Route.useLoaderData()
  console.log(products);

  return (
    <div>
      <Header />
      <div>Hello Index:</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       {products.map((product) => {
        return (
          <ProductCard key={product.id} {...product} />
        )
       })}
      </div>       
    </div>
  )
}