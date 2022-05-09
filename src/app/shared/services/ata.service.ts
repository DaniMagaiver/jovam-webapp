import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Ata } from '../models/Ata.model';
import { Page } from '../models/Page.model';

@Injectable({
    providedIn: 'root'
})
export class AtaService{
    constructor(private httpClient:HttpClient){}
    private baseUrl = `${environment.api_url}/ata`;

    salvarAta(ata:Omit<Ata, 'id'>){
        return this.httpClient.post(this.baseUrl, ata);
    }

    recuperarTodos(){
        return this.httpClient.get<Ata[]>(this.baseUrl);
    }
}