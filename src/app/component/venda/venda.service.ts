import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda } from './venda.model';
@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private baseUrl = 'http://localhost:8080/vendas';

  constructor(private http: HttpClient) {}

  create(venda: Venda): Observable<Venda> {
    return this.http.post<Venda>(this.baseUrl, venda);
  }

  read(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.baseUrl);
  }

  readById(id: number): Observable<Venda> {
    return this.http.get<Venda>(`${this.baseUrl}/${id}`);
  }

  update(venda: Venda): Observable<Venda> {
    return this.http.put<Venda>(`${this.baseUrl}/${venda.vndId}`, venda);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  
}