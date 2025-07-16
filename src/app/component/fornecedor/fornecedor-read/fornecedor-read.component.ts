import { Component, OnInit, ViewChild } from '@angular/core';
import { Fornecedor } from './fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-fornecedor-read',
  templateUrl: './fornecedor-read.component.html',
  styleUrls: ['./fornecedor-read.component.css']
})
export class FornecedorReadComponent implements OnInit { 

  fornecedores!: MatTableDataSource<Fornecedor>; 
  displayedColumns = [
    'forId', 
    'forNomeFantasia', 
    'forCnpj', 
    'forRazaoSocial', 
    'enderecos',
    'contatos',
    'action'
  ]; 

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.fornecedorService.read().subscribe(fornecedores => { 
      this.fornecedores = new MatTableDataSource(fornecedores);
      console.log(fornecedores);
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.fornecedores.filter = filterValue.trim().toLowerCase();
  }
}
