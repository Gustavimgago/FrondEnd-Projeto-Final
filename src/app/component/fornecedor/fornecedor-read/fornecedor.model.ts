export interface Fornecedor{
    forId?: number;
    forNomeFantasia: string;
    forCnpj: string;
    forRazaoSocial: string;
    
    // Contato
    conCelular: string;
    conTelefoneComercial: string;
    conEmail: string;
  
    // Endereço
    endRua: string;
    endNumero: string;
    endCidade: string;
    endCep: string;
    endEstado: string;
}