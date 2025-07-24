import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios!: MatTableDataSource<Funcionario>;

  displayedColumns=[
    'funciId',
    'funciNome',
    'funciCargo',
    'funciCpf',
    'enderecos',
    'contatos',
    'action',
  ]

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.read().subscribe(funcionarios=> {
      this.funcionarios = new MatTableDataSource(funcionarios);
      console.log(funcionarios)
    });
  }
  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.funcionarios.filter = filterValue.trim().toLowerCase(); // Aplica o filtro
  }


}
