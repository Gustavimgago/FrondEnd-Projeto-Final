import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from './product.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: MatTableDataSource<Product>; // Array de produtos 
  displayedColumns = ['proId', 'proNome', 'proPrecoCusto', 'proPrecoVenda', 'proDescricao','proQuantidadeStock', 'proStatus', 'proMarca','action']; // Colunas da tabela

  constructor(private productService: ProductService) { } // Construtor do componente

  ngOnInit(): void { // Método chamado quando o componente é inicializado
    this.productService.read().subscribe(products => { // Chamando o método read do ProductService para elr os produtos
      this.products = new MatTableDataSource(products); // Atribuindo os produtos lidos ao array de produtos
      console.log(products); // Exibindo os produtos no console
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }
}