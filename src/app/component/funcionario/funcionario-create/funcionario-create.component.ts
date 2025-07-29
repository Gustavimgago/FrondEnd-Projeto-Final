import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit{

  funcionario: Funcionario = {
    funciNome: "",
    funciCargo: "",
    funciCpf: "",

    endRua: "",
    endNumero: "",
    endCidade: "",
    endCep: "",
    endEstado: "",
  
    conEmail: "",
    conCelular: "",
    conTelefoneComercial: ""

  };

  constructor(private funcionarioService: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createFuncionario(): void{
    if(!this.funcionario.funciNome.trim() || 
    !this.funcionario.funciCargo.trim() ||
    !this.funcionario.funciCpf.trim() ||
    !this.funcionario.conEmail.trim() ||
    !this.funcionario.conCelular.trim() ||
    !this.funcionario.endRua.trim() ||
    !this.funcionario.endNumero.trim() ||
    !this.funcionario.endCidade.trim() ||
    !this.funcionario.endCep.trim() ||
    !this.funcionario.endEstado.trim()) {
    this.funcionarioService.showMessage('Por favor, preencha todos os campos obrigatórios!');
    return;
  }

  console.log("Dados enviados:", this.funcionario);

  this.funcionarioService.create(this.funcionario).subscribe({
    next: () => {
      this.funcionarioService.showMessage('Funcionario criado com sucesso!');
      this.router.navigate(['/funcionarios'])
    },
  });
}

cancel(): void{
  this.router.navigate(['/funcionarios']);
}
}
