import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginData } from '../../../model/login-data';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  imports: [
    TranslateModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
  ],
})
export class LoginFormComponent {
  loginForm = this.formBuilder.group({
    login: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required),
  });
  get login(): FormControl {
    return this.loginForm.get('login') as FormControl;
  }

  @Output() submitLogin = new EventEmitter<LoginData>();

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit() {
    const loginFormValues = this.loginForm.value;
    this.submitLogin.emit(
      new LoginData(loginFormValues.login || '', loginFormValues.password || '')
    );
  }
}
