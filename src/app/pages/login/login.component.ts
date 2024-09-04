import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form: FormGroup;


  constructor(private usersService: UsersService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  // onClickRegister(): void {
  //   this.usersService.register(this.form.value).then((response) => {
  //     console.log(response);
  //   })
  //   .catch(error => console.log(error));
  // }

  onClickLogin(): void {
    this.usersService.login(this.form.value).then((response) => {
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  onClickLoginWithGoogle(): void {
    this.usersService.loginWithGoogle().then((response) => {
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }

  onClickLogout(): void {
    this.usersService.logout();
  }
}
