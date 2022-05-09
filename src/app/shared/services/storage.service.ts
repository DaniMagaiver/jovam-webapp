import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService{
    constructor(){}

    private serviceStorage:{[key:string]:string} = {};

    saveInSessionStorage(key:string, value:string){
        window.sessionStorage.setItem(key,value);
    }

    getInSessionStorage(key:string):any{
        return window.sessionStorage.getItem(key);
    }

    saveInLocalStorage(key:string, value:string){
        window.localStorage.setItem(key,value);
    }

    getInLocalStorage(key:string){
        return window.localStorage.getItem(key);
    }

    saveInServiceStorage(key:string, value:string){
        this.serviceStorage = {...this.serviceStorage, [key]:value}
    }

    getInServiceStorage(key:string){
        return this.serviceStorage[key];
    }

    cleanStorage(){
        window.localStorage.clear();
        window.sessionStorage.clear();
        this.serviceStorage = {};
    }
}