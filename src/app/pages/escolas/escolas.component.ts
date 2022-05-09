import { Secretaria } from './../../shared/models/Secretaria.model';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.scss'],
})
export class EscolasComponent {
  constructor(private activedRoute:ActivatedRoute){}

  secretarias:Secretaria[] = this.activedRoute.snapshot.data.secretarias;
}
