// venda-read.component.ts
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { Venda } from '../venda.model';

@Component({
  selector: 'app-venda-read',
  templateUrl: './venda-read.component.html'
})

export class VendaReadComponent implements OnInit {

  vendas: Venda[] = [];

  displayedColumns = ['id', 'cliente', 'data', 'total', 'actions'];

  constructor(private vendaService: VendaService) {}
  
  ngOnInit(): void {
    this.vendaService.read().subscribe(vendas => {
      this.vendas = vendas;
    });
  }

}

