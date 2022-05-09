import { Conselho } from './../../shared/models/Conselho.model';
import { Secretaria } from './../../shared/models/Secretaria.model';
import { LoginService } from './../../shared/services/login.service';
import { StorageService } from './../../shared/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private activedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private storageService:StorageService,
    private loginService:LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      password: [null, [Validators.required]],
      profile: [null, [Validators.required]]
    });
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe((user) => {
      this.storageService.saveInSessionStorage('profile', this.loginForm.get('profile')?.value);
      this.storageService.saveInSessionStorage('user', JSON.stringify(user))
      this.router.navigate(['./home/requisicoes'], { relativeTo: this.activedRoute });
    });
  }
}
