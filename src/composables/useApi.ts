import { ref } from "vue";

interface FetchOptions {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortDesc?: boolean;
}

export function useApi<T>(endpoint: string) {
    const items = ref<T[]>([]);
    const total = ref(0);
    const loading = ref(false);
    const error = ref<string | null>(null);

    async function fetchAll(options: FetchOptions = {}) {
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

            const res = await fetch(`http://localhost:3000/${endpoint}?${params}`);
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

    return {
        items,
        total,
        loading,
        error,
        fetchAll,
    };
}
