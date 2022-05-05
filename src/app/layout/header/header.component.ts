import { Component } from '@angular/core';
@Component({
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  selector: 'jovam-header',
})
export class HeaderComponent {
  constructor() {}

  menuData = [
    {
      title: 'Início',
      route: '',
    },
    {
      title: 'Atas',
      route: '',
    },
    {
      title: 'Secretarias',
      route: '',
    },
  ];
}
