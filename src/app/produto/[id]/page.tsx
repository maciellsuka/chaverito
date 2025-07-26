import { createClient } from '@/lib/supabase/server' // ajuste o path conforme sua estrutura
import { notFound } from 'next/navigation'

type Params = {
  params: {
    id: string
  }
}

export default async function ProdutoPage({ params }: Params) {
  const supabase = createClient()

  const { data: produto, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', params.id)
    .single()

  if (error || !produto) return notFound()

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{produto.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{produto.description}</p>
      <p className="text-xl font-semibold">R$ {produto.price}</p>
    </div>
  )
}
