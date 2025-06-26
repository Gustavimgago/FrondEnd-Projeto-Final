import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente-read/cliente.model';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {

  cliente!: Cliente;

  constructor(private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id')
      this.clienteService.readById(id!).subscribe((cliente: Cliente) => {
        this.cliente = cliente
      })
    }
    updateCliente(): void {
      console.log('Cliente a ser atualizado:', this.cliente); // Adicione este log
      // Verifica se existem contatos e endereços
      if (!this.cliente.contatos || !this.cliente.contatos[0] || !this.cliente.enderecos || !this.cliente.enderecos[0]) {
        this.clienteService.showMessage('Por favor, preencha todos os campos obrigatórios!');
        return;
      }
      // Validação dos campos
      if (
        !this.cliente.cliNome.trim() ||
        !this.cliente.cliCpf.trim() ||
        !this.cliente.contatos[0].conEmail?.trim() ||
        !this.cliente.contatos[0].conCelular?.trim() ||
        !this.cliente.contatos[0].conTelefoneComercial?.trim() ||
        !this.cliente.enderecos[0].endRua?.trim() ||
        !this.cliente.enderecos[0].endNumero?.trim() ||
        !this.cliente.enderecos[0].endCidade?.trim() ||
        !this.cliente.enderecos[0].endCep?.trim() ||
        !this.cliente.enderecos[0].endEstado?.trim()
      ) {
        this.clienteService.showMessage('Por favor, preencha todos os campos obrigatórios!');
        return;
      }
      // Chamada ao serviço para atualizar o cliente
      this.clienteService.update(this.cliente).subscribe(() => {
        this.clienteService.showMessage('Cliente atualizado com sucesso!');
        this.router.navigate(['/cliente']);
      }, error => {
        console.error('Erro ao atualizar cliente:', error); // Adicione este log
        this.clienteService.showMessage('Erro ao atualizar cliente: ' + error.message);
      });
    }
    
    cancel(): void {
      this.router.navigate(['/cliente'])
    }
}
