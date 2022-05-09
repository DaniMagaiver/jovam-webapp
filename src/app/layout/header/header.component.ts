import { StorageService } from './../../shared/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Menu {
  title: string;
  route: string;
  profiles: string[];
}
@Component({
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  selector: 'jovam-header',
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {}

  menuData: Menu[] = [
    {
      title: 'Requisições',
      route: './requisicoes',
      profiles: ['secretaria'],
    },
    {
      title: 'Requisições',
      route: './requisicoes/resposta',
      profiles: ['conselho'],
    },
    {
      title: 'Atas',
      route: './atas',
      profiles: ['conselho', 'secretaria'],
    },
    {
      title: 'Secretarias',
      route: './escolas',
      profiles: ['conselho'],
    },
    {
      title: 'Turmas',
      route: './turmas',
      profiles: ['secretaria'],
    },
  ];

  activedProfile: string = this.storageService.getInSessionStorage('profile');

  ngOnInit(): void {
    if (!this.activedProfile) {
      this.router.navigate([''], { relativeTo: this.activedRoute });
    }
  }

  go(menu: Menu) {
    this.router.navigate([menu.route], { relativeTo: this.activedRoute });
  }

  exit(){
    this.storageService.cleanStorage();
    this.router.navigate([''], { relativeTo: this.activedRoute });
  }
}
