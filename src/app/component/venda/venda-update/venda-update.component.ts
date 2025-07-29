// venda-update.component.ts
import { Component, OnInit } from '@angular/core';
import { Venda } from '../venda.model';
import { VendaService } from '../venda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venda-update',
  templateUrl: './venda-update.component.html'
})
export class VendaUpdateComponent implements OnInit {
  venda!: Venda;

  constructor(
    private vendaService: VendaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.vendaService.readById(+id!).subscribe(venda => {
      this.venda = venda;
    });
  }

  updateVenda(): void {
    this.vendaService.update(this.venda).subscribe(() => {
      this.router.navigate(['/vendas']);
    });
  }
}

  