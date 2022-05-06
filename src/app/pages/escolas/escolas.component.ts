import { Component } from '@angular/core';

@Component({
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss'],
})
export class EscolasComponent {
  schools = [{ name: 'Escola 1' }, { name: 'Escola 2' }, { name: 'Escola 3' }];
}
