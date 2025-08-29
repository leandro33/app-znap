export interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    ativo: number;
}

export interface Produto {
    id: number;
    nome: string;
    descricao: string;
    categorias_id: number | null;
    preco: number | null;
    ativo: number;
}

export interface Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    ativo: number;
}

export interface Pedido {
    cliente_id: number;
    itens: [];
}