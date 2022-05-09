import { RequisicaoService } from './../services/requisicao.service';
import { Resolve } from '@angular/router';
import { iif, of } from 'rxjs';
import { Requisicao } from '../models/Requisicao.model';
import { StorageService } from '../services/storage.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RequisicaoResolver implements Resolve<Requisicao[]> {
  constructor(
    private requisicaoService: RequisicaoService,
    private storageService: StorageService
  ) {}
  resolve() {
    try {
      const profile =  this.storageService.getInSessionStorage('profile');
      const user = this.storageService.getInSessionStorage('user');
      return iif(
        () => profile === 'secretaria',
        this.requisicaoService.findBySecretaria(JSON.parse(user).id),
        this.requisicaoService.recuperarTodos()
      ).pipe(tap(console.log));
    } catch (error) {
      console.error(error);
      return of([]);
    }
  }
}
