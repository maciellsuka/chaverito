// app/produto/[id]/page.tsx
import { createClient } from '@/lib/supabase/server'
import Image from 'next/image'

interface Produto {
  id: string
  nome: string
  descricao: string
  preco: number
  imagem_url: string
}

export default async function ProdutoPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('produtos')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error || !data) {
    return <div className="p-8 text-center text-red-500">Produto não encontrado.</div>
  }

  const produto = data as Produto

  return (
    <div className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-start">
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow">
        <Image
          src={produto.imagem_url}
          alt={produto.nome}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{produto.nome}</h1>
        <p className="text-xl text-green-700 font-semibold mb-4">R$ {produto.preco.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">{produto.descricao}</p>
        <button className="bg-black text-white px-6 py-3 rounded hover:opacity-90">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
