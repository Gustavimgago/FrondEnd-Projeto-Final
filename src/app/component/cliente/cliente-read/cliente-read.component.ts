import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from './cliente.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  cliente!: MatTableDataSource<Cliente>; // Usando MatTableDataSource para facilitar a filtragem
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
      this.cliente = new MatTableDataSource(cliente); // Inicializa o MatTableDataSource
      console.log(cliente);
    });
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cliente.filter = filterValue.trim().toLowerCase(); // Aplica o filtro
  }
}

