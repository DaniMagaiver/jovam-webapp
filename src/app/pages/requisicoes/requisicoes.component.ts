import { ModalsService } from './../../shared/services/modals.service';
import { ProfileService } from './../../shared/services/profile.service';
import { RequisicaoService } from 'src/app/shared/services/requisicao.service';
import { Requisicao } from './../../shared/models/Requisicao.model';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './requisicoes.component.html',
  styleUrls: ['./requisicoes.component.scss'],
})
export class RequisicoesComponent {
  requisicoesFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute,
    private requisicaoService: RequisicaoService,
    private profileService: ProfileService,
    private modalsService: ModalsService
  ) {}

  requisicoes: Requisicao[] = this.activedRoute.snapshot.data.requisicoes;
  selectedRequisicao: Requisicao;
  isCreateMode: boolean;

  ngOnInit(): void {
    this.requisicoesFormGroup = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(50)]],
      subtitulo: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
    });
  }

  sendRequisicao() {
    const { id } = this.profileService.user();
    const requisicao: Requisicao = {
      ...this.requisicoesFormGroup.value,
      secretaria: id,
    };
    this.requisicaoService
      .salvarInformativo(requisicao)
      .pipe(switchMap(() => this.requisicaoService.findBySecretaria(id)))
      .subscribe((requisicoes) => {
        this.requisicoes= requisicoes;
        this.modalsService.showMessage(
          'Sucesso',
          'Requisição enviada com sucesso'
        );
      });
    this.requisicoesFormGroup.reset();
  }
}
