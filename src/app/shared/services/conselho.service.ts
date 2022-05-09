import { Page } from './../models/Page.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Conselho } from './../models/Conselho.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConselhoService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = `${environment.api_url}/conselho`;

  salvarConselho(conselho: Conselho) {
    return this.httpClient.post(this.baseUrl, conselho);
  }

  recuperarTodos() {
    return this.httpClient.get<Page<Conselho>>(this.baseUrl);
  }
}
