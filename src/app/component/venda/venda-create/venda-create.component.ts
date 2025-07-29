// venda-create.component.ts
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { Venda } from '../venda.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-create',
  templateUrl: './venda-create.component.html'
})
export class VendaCreateComponent implements OnInit {
  
  venda: Venda = {
    cliente: null,
    funcionario: null,
    formaPagamento: null,
    vndData: new Date().toISOString(),
    vndTotal: 0,
    itens: []
  };
  

  constructor(
    private vendaService: VendaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createVenda(): void {
    this.vendaService.create(this.venda).subscribe(() => {
      this.router.navigate(['/vendas']);
    });
  }
}

