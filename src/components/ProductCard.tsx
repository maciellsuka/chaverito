'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/produto/${product.slug}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col gap-2">
        <div className="w-full aspect-square relative">
          <Image
            src={'/placeholder.png'} // Troque por `product.image_url` quando tiver imagens
            alt={product.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <h2 className="font-bold text-lg">{product.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{product.short_description}</p>
        <p className="text-amber-600 font-semibold text-base">
          R$ {Number(product.price).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}
