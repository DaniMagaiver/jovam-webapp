import { Requisicao } from './../models/Requisicao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = `${environment.api_url}/requisicao`;

  salvarInformativo(requisicao: Requisicao) {
    return this.httpClient.post(this.baseUrl, requisicao);
  }

  recuperarTodos() {
    return this.httpClient.get<Requisicao[]>(this.baseUrl);
  }

  findBySecretaria(id: string) {
    return this.httpClient.get<Requisicao[]>(`${this.baseUrl}/secretaria/${id}`);
  }
}
