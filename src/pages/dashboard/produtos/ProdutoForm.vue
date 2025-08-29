<template>
    <v-card class="ma-4 pa-8">

        <v-card-title class="mb-8">
            {{ isEdit ? "Editar Produto" : "Novo Produto" }}
        </v-card-title>

        <v-card-text>
            <v-form v-model="valid" ref="formRef">

                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="produto.nome" label="Nome" :rules="[rules.required]" required />
                    </v-col>

                    <v-col cols="6">
                        <v-switch v-model="produto.ativo" :label="produto.ativo ? 'Ativo' : 'Inativo'" :true-value="1"
                            :false-value="0" />
                    </v-col>

                    <v-col cols="6">
                        <v-text-field v-model="produto.descricao" label="Descrição" class="mb-4"
                            :rules="[rules.required]" required />
                    </v-col>

                    <v-col cols="6">
                        <v-select v-model="produto.categorias_id" :items="categoriaOptions" item-title="text"
                            item-value="value" label="Categoria" :rules="[rules.required]" required />
                    </v-col>

                    <v-col cols="6">
                        <v-text-field v-model.number="produto.preco" label="Preço" class="mb-4" type="number"
                            :rules="[rules.required, rules.positive]" required />
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>

        <v-card-actions>
            <v-btn v-if="!isEdit" color="primary" :disabled="!valid" @click="save">
                Criar
            </v-btn>

            <template v-else>
                <v-btn color="primary" :disabled="!valid" @click="update">
                    Atualizar
                </v-btn>
                <v-btn color="error" @click="remove">
                    Deletar
                </v-btn>
            </template>

            <v-btn @click="goBack">
                Voltar
            </v-btn>

            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<script lang="ts" setup>
import { ref, computed, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProdutos } from "./composables/useProduto";
import { useCategorias } from "@/pages/dashboard/categorias/composables/useCategorias";
import type { Produto } from "@/types/index"

const {
    fetchById,
    current,
    criarProduto,
    atualizarProduto,
    deletarProduto,
} = useProdutos();

const { fetchAll: fetchCategorias, items: categorias } = useCategorias();

const route = useRoute();
const router = useRouter();
const formRef = ref();
const valid = ref(false);

const rules = {
    required: (v: any) => (!!v || v === 0) || "Campo obrigatório",
    positive: (v: number) => (v > 0) || "Deve ser maior que zero",
};

const produto = ref<Produto>({
    id: 0,
    nome: '',
    descricao: '',
    categorias_id: null,
    preco: null,
    ativo: 1,
});

const isEdit = computed(() => !!route.params.id);

const categoriaOptions = computed(() =>
    categorias.value
        .filter(c => c.ativo === 1)
        .map(c => ({
            value: c.id,
            text: c.nome
        }))
)

async function save() {
    produto.value.preco = Number(produto.value.preco)
    await criarProduto({ ...produto.value })
}

async function update() {
    produto.value.preco = Number(produto.value.preco)
    await atualizarProduto({ ...produto.value })
}

async function remove() {
    await deletarProduto({ ...produto.value })
}

function goBack() {
    router.push("/produtos");
}

onBeforeMount(async () => {
    await fetchCategorias()
    if (isEdit.value) {
        await fetchById(Number(route.params.id));
        if (current.value) {
            produto.value = { ...current.value };
        }
    }
});
</script>