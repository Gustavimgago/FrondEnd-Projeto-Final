export interface Endereco {
    endId?: number; // ID do endereço, se necessário
    endRua: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
}
export interface Contato {
    conId?: number; // ID do contato, se necessário
    conEmail: string;
    conCelular: string;
    conTelefoneComercial?: string; // Opcional
}
export interface Cliente {
    cliId?: number; // ID do cliente, opcional
    cliNome: string;
    cliCpf: string;
    enderecos: Endereco[]; // Array de endereços
    contatos: Contato[]; // Array de contatos
}
