import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Best Matcha Powders
      </h1>

      <div className="grid gap-6">
        {products.map(p => (
          <ProductCard
            key={p.slug}
            name={p.name}
            price={p.price}
            affiliate={p.affiliate}
          />
        ))}
      </div>

    </main>
  )
}