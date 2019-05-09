import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../types/user.type';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  loginForm: FormGroup = new FormGroup({});
  user = new User();
  @Output() login = new EventEmitter<User>();
  public isLoginFail = false;
  public error = '';

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userNameControl: ['', [Validators.required]],
      passwordControl: ['', [Validators.required]]
    });
  }

  clickLogin(e: User) {
    if (this.loginForm.valid) {
      this.login.emit(e);
    }
  }
}
