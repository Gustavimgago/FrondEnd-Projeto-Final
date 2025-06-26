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
    conEmail: "",
    endRua: "",
    endNumero: "",
    endCidade: "",
    endCep: "",
    endEstado: "",
    conCelular: "",
    conTelefoneComercial: ""
  };


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
      
  }
  
  createCliente(): void {
  
    if (
      !this.cliente.cliNome.trim() ||
      !this.cliente.cliCpf.trim() ||
      !this.cliente.conEmail.trim ||
      !this.cliente.endRua.trim() ||
      !this.cliente.endNumero.trim() ||
      !this.cliente.endCidade.trim() ||
      !this.cliente.endCep.trim() ||
      !this.cliente.endEstado.trim() ||
      !this.cliente.conCelular.trim() ||
      !this.cliente.conTelefoneComercial.trim() 
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
