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
    private storageService:StorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      password: [null, [Validators.required]],
      userType: [null, [Validators.required]]
    });
  }

  login() {
    this.storageService.saveInServiceStorage('profile', this.loginForm.get('userType')?.value);
    this.router.navigate(['./home'], { relativeTo: this.activedRoute });
  }
}
