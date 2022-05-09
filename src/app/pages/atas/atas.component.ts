import { ModalsService } from './../../shared/services/modals.service';
import { switchMap } from 'rxjs/operators';
import { AtaService } from './../../shared/services/ata.service';
import { ProfileService } from './../../shared/services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Ata } from 'src/app/shared/models/Ata.model';
import { Page } from 'src/app/shared/models/Page.model';

@Component({
  templateUrl: './atas.component.html',
  styleUrls: ['./atas.component.scss'],
})
export class AtasComponent implements OnInit {
  atasFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activedRoute: ActivatedRoute,
    private profileService: ProfileService,
    private ataService: AtaService,
    private modalService: ModalsService
  ) {}

  atas: Ata[] = this.activedRoute.snapshot.data.atas;
  selectedAta: Ata;
  currentProfile = this.profileService.profile();

  ngOnInit(): void {
    this.atasFormGroup = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      subject: [null, [Validators.required]],
      text: [null, [Validators.required]],
    });
  }

  send() {
    const { id } = this.selectedAta;
    const ata: Ata = { ...this.atasFormGroup.value, requisicao: id };
    this.ataService
      .salvarAta(ata)
      .pipe(switchMap(() => this.ataService.recuperarTodos()))
      .subscribe((atas) => {
        this.atas = atas;
        this.modalService.showMessage(
          'Sucesso',
          'Resposta enviada com sucesso!'
        );
      });
  }
}
