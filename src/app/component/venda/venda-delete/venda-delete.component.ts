// venda-delete.component.ts
import { Component, OnInit } from '@angular/core';
import { VendaService } from '../venda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-venda-delete',
  templateUrl: './venda-delete.component.html'
})
export class VendaDeleteComponent implements OnInit {
  vendaId!: number;

  constructor(
    private vendaService: VendaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.vendaId = +this.route.snapshot.paramMap.get('id')!;
  }

  deleteVenda(): void {
    this.vendaService.delete(this.vendaId).subscribe(() => {
      this.router.navigate(['/vendas']);
    });
  }
}
