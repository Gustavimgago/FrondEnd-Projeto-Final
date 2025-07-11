import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from './forma-pagamento.model'; // Ajuste o caminho conforme necessário
import { FormaPagamentoService } from '../forma-pagamento.service';
import { MatTableDataSource } from '@angular/material/table'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  formaPagamentos!: MatTableDataSource<FormaPagamento>; 
  displayedColumns = ['fpgId', 'fpgDescricao', 'fpgTipo', 'fpgTaxa', 'fpgParcelamento', 'action']; 

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formaPagamentos => { 
      this.formaPagamentos =  new MatTableDataSource (formaPagamentos);    
      console.log(formaPagamentos);
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.formaPagamentos.filter = filterValue.trim().toLowerCase(); // Aplica o filtro
  }
}


