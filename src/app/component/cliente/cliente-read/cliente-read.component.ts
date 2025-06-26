import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit{

  cliente!: Cliente[];
  displayedColumns = [
    'cliId', 
    'cliNome', 
    'cliCpf', 
    'enderecos',
    'contatos', 
    'action'
  ];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
      this.clienteService.read().subscribe(cliente => {
        this.cliente = cliente;
        console.log(cliente)
      });
  }

}
