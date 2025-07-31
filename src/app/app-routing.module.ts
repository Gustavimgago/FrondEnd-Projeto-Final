import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { FornecedorUpdateComponent } from './component/fornecedor/fornecedor-update/fornecedor-update.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { FornecedorDeleteComponent } from './component/fornecedor/fornecedor-delete/fornecedor-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { FuncionarioCreateComponent } from './component/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './component/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './component/funcionario/funcionario-delete/funcionario-delete.component';




// Define as rotas da aplicação
const routes: Routes = [
  {
    path: "", // Caminho vazio que redireciona para a página inicial
    component: HomeComponent // Componente que será exibido na rota raiz
  },
  {
    path: "products", // Caminho para a página de produtos
    component: ProductCrudComponent // Componente que gerencia a CRUD de produtos
  },
  {
    path: "products/create", // Caminho para a página de criação de produtos
    component: ProductCreateComponent // Componente que exibe o formulário de criação de produtos
  },
  {
    path: "fornecedores", // Caminho para a página de fornecedores
    component: FornecedorCrudComponent // Componente que gerencia a CRUD de fornecedores
  },
  {
    path: "fornecedor/create", // Caminho para a página de criação de fornecedores
    component: FornecedorCreateComponent // Componente que exibe o formulário de criação de fornecedores
  },
  {
    path: "formaPagamento", // Caminho para a página de formas de pagamento
    component: FormaPagamentoCrudComponent // Componente que gerencia a CRUD de formas de pagamento
  },
  {
    path: "formaPagamento/create", // Caminho para a página de criação de formas de pagamento
    component: FormaPagamentoCreateComponent // Componente que exibe o formulário de criação de formas de pagamento
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "fornecedores/update/:id",
    component: FornecedorUpdateComponent
  },
  {
    path: "forma-pagamento/update/:id",
    component: FormaPagamentoUpdateComponent
  },
  {
    path: "products/delete/:proId",
    component: ProductDeleteComponent
  },
  {
    path: "forma-pagamento/delete/:fpgId", 
    component: FormaPagamentoDeleteComponent

  },
  {
    path: "fornecedores/delete/:forId", 
    component: FornecedorDeleteComponent
  },
  {
    path: "cliente",
    component: ClienteCrudComponent
  },
  {
    path: "cliente/create",
    component: ClienteCreateComponent
  },
  {
    path: "cliente/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "cliente/delete/:cliId",
    component: ClienteDeleteComponent
  },
  {
  path:"funcionarios",
  component: FuncionarioCrudComponent
},
{
  path: "funcionarios/create", 
  component: FuncionarioCreateComponent 
},
  {
  path:"funcionarios/update/:id",
  component: FuncionarioUpdateComponent
},
{
  path: "funcionarios/delete/:funId",
component: FuncionarioDeleteComponent
}

];

// Define o módulo de roteamento da aplicação
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa o RouterModule e configura as rotas
  exports: [RouterModule] // Exporta o RouterModule para que possa ser utilizado em outros módulos
})
export class AppRoutingModule { } // Declara o módulo de roteamento
