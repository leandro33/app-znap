import { ref } from "vue";
import type { Categoria } from "@/types/index";
import { createSharedComposable } from "@vueuse/core"
import { useAlert } from "@/composables/useAlert"
import { useRouter } from "vue-router";

export const useCategorias = createSharedComposable(() => {
    const alert = useAlert()
	const router = useRouter()

    const headers = [
        { title: "Nome", key: "nome" },
        { title: "Status", key: "ativo" },
        { title: "Ações", key: "actions", sortable: false },
    ];

    const items = ref<Categoria[]>([]);
    const total = ref(0);
    const loading = ref(false);
    const error = ref<string | null>(null);
	const current = ref<Categoria | null>(null);

    async function fetchAll(options = {page: 1, limit: 10, search: '', sortBy: '', sortDesc: ''}) {
        loading.value = true;
        error.value = null;

        try {
            const params = new URLSearchParams();
            if (options.page) params.append("page", String(options.page));
            if (options.limit) params.append("limit", String(options.limit));
            if (options.search) params.append("search", options.search);
            if (options.sortBy) {
                params.append("sortBy", options.sortBy);
                params.append("sortDesc", String(options.sortDesc ?? false));
            }

            const res = await fetch(`http://localhost:3000/categorias?${params}`);
            if (!res.ok) throw new Error(`Erro ${res.status}`);

            const data = await res.json();
            items.value = data.items;
            total.value = data.total;
        } catch (e: any) {
            error.value = e.message ?? "Erro desconhecido";
        } finally {
            loading.value = false;
        }
    }

    async function fetchById(id: number) {
        loading.value = true;
        try {
            const res = await fetch(`http://localhost:3000/categorias/${id}`);
            if (!res.ok) throw new Error(`Erro ${res.status}`);
            current.value = await res.json();
        } finally {
            loading.value = false;
        }
    }

    async function criarCategoria(p: Categoria) {        
        loading.value = true;
		try {
			await fetch("http://localhost:3000/categorias", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(p),
            });
			alert.trigger("success", "Categoria criado com sucesso.")
			router.push('/categorias')
		} catch (e: any) {
			error.value = e.message ?? "Erro desconhecido";
			alert.trigger("error", "Falha na criação da categoria.")
		} finally {
			loading.value = false;
		}
    }

    async function atualizarCategoria(p: Categoria) {        
        loading.value = true;
		try {
			await fetch(`http://localhost:3000/categorias/${p.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(p),
            });
			alert.trigger("success", "Categoria atualizada com sucesso.")
			router.push('/categorias')
		} catch (e: any) {
			error.value = e.message ?? "Erro desconhecido";
			alert.trigger("error", "Falha na atualização da categoria.")
		} finally {
			loading.value = false;
		}
    }

    async function deletarCategoria(p: Categoria) {        
        loading.value = true;
		try {
			await fetch(`http://localhost:3000/categorias/${p.id}`, {
                method: "DELETE",
            });
			alert.trigger("success", "Categoria deletada com sucesso.")
			router.push('/produtos')
		} catch (e: any) {
			error.value = e.message ?? "Erro desconhecido";
			alert.trigger("error", "Falha na remoção da categoria.")
		} finally {
			loading.value = false;
		}
    }

    return {
        alert,
		items,
		total,
		loading,
		error,
		current,
		headers,
        fetchById,
        criarCategoria,
        atualizarCategoria,
        deletarCategoria,
        fetchAll
    };
})
