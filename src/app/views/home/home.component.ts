import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  vendasHoje = 0;
  clientesCadastrados = 0;
  produtosEmEstoque = 0;
  produtosEmFalta = 0;

}
