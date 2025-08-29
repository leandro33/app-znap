<template>
    <v-card class="ma-4 pa-8">

        <v-card-title class="mb-8">
            {{ isEdit ? "Editar Cliente" : "Novo Cliente" }}
        </v-card-title>

        <v-card-text>
            <v-form v-model="valid" ref="formRef">

                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="cliente.nome" label="Nome" :rules="[rules.required]" required />
                    </v-col>

                    <v-col cols="6">
                        <v-switch v-model="cliente.ativo" :label="cliente.ativo ? 'Ativo' : 'Inativo'" :true-value="1"
                            :false-value="0" />
                    </v-col>

                    <v-col cols="6">
                        <v-text-field v-model="cliente.email" label="E-mail" class="mb-4"
                            :rules="[rules.required]" required />
                    </v-col>

                    <v-col cols="6">
                        <v-text-field v-model="cliente.telefone" label="Telefone" class="mb-4"
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
import { useClientes } from "./composables/useClientes";
import type { Cliente } from "@/types/index"

const {
    fetchById,
    current,
    criarCliente,
    atualizarCliente,
    deletarCliente,
} = useClientes();

const route = useRoute();
const router = useRouter();
const formRef = ref();
const valid = ref(false);

const rules = {
    required: (v: any) => (!!v || v === 0) || "Campo obrigatório",
    positive: (v: number) => (v > 0) || "Deve ser maior que zero",
};

const cliente = ref<Cliente>({
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    ativo: 1,
});

const isEdit = computed(() => !!route.params.id);

async function save() {
    await criarCliente({ ...cliente.value })
}

async function update() {
    await atualizarCliente({ ...cliente.value })
}

async function remove() {
    await deletarCliente({ ...cliente.value })
}

function goBack() {
    router.push("/clientes");
}

onBeforeMount(async () => {
    if (isEdit.value) {
        await fetchById(Number(route.params.id));
        if (current.value) {
            cliente.value = { ...current.value };
        }
    }
});
</script>