import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../models/Professor.model';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = `${environment.api_url}/professor`;

  salvarProfessor(professor: Professor) {
    return this.httpClient.post(this.baseUrl, professor);
  }

  recuperarTodosOsProfessores(){
    return this.httpClient.get(this.baseUrl);
  }
}
