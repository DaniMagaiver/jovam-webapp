import { Conselho } from './../models/Conselho.model';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Secretaria } from '../models/Secretaria.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private storageService: StorageService) {}

  user(): Secretaria | Conselho {
    return JSON.parse(this.storageService.getInSessionStorage('user'));
  }

  profile(): string {
    return this.storageService.getInSessionStorage('profile');
  }
}
