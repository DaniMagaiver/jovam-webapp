import { AtaService } from './../services/ata.service';
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Ata } from "../models/Ata.model";

@Injectable({
    providedIn: 'root'
})
export class AtaResolver implements Resolve<Ata[]>{
    constructor(private ataService:AtaService){}
    resolve(){
        return this.ataService.recuperarTodos();
    }

}