import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente-read/cliente.model';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = { 
    cliNome: "",
    cliCpf: "",
    enderecos: [{
      endRua: "",
      endNumero: "",
      endCidade: "",
      endCep: "",
      endEstado: ""
    }],
    contatos: [{
      conEmail: "",
      conCelular: "",
      conTelefoneComercial: ""
    }]
  };


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
      
  }
  
  createCliente(): void {
  
    if (!this.cliente.contatos || !this.cliente.contatos[0] ||
      !this.cliente.cliNome.trim() ||
      !this.cliente.cliCpf.trim() ||
      !this.cliente.contatos[0].conEmail?.trim() || // Operador opcional
      !this.cliente.contatos[0].conCelular?.trim() ||
      !this.cliente.contatos[0].conTelefoneComercial?.trim() ||
      !this.cliente.enderecos?.[0]?.endRua?.trim() ||
      !this.cliente.enderecos?.[0]?.endNumero?.trim() ||
      !this.cliente.enderecos?.[0]?.endCidade?.trim() ||
      !this.cliente.enderecos?.[0]?.endCep?.trim() ||
      !this.cliente.enderecos?.[0]?.endEstado?.trim()
  ) {
    this.clienteService.showMessage('Por favor, preencha todos os campos obrigatórios!');
    return;
  }
  
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!');
      this.router.navigate(['/cliente']);
    });
  }



  cancel(): void {
    this.router.navigate(['/cliente']);
  }
}


