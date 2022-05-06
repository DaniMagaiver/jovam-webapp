import { OnInit, Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './atas.component.html',
  styleUrls: ['./atas.component.scss'],
})
export class AtasComponent implements OnInit {
  atasFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.atasFormGroup = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      subject: [null, [Validators.required]],
      text: [null, [Validators.required]],
    });
  }
}
