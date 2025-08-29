
import { ref } from "vue";
import type { Produto } from "@/types/index";
import { createSharedComposable } from "@vueuse/core"
import { useCategorias } from "@/pages/dashboard/categorias/composables/useCategorias"
import { useAlert } from "@/composables/useAlert"
import { useRouter } from "vue-router";

export const useProdutos = createSharedComposable(() => {
	const { fetchAll: fetchCategorias, items: categorias } = useCategorias();
	const alert = useAlert()
	const router = useRouter()

	const items = ref<Produto[]>([]);
	const total = ref(0);
	const loading = ref(false);
	const error = ref<string | null>(null);
	const current = ref<Produto | null>(null);

	const headers = [
		{ title: "Nome", key: "nome" },
		{ title: "Categoria", key: "categorias_id" },
		{ title: "Preço", key: "preco" },
		{ title: "Status", key: "ativo" },
		{ title: "Ações", key: "actions", sortable: false },
	];

	async function fetchAll(options = { page: 1, limit: 10, search: '', sortBy: '', sortDesc: '' }) {
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

			const res = await fetch(`http://localhost:3000/produtos?${params}`);
			if (!res.ok) throw new Error(`Erro ${res.status}`);

			const data = await res.json();
			items.value = data.items.map((produto: any) => {
				const categoria = categorias.value.find(c => c.id === produto.categorias_id);
				return {
					...produto,
					categorias_id: categoria ? categoria.nome : null
				};
			});

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
			const res = await fetch(`http://localhost:3000/produtos/${id}`);
			if (!res.ok) throw new Error(`Erro ${res.status}`);
			current.value = await res.json();
		} finally {
			loading.value = false;
		}
	}

	async function criarProduto(p: Produto) {
		loading.value = true;
		try {
			await fetch("http://localhost:3000/produtos", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(p),
			});
			alert.trigger("success", "Produto criado com sucesso.")
			router.push('/produtos')
		} catch (e: any) {
			error.value = e.message ?? "Erro desconhecido";
			alert.trigger("error", "Falha na criação do produto.")
		} finally {
			loading.value = false;
		}
	}

	async function atualizarProduto(p: Produto) {
		loading.value = true;
		try {
			await fetch(`http://localhost:3000/produtos/${p.id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(p),
			});
			alert.trigger("success", "Produto salvo com sucesso.")
			router.push('/produtos')

		} catch (e: any) {
			error.value = e.message ?? "Erro desconhecido";
			alert.trigger("error", "Falha na atualização do produto.")
		} finally {
			loading.value = false;
		}
	}

	async function deletarProduto(p: Produto) {
		loading.value = true;
		try {
			await fetch(`http://localhost:3000/produtos/${p.id}`, {
				method: "DELETE",
			});
			alert.trigger("success", "Produto deletado com sucesso.")
			router.push('/produtos')

		} catch (e: any) {
			error.value = e.message ?? "Erro desconhecido";
			alert.trigger("error", "Falha na remoção do produto.")
		} finally {
			loading.value = false;
		}
	}

	async function getCategorias() {
		await fetchCategorias()
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
		criarProduto,
		atualizarProduto,
		deletarProduto,
		fetchAll,
		getCategorias
	};
})
