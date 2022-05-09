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

  constructor(private formBuilder: FormBuilder, private activedRoute:ActivatedRoute) {}

  atas:Page<Ata> = this.activedRoute.snapshot.data.atas; 

  ngOnInit(): void {
    this.atasFormGroup = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      subject: [null, [Validators.required]],
      text: [null, [Validators.required]],
    });

    console.log(this.atas)
  }
}
