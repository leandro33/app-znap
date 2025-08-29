<template>
    <v-container>
        <v-card class="ma-4 pa-8">
            <v-card-title class="mb-8"> Novo Pedido </v-card-title>
            <v-card-text>
                <!-- Cliente -->
                <v-select v-model="pedido.cliente_id" :items="clientes" item-title="nome" item-value="id"
                    label="Cliente" />
                <div class="d-flex align-center gap-4">
                    <v-select v-model="selectedProduto" :items="produtos" item-title="nome" item-value="id"
                        label="Produto" class="flex-1" />
                    <v-text-field v-model.number="quantidade" type="number" label="Qtd" style="max-width: 100px" />
                </div>

                <div>
                    <v-btn color="primary" @click="addItem">Adicionar</v-btn>
                </div>

                <v-table class="mt-8 mb-8">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Qtd</th>
                            <th>Preço</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(it, i) in pedido.itens" :key="i">
                            <td>{{produtos.find(p => p.id === it.produto_id)?.nome}}</td>
                            <td>{{ it.quantidade }}</td>
                            <td>R$ {{ it.preco.toFixed(2) }}</td>
                            <td>R$ {{ (it.preco * it.quantidade).toFixed(2) }}</td>
                            <td>
                                <v-btn icon="mdi-delete" color="error" @click="removeItem(i)" />
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="salvarPedido">Criar Pedido</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue"
import { useClientes } from "@/pages/dashboard/clientes/composables/useClientes"
import { useProdutos } from "@/pages/dashboard/produtos/composables/useProduto"
import { useAlert } from "@/composables/useAlert"
import type { Pedido } from "@/types/index";

const { items: clientes, fetchAll: fetchClientes } = useClientes()
const { items: produtos, fetchAll: fetchProdutos } = useProdutos()
const alert = useAlert()

const pedido = ref({
    cliente_id: null as number | null,
    itens: [] as Array<{ produto_id: number; quantidade: number; preco: number }>
})

const selectedProduto = ref<number | null>(null)
const quantidade = ref(1)

function addItem() {
    const produto = produtos.value.find(p => p.id === selectedProduto.value)
    if (!produto) return

    pedido.value.itens.push({
        produto_id: produto.id,
        quantidade: quantidade.value,
        preco: Number(produto.preco)
    })

    selectedProduto.value = null
    quantidade.value = 1
}

function removeItem(index: number) {
    pedido.value.itens.splice(index, 1)
}

async function salvarPedido(p: Pedido) {
    try {
        await fetch("http://localhost:3000/pedidos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(p),
        });
        alert.trigger("success", "Pedido criado com sucesso.")
    } catch (e: any) {
        
        alert.trigger("error", "Falha na criação do pedido.")
    } finally {}
}

onBeforeMount(async () => {
    await fetchClientes()
    await fetchProdutos()
});
</script>

