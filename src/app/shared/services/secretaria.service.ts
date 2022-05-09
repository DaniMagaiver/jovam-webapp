import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Secretaria } from '../models/Secretaria.model';

@Injectable({
    providedIn: 'root'
})
export class SecretariaService{
    constructor(private httpClient:HttpClient){}

    private baseUrl = `${environment.api_url}/secretaria`;

    criarSecretaria(secretaria: Secretaria, id:string){
        return this.httpClient.post(`${this.baseUrl}/${id}`, secretaria);
    }

    listarSecretarias(id:string){
        return this.httpClient.get<Secretaria[]>(`${this.baseUrl}/${id}`);
    }
}