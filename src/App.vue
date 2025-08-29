<template>
  <v-app>
    <!-- <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item class="pt-4 pb-4" :to="'/produtos'" title="Produtos" />
        <v-list-item class="pt-4 pb-4" link title="Categorias" />
        <v-list-item class="pt-4 pb-4" link title="Clientes" />
        <v-list-item class="pt-4 pb-4" link title="Pedidos" />
        <v-list-item class="pt-4 pb-4" link title="Relatórios" />
      </v-list>
    </v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" app>
  <!-- Brand -->
  <div class="d-flex align-center pa-4">
    <v-icon size="32" color="primary" class="mr-2">mdi-cube</v-icon>
    <span class="text-h6 font-weight-bold">ZNAP</span>
  </div>

  <v-divider />

  <!-- Menu -->
  <v-list density="comfortable" nav>
    <v-list-item
      :to="'/produtos'"
      prepend-icon="mdi-package-variant"
      title="Produtos"
    />
    <v-list-item
      :to="'/categorias'"
      prepend-icon="mdi-shape"
      title="Categorias"
    />
    <v-list-item
      :to="'/clientes'"
      prepend-icon="mdi-account-group"
      title="Clientes"
    />
    <v-list-item
      :to="'/pedidos'"
      prepend-icon="mdi-cart"
      title="Pedidos"
    />
    <v-list-item
      :to="'/relatorios'"
      prepend-icon="mdi-chart-bar"
      title="Relatórios"
    />
  </v-list>
</v-navigation-drawer>


    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Sistema de Pedidos</v-toolbar-title>
    </v-app-bar>
    <v-main class="fill-height">
      <v-container fluid class="fill-height align-start bg-blue-lighten-5 ">
        <v-row class="ma-0" align="start" justify="start">
          <v-alert v-if="alert.message.value !== ''" v-model="alert.show.value" :type="alert.type.value" closable
            class="ma-4 mb-2">
            {{ alert.message }}
          </v-alert>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
      <v-footer class="text-subtitle-2 bg-blue-grey-lighten-5">Sistema de Pedidos | ZNAP 2025</v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAlert } from "@/composables/useAlert"

const alert = useAlert()
const drawer = ref(true);
</script>