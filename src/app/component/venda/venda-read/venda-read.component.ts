import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';
import { Venda } from './venda.model';
import { VendaService } from '../venda.service';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html',
  styleUrls: ['./venda-read.component.css']
})
export class VendaReadComponent implements OnInit{

  
  vendas = new MatTableDataSource<Venda>();

  displayedColumns: string[] = [

    'vndId',
    'cliente',
    'formaPagamento',
    'vndConcluida',
    'vndDataVenda',
    'vndTotal',
    'action'
  ];

  constructor(private vendaService: VendaService) {}

  ngOnInit(): void {
    this.loadVendas();
  }

  loadVendas(): void {
    this.vendaService.read().subscribe(vendas => {
      this.vendas.data = vendas;
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.vendas.filter = filterValue.trim().toLowerCase();
  }

}
