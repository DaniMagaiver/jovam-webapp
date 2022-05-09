import { ProfileService } from './../services/profile.service';
import { SecretariaService } from './../services/secretaria.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Secretaria } from '../models/Secretaria.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SecretariasResolver implements Resolve<Secretaria[]> {
  constructor(
    private secretariaService: SecretariaService,
    private profileService: ProfileService
  ) {}
  resolve(): Observable<Secretaria[]> {
    const user = this.profileService.user();
    return this.secretariaService.listarSecretarias(user.id);
  }
}
