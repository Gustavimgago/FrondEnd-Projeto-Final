import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fornecedor } from '../fornecedor-read/fornecedor.model'; // Ajuste o caminho conforme necessário
import { FornecedorService } from '../fornecedor.service'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-fornecedor-create',
  templateUrl: './fornecedor-create.component.html',
  styleUrls: ['./fornecedor-create.component.css']
})
export class FornecedorCreateComponent implements OnInit {

  fornecedor: Fornecedor = {
    forNomeFantasia: "",
    forCnpj: "",              
    forRazaoSocial: "",
  

    conEmail: "",
    conCelular: "",
    conTelefoneComercial: "",

    endRua: "",
    endNumero: "",
    endCidade: "",
    endCep: "",
    endEstado: ""

  };


  // Importando FornecedorService
  constructor(private fornecedorService: FornecedorService, private router: Router) { }
 
  ngOnInit(): void {
    // Inicializações adicionais, se necessário
  }

  createFornecedor(): void {
    if (
      !this.fornecedor.forNomeFantasia.trim() ||
      !this.fornecedor.forCnpj.trim() ||
      !this.fornecedor.forRazaoSocial.trim() 
      
    ) {
      this.fornecedorService.showMessage('Por favor, preencha todos os campos obrigatórios');
      return; // impede envio se inválido
    }
  
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor criado!');
      this.router.navigate(['/fornecedores']);
    });
  }

  cancel(): void {
    this.router.navigate(['/fornecedores']); // Ajuste a rota conforme necessário
  }
}