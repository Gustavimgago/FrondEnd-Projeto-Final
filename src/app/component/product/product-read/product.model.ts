import { Fornecedor } from "../../fornecedor/fornecedor-read/fornecedor.model"

export interface Product{ // Exportando a interface Product
    proId?: number
    proNome: string
    proPrecoCusto: number
    proPrecoVenda: number
    proDescricao: string
    proQuantidadeStock: number
    proStatus: string
    proCategoria: string
    proCodigoBarras: string 
    proMarca: string 
    proDataCadastro: Date
    proDataAtualizacao: Date
    fornecedor?: Fornecedor
}