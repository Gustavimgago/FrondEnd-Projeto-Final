import { Cliente } from "../../cliente/cliente-read/cliente.model";
import { FormaPagamento } from "../../formaPagamento/forma-pagamento-read/forma-pagamento.model";
import { ItemVenda } from "./item-venda.model";

export interface Venda {
    vndId?: number;
    cliente: Cliente;
    //funcionario: Funcionario;
    formaPagamento: FormaPagamento;
    vndDataVenda?: Date;
    vndTotal?: number;
    vndConcluida: boolean;
    vndObservacao: string;
    itens: ItemVenda[];
}
