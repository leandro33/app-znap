import type { RouteLocationNormalized, RouteRecordRaw } from "vue-router"
import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "@/layouts/Dashboard.vue"

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        meta: { layout: Dashboard},
        children: [
            {
                path: "",
                name: "home",
                component: async () => await import("@/pages/HomePage.vue"),
            },
            {
                path: "/categorias",
                children: [
                    {
                        path: "",
                        name: "index.categorias",
                        component: async () => await import("@/pages/dashboard/categorias/Index.vue")
                    },
                    {
                        path: "create",
                        name: "create.categorias",
                        component: async () => await import("@/pages/dashboard/categorias/CategoriaForm.vue")
                    },
                    {
                        path: "edit/:id",
                        name: "edit.categorias",
                        component: async () => await import("@/pages/dashboard/categorias/CategoriaForm.vue")
                    },
                    {
                        path: "show/:id",
                        name: "show.categorias",
                        component: async () => await import("@/pages/dashboard/categorias/CategoriaForm.vue")
                    },
                ],
            },            
            {
                path: "/clientes",
                children: [
                    {
                        path: "",
                        name: "index.clientes",
                        component: async () => await import("@/pages/dashboard/clientes/Index.vue")
                    },
                    {
                        path: "create",
                        name: "create.clientes",
                        component: async () => await import("@/pages/dashboard/clientes/ClienteForm.vue")
                    },
                    {
                        path: "edit/:id",
                        name: "edit.clientes",
                        component: async () => await import("@/pages/dashboard/clientes/ClienteForm.vue")
                    },
                    {
                        path: "show/:id",
                        name: "show.clientes",
                        component: async () => await import("@/pages/dashboard/clientes/ClienteForm.vue")
                    },
                ],
            },
            {
                path: "/produtos",
                children: [
                    {
                        path: "",
                        name: "index.produtos",
                        component: async () => await import("@/pages/dashboard/produtos/Index.vue")
                    },
                    {
                        path: "create",
                        name: "create.produtos",
                        component: async () => await import("@/pages/dashboard/produtos/ProdutoForm.vue")
                    },
                    {
                        path: "edit/:id",
                        name: "edit.produtos",
                        component: async () => await import("@/pages/dashboard/produtos/ProdutoForm.vue")
                    },
                    {
                        path: "show/:id",
                        name: "show.produtos",
                        component: async () => await import("@/pages/dashboard/produtos/ProdutoForm.vue")
                    },
                ],
            },
            {
                path: "/pedidos",
                children: [
                    {
                        path: "",
                        name: "index.pedidos",
                        component: async () => await import("@/pages/dashboard/pedidos/PedidosForm.vue")
                    },
                    
                ],
            },
            {
                path: "/relatorios",
                children: [
                    {
                        path: "",
                        name: "index.relatorios",
                        component: async () => await import("@/pages/dashboard/relatorios/Index.vue")
                    },
                ],
            },                   
        ],
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

export const persistRouteQuery = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: CallableFunction): void => {
    const query = { ...to.query, ...from.query }
    if (Object.keys(to.query).length === 0 && Object.keys(from.query).length > 0) {
        next({ ...to, query })
    } else {
        next()
    }
}

router.beforeEach(persistRouteQuery)