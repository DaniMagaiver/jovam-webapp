import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../models/Aluno.model';
import { Page } from '../models/Page.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = `${environment.api_url}/aluno`;

  salvarAluno(aluno: Aluno) {
    return this.httpClient.post(this.baseUrl, aluno);
  }

  recuperarTodosOsAlunos() {
    return this.httpClient.get<Page<Aluno>>(this.baseUrl);
  }
}
