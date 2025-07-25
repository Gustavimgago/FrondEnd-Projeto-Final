import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './component/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './component/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductReadComponent } from './component/product/product-read/product-read.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FornecedorReadComponent } from './component/fornecedor/fornecedor-read/fornecedor-read.component';
import { FormaPagamentoReadComponent } from './component/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FornecedorCreateComponent } from './component/fornecedor/fornecedor-create/fornecedor-create.component';
import { FornecedorCrudComponent } from './views/fornecedor-crud/fornecedor-crud.component';
import { FormaPagamentoCreateComponent } from './component/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { MatTableModule } from '@angular/material/table';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { FornecedorUpdateComponent } from './component/fornecedor/fornecedor-update/fornecedor-update.component';
import { FormaPagamentoUpdateComponent } from './component/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { ProductDeleteComponent } from './component/product/product-delete/product-delete.component';
import { FornecedorDeleteComponent } from './component/fornecedor/fornecedor-delete/fornecedor-delete.component'
import { FormaPagamentoDeleteComponent } from './component/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';

import { ClienteCreateComponent } from './component/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './component/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './component/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './component/cliente/cliente-delete/cliente-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { VendaCreateComponent } from './component/venda/venda-create/venda-create.component';
import { VendaCrudComponent } from './views/venda-crud/venda-crud.component';
import { VendaReadComponent } from './component/venda/venda-read/venda-read.component';
import { FuncionarioReadComponent } from './component/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './component/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './component/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './component/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { VendaUpdateComponent } from './component/venda/venda-update/venda-update.component';
import { VendaDeleteComponent } from './component/venda/venda-delete/venda-delete.component';

import { MatIconModule } from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductReadComponent,
    FornecedorReadComponent,
    FornecedorCrudComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoCrudComponent,
    ProductCreateComponent,
    FornecedorCreateComponent,
    FormaPagamentoCreateComponent,
    ProductUpdateComponent,
    FornecedorUpdateComponent,
    FormaPagamentoUpdateComponent,
    ProductDeleteComponent,
    FormaPagamentoDeleteComponent,
    FornecedorDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ClienteCrudComponent,
    VendaCreateComponent,
    VendaCrudComponent,
    VendaReadComponent,
    FuncionarioReadComponent,
    FuncionarioCreateComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    FuncionarioCrudComponent,
    VendaUpdateComponent,
    VendaDeleteComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
