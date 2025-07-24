import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venda-crud',
  templateUrl: './venda-crud.component.html',
  styleUrls: ['./venda-crud.component.css']
})
export class VendaCrudComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  navigateToVendaCreate(): void{
    this.router.navigate(['/vendas/create'])
  }

}
