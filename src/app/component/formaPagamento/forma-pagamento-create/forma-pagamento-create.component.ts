import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from '../forma-pagamento.service';
import { Router } from '@angular/router';
import { FormaPagamento } from '../forma-pagamento-read/forma-pagamento.model';

@Component({
  selector: 'app-forma-pagamento-create',
  templateUrl: './forma-pagamento-create.component.html',
  styleUrls: ['./forma-pagamento-create.component.css']
})
export class FormaPagamentoCreateComponent implements OnInit {

  formaPagamento: FormaPagamento = {
    fpgDescricao: "",
    fpgTipo: "",
    fpgTaxa: 0,
    fpgParcelamento: ""
  };

  constructor(private formaPagamentoService: FormaPagamentoService,
              private router: Router) { }

  ngOnInit(): void { }

  createFormaPagamento(): void {

    if(
      !this.formaPagamento.fpgDescricao.trim() ||
      !this.formaPagamento.fpgTipo.trim() ||
       this.formaPagamento.fpgTaxa <= 0 ||
      !this.formaPagamento.fpgParcelamento.trim()
    ){
      this.formaPagamentoService.showMessage('Por favor, preencha todos os campos obrigatorios')
      return;
    }
    this.formaPagamentoService.create(this.formaPagamento).subscribe(() => {
      this.formaPagamentoService.showMessage('Forma de pagamento criada!');
      this.router.navigate(['/formaPagamento']); // Corrigido para o caminho correto
    });
  }

  cancel(): void {
    this.router.navigate(['/formaPagamento']); // Corrigido para o caminho correto
  }
}

