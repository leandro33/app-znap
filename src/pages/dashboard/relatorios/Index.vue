<template>
    <v-container fluid>
        <v-card class="ma-4 pa-8">
            <v-card-title class="mb-8">Relatórios de Pedidos</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="filtro.search" label="Buscar (todas as colunas)" clearable />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="filtro.dataInicio" type="date" label="De" />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="filtro.dataFim" type="date" label="Até" />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete v-model="filtro.categoria" :items="categorias" item-title="nome" item-value="id"
                            label="Categoria" clearable />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete v-model="filtro.cliente" :items="clientes" item-title="nome" item-value="id"
                            label="Cliente" clearable />
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete v-model="filtro.produto" :items="produtos" item-title="nome" item-value="id"
                            label="Produto" clearable />
                    </v-col>
                </v-row>

                <v-btn color="primary" @click="buscar" :loading="carregando">Buscar</v-btn>

                <v-divider class="my-4 mb-8" />
                <div class="d-flex flex-wrap">
                    <v-checkbox v-for="c in colunasDisponiveis" :key="c.key" v-model="colunasSelecionadas"
                        :label="c.label" :value="c.key" hide-details density="compact" class="mr-4" />
                </div>

                <v-data-table-server :items="pedidos" :items-length="totalItems" v-model:page="page"
                    v-model:items-per-page="itemsPerPage" :loading="carregando" class="mt-4 mb-8">
                    <template #headers>
                        <tr>
                            <th v-for="c in colunasSelecionadas" :key="c">{{ c }}</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Total</th>
                        </tr>
                    </template>
                    <template #item="{ item }">
                        <tr>
                            <td v-for="c in colunasSelecionadas" :key="c">
                                {{ item[c] }}
                            </td>
                            <td>{{ item.quantidade }}</td>
                            <td>R$ {{ Number(item.preco_unitario).toFixed(2) }}</td>
                            <td>R$ {{ (Number(item.quantidade) * Number(item.preco_unitario)).toFixed(2) }}</td>
                        </tr>
                    </template>
                </v-data-table-server>

                <v-divider class="my-4" />
                <v-card>
                    <v-card-title>Resumo</v-card-title>
                    <v-card-text>
                        <p>Total de itens: {{ resumo.qtdeTotal }}</p>
                        <p>Valor total: R$ {{ resumo.valorTotal.toFixed(2) }}</p>
                        <p>Preço médio: R$ {{ resumo.precoMedio.toFixed(2) }}</p>
                    </v-card-text>
                </v-card>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue"
import { useClientes } from "@/pages/dashboard/clientes/composables/useClientes"
import { useProdutos } from "@/pages/dashboard/produtos/composables/useProduto"
import { useCategorias } from "@/pages/dashboard/categorias/composables/useCategorias"
import { useRelatorios } from "./composables/useRelatorios"

const { items: clientes, fetchAll: fetchClientes } = useClientes()
const { items: produtos, fetchAll: fetchProdutos } = useProdutos()
const { items: categorias, fetchAll: fetchCategorias } = useCategorias()

const filtro = ref({
    dataInicio: null,
    dataFim: null,
    cliente: null,
    produto: null,
    categoria: null,
    search: ""
})

const colunasDisponiveis = [
    { key: "cliente", label: "Cliente" },
    { key: "produto", label: "Produto" },
    { key: "categoria", label: "Categoria" },
    { key: "data_pedido", label: "Data" }
]
const colunasSelecionadas = ref<string[]>(["cliente", "produto"])

const page = ref(1)
const itemsPerPage = ref(10)
const totalItems = ref(0)

const pedidos = ref<any[]>([])
const carregando = ref(false)

function formatarData(valor: string) {
    if (!valor) return "";
    return new Date(valor).toLocaleDateString("pt-BR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
}

async function buscar() {
    carregando.value = true
    try {
        const { data, total } = await useRelatorios().buscar({
            filtro: filtro.value,
            page: page.value,
            perPage: itemsPerPage.value,
            colunas: colunasSelecionadas.value
        })

        pedidos.value = data.map(r => ({
            ...r,
            preco_unitario: Number(r.preco_unitario),
            valor_total: Number(r.valor_total),
            quantidade: Number(r.quantidade),
            data_pedido: formatarData(r.data_pedido)
        }))
        console.log(pedidos.value)
        totalItems.value = total
    } finally {
        carregando.value = false
    }
}

const resumo = computed(() => {
    let qtdeTotal = 0
    let valorTotal = 0
    pedidos.value.forEach(p => {
        const total = Number(p.preco_unitario) * Number(p.quantidade)
        qtdeTotal += Number(p.quantidade)
        valorTotal += total
    })
    return {
        qtdeTotal,
        valorTotal,
        precoMedio: qtdeTotal ? valorTotal / qtdeTotal : 0
    }
})

onBeforeMount(async () => {
    await fetchClientes()
    await fetchProdutos()
    await fetchCategorias()
});
</script>