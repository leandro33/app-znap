// src/composables/useRelatorios.ts
import { ref } from "vue"

interface RelatorioFiltro {
  dataInicio?: string | null
  dataFim?: string | null
  cliente?: number | null
  produto?: number | null
  categoria?: number | null
  search?: string
}

interface RelatorioParams {
  filtro: RelatorioFiltro
  page: number
  perPage: number
  colunas: string[]
}

interface PedidoRelatorio {
  id: number
  cliente?: string
  produto?: string
  categoria?: string
  data?: string
  quantidade: number
  preco: number
}

export function useRelatorios() {
  const dados = ref<PedidoRelatorio[]>([])
  const total = ref(0)
  const carregando = ref(false)

  async function buscar(params: RelatorioParams) {
    carregando.value = true
    try {
      const query = new URLSearchParams({
        page: String(params.page),
        perPage: String(params.perPage),
        search: params.filtro.search ?? "",
        dataInicio: params.filtro.dataInicio ?? "",
        dataFim: params.filtro.dataFim ?? "",
        cliente: params.filtro.cliente ? String(params.filtro.cliente) : "",
        produto: params.filtro.produto ? String(params.filtro.produto) : "",
        categoria: params.filtro.categoria ? String(params.filtro.categoria) : "",
        colunas: params.colunas.join(","),
      })

      const res = await fetch(`http://localhost:3000/relatorios/pedidos/detalhes`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(query),
			})
      if (!res.ok) throw new Error("Erro ao buscar relatórios")
      const json = await res.json()

      dados.value = json.data
      total.value = json.total
      
      return { data: dados.value, total: total.value }
    } finally {
      carregando.value = false
    }
  }

  return { dados, total, carregando, buscar }
}
