import { Requisicao } from './../../shared/models/Requisicao.model';
import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    templateUrl:'./requisicoes.component.html',
    styleUrls: ['./requisicoes.component.scss']
})
export class RequisicoesComponent{
    requisicoesFormGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private activedRoute:ActivatedRoute) {}

    requisicoes:Requisicao[] = this.activedRoute.snapshot.data.requisicoes;
  
    ngOnInit(): void {
      this.requisicoesFormGroup = this.formBuilder.group({
        title: [null, [Validators.required, Validators.maxLength(50)]],
        subject: [null, [Validators.required]],
        text: [null, [Validators.required]],
      });
    }
}