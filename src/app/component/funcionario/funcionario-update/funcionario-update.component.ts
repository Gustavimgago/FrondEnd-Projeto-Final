import { Component } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent{
  funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id')
      this.funcionarioService.readById(id!).subscribe((funcionario: Funcionario) => {
        this.funcionario = funcionario
      })
    }
    updateFuncionario(): void {
      console.log('Funcionario a ser atualizado:', this.funcionario); // Log para depuração
      // Validação dos campos
      if (
        !this.funcionario.funciNome.trim() ||
        !this.funcionario.funciCargo.trim() ||
        !this.funcionario.funciCpf.trim() ||
        !this.funcionario.conEmail.trim() ||
        !this.funcionario.conCelular.trim() ||
        !this.funcionario.endRua.trim() ||
        !this.funcionario.endNumero.trim() ||
        !this.funcionario.endCidade.trim() ||
        !this.funcionario.endCep.trim() ||
        !this.funcionario.endEstado.trim()
      ) {
        this.funcionarioService.showMessage('Por favor, preencha todos os campos obrigatórios!');
        return;
      }
      // Chamada ao serviço para atualizar o cliente
      this.funcionarioService.update(this.funcionario).subscribe({
        next: () => {
          this.funcionarioService.showMessage('Funcionario atualizado com sucesso!');
          this.router.navigate(['/funcionarios']);
        },
        error: (error) => {
          console.error('Erro ao atualizar funcionario:', error); // Log para depuração
          this.funcionarioService.showMessage('Erro ao atualizar funcionario: ' + error.message);
        }
      });
    }
    cancel(): void {
      this.router.navigate(['/cliente']);
    }
  }