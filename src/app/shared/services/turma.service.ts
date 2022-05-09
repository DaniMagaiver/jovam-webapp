import { Turma } from './../models/Turma.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = `${environment.api_url}/turma`;

  saveTurma(turma: Turma) {
    return this.httpClient.post(this.baseUrl, turma);
  }

  procurarTodosAlunos() {
    return this.httpClient.get(this.baseUrl);
  }

  findBySecretariaId(id: string) {
    return this.httpClient.get<Turma[]>(`${this.baseUrl}/${id}`);
  }
}
