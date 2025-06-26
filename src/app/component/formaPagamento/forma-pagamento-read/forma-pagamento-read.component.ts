import { Component, OnInit } from '@angular/core';
import { FormaPagamento } from './forma-pagamento.model'; // Ajuste o caminho conforme necessário
import { FormaPagamentoService } from '../forma-pagamento.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-forma-pagamento-read',
  templateUrl: './forma-pagamento-read.component.html',
  styleUrls: ['./forma-pagamento-read.component.css']
})
export class FormaPagamentoReadComponent implements OnInit {

  formaPagamentos!: FormaPagamento[]; 
  displayedColumns = ['fpgId', 'fpgDescricao', 'fpgTipo', 'fpgTaxa', 'fpgParcelamento', 'action']; 

  constructor(private formaPagamentoService: FormaPagamentoService) { }

  ngOnInit(): void {
    this.formaPagamentoService.read().subscribe(formaPagamentos => { 
      this.formaPagamentos = formaPagamentos;    
      console.log(this.formaPagamentos);
    });
  }
}