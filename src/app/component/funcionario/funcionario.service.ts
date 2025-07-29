import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  baseUrl = "http://localhost:8080/funcionarios"; // URL base da API
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


    /** Exibe uma mensagem de notificação. */
    showMessage(msg: string): void {
      this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      });
    }


    create(funcionario: Funcionario): Observable<Funcionario>{
      return this.http.post<Funcionario>(this.baseUrl, funcionario)
    }
  
    read(): Observable<Funcionario[]>{
      return this.http.get<Funcionario[]>(this.baseUrl)
    }
   
    readById(funciId: string): Observable<Funcionario>{
      const url = `${this.baseUrl}/${funciId}`
      return this.http.get<Funcionario>(url)
    }
  
    update(funcionario: Funcionario): Observable<Funcionario>{
      const url = `${this.baseUrl}/${funcionario.funciId}`
      return this.http.put<Funcionario>(url, funcionario)
    }
  
  
    delete(id: number): Observable<Funcionario>{
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<Funcionario>(url)
    }
}
