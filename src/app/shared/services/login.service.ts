import { Conselho } from './../models/Conselho.model';
import { Secretaria } from './../models/Secretaria.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Login{profile:string,id:string,password:string};

@Injectable({
    providedIn: 'root'
})
export class LoginService{
    constructor(private httpClient:HttpClient){}

    private baseUrl = `${environment.api_url}/login`

    login(login:Login){
        const {id, password, profile} = login;
        return this.httpClient.post<Secretaria|Conselho>(`${this.baseUrl}/${profile}`, null, {headers:{
            password,
            id
        }})
    }
}