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

   endRua: "",
   endNumero: "",
  endCidade: "",
  endCep: "",
  endEstado: "",
 
    
    conEmail: "",
    conCelular: "",
    conTelefoneComercial: ""
  
  };


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
      
  }
  
  createCliente(): void {
    if (!this.cliente.cliNome.trim() ||
        !this.cliente.cliCpf.trim() ||
        !this.cliente.conEmail.trim() ||
        !this.cliente.conCelular.trim() ||
        !this.cliente.endRua.trim() ||
        !this.cliente.endNumero.trim() ||
        !this.cliente.endCidade.trim() ||
        !this.cliente.endCep.trim() ||
        !this.cliente.endEstado.trim()) {
        this.clienteService.showMessage('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    console.log('Dados enviados:', this.cliente);
    
    this.clienteService.create(this.cliente).subscribe({
        next: () => {
            this.clienteService.showMessage('Cliente criado com sucesso!');
            this.router.navigate(['/cliente']);
        },
        error: (err) => {
            console.error('Erro ao criar cliente:', err);
            this.clienteService.showMessage('Erro ao criar cliente!');
        }
    });
    
}
cancel(): void {
    this.router.navigate(['/cliente']);
}
}


