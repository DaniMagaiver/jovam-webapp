import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

interface Menu {
  title: string;
  route: string;
}
@Component({
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  selector: 'jovam-header',
})
export class HeaderComponent {
  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  menuData: Menu[] = [
    {
      title: 'Início',
      route: '',
    },
    {
      title: 'Atas',
      route: './atas',
    },
  ];

  go(menu: Menu) {
    this.router.navigate([menu.route], { relativeTo: this.activedRoute });
  }
}
