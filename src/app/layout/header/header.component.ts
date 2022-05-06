import { StorageService } from './../../shared/services/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Menu {
  title: string;
  route: string;
  profile: string;
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
      title: 'Início',
      route: '',
      profile: '',
    },
    {
      title: 'Atas',
      route: './atas',
      profile: '',
    },
    {
      title: 'Escolas',
      route: './escolas',
      profile: 'conselho',
    },
    {
      title: 'Turmas',
      route: './turmas',
      profile: 'escola',
    },
  ];

  activedProfile = this.storageService.getInServiceStorage('profile');

  ngOnInit(): void {
    if(!this.activedProfile){
      this.router.navigate([''], { relativeTo: this.activedRoute });
    }
  }

  go(menu: Menu) {
    this.router.navigate([menu.route], { relativeTo: this.activedRoute });
  }
}
