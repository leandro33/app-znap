<template>
    <v-card class="ma-4 pa-8">

        <v-card-title class="d-flex align-center justify-space-between">
            <span>Clientes</span>
            <v-btn color="primary" @click="goCreate">
                Novo Cliente
            </v-btn>
        </v-card-title>

        <v-data-table-server v-model:page="page" v-model:items-per-page="itemsPerPage" :items-length="total"
            :headers="headers" :items="items" :loading="loading" @update:options="fetchData">
            <template #item.ativo="{ item }">
                <v-chip :color="item.ativo ? 'green' : 'red'" dark>
                    {{ item.ativo ? "Ativo" : "Inativo" }}
                </v-chip>
            </template>

            <template #item.actions="{ item }">
                <v-btn icon @click="goEdit(item.id)">
                    <v-icon color="primary">mdi-pencil</v-icon>
                </v-btn>
            </template>
        </v-data-table-server>
    </v-card>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useClientes } from "./composables/useClientes";

const router = useRouter();
const { items, total, loading, fetchAll, headers } = useClientes();

const page = ref(1);
const itemsPerPage = ref(10);

async function fetchData({ page, itemsPerPage, sortBy, search }: any) {
    await fetchAll({
        page,
        limit: itemsPerPage,
        search,
        sortBy: sortBy?.[0]?.key,
        sortDesc: sortBy?.[0]?.order === "desc" ? "desc" : "asc",
    });
}

function goCreate() {
    router.push("/clientes/create");
}

function goEdit(id: number) {
    router.push(`/clientes/edit/${id}`);
}

</script>