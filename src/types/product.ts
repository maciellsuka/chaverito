export interface Product {
  id: string
  name: string
  slug: string
  description: string
  short_description?: string
  category_id?: string
  price: number
  sale_price?: number
  sku: string
  stock_quantity: number
  low_stock_threshold?: number
  weight?: number
  dimensions?: string
  is_featured: boolean
  is_active: boolean
  meta_title?: string
  meta_description?: string
  sort_order?: number
  created_at: string
  updated_at: string
}
