import { ProfileService } from './../services/profile.service';
import { TurmaService } from './../services/turma.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Turma } from '../models/Turma.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TurmaResolver implements Resolve<Turma[]>{
    constructor(private turmaService:TurmaService, private profileService:ProfileService){}
    resolve(): Observable<Turma[]> {
        const user = this.profileService.user();
        return this.turmaService.findBySecretariaId(user.id);
    }

}