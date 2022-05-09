import { RequisicaoService } from 'src/app/shared/services/requisicao.service';
import { Requisicao } from './../../shared/models/Requisicao.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AtaService } from 'src/app/shared/services/ata.service';
import { ModalsService } from 'src/app/shared/services/modals.service';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Ata } from 'src/app/shared/models/Ata.model';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './responder-requisicao.component.html',
  styleUrls: ['./responder-requisicao.component.scss'],
})
export class ResponderRequisicaoComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private ataService: AtaService,
    private requisicaoService: RequisicaoService,
    private modalService: ModalsService
  ) {}

  atasFormGroup: FormGroup;
  selectedRequisicao: Requisicao;
  currentProfile: string;
  requisicoes: Requisicao[] = this.activedRoute.snapshot.data.requisicoes;

  ngOnInit(): void {
    this.atasFormGroup = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(50)]],
      subtitulo: [null, [Validators.required]],
      descricao: [null, [Validators.required]],
    });
  }

  send() {
    const ata: Ata = {
      ...this.atasFormGroup.value,
      requisicao: this.selectedRequisicao.id,
    };
    this.ataService
      .salvarAta(ata)
      .pipe(switchMap(() => this.requisicaoService.recuperarTodos()))
      .subscribe((requisicoes) => {
        this.requisicoes = requisicoes;
        this.modalService.showMessage(
          'Sucesso',
          'Ata de resposta enviada com sucesso!'
        );
      });
  }
}
