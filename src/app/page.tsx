import { getProducts } from '@/lib/getProducts'
import { ProductCard } from '@/components/ProductCard'

export default async function HomePage() {
  const products = await getProducts()

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">🧷 Chaverito</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}