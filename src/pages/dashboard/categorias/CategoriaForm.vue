<template>
    <v-card class="ma-4 pa-8">
        
        <v-card-title class="mb-8">
            {{ isEdit ? "Editar Categoria" : "Novo Categoria" }}
        </v-card-title>

        <v-card-text>
            <v-form v-model="valid" ref="formRef">
                
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="categoria.nome" label="Nome" :rules="[rules.required]" required />
                    </v-col>

                    <v-col cols="6">
                        <v-switch v-model="categoria.ativo" :label="categoria.ativo ? 'Ativo' : 'Inativo'" :true-value="1"
                            :false-value="0" />
                    </v-col>

                    <v-col cols="6">
                        <v-text-field v-model="categoria.descricao" label="Descrição" class="mb-4"
                            :rules="[rules.required]" required />
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
import { useCategorias } from "./composables/useCategorias";
import type { Categoria } from "@/types/index"

const {
    fetchById,
    current,
    criarCategoria,
    atualizarCategoria,
    deletarCategoria,
} = useCategorias();

const route = useRoute();
const router = useRouter();
const formRef = ref();
const valid = ref(false);

const rules = {
    required: (v: any) => (!!v || v === 0) || "Campo obrigatório",
    positive: (v: number) => (v > 0) || "Deve ser maior que zero",
};

const categoria = ref<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
    ativo: 1,
});

const isEdit = computed(() => !!route.params.id);

async function save() {
    await criarCategoria({...categoria.value})
}

async function update() {
    await atualizarCategoria({...categoria.value})
}

async function remove() {
    await deletarCategoria({...categoria.value})
}

function goBack() {
    router.push("/categorias");
}

onBeforeMount(async () => {
    if (isEdit.value) {
        await fetchById(Number(route.params.id));
        if (current.value) {
            categoria.value = { ...current.value };
        }
    }
});
</script>