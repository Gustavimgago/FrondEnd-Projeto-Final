import { Cliente } from "../cliente/cliente-read/cliente.model";
import { FormaPagamento } from "../formaPagamento/forma-pagamento-read/forma-pagamento.model";
import { Funcionario } from "../funcionario/funcionario.model";
import { ItemVenda } from "./item-venda.model";


export interface Venda {
    vndId?: number;
    cliente: Cliente;
    funcionario: Funcionario;
    formaPagamento: FormaPagamento;
    vndData: string;
    vndTotal: number;
    itens: ItemVenda[];
  }
  
  
  // Defina também as interfaces Cliente, Funcionario, FormaPagamento e Produto
  
