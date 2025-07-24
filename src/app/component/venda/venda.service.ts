import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Venda } from './venda-read/venda.model';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  baseUrl = "https://localhost:8080/vendas"
  

  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(vendas: Venda): Observable<Venda>{
    return this.http.post<Venda>(this.baseUrl, vendas)
  }

  read(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.baseUrl)
  }

  readById(id: string): Observable<Venda>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Venda>(url)
  }

  update(vendas :Venda): Observable<Venda>{
    const url = `${this.baseUrl}/${vendas.vndId}`
    return this.http.put<Venda>(url, vendas)
  }

  delete(id: number): Observable<Venda>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Venda>(url)
  }


}
