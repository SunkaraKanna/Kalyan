import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginId: string;
  password: string;

  constructor() {
    this.loginId = "";
    this.password = "";
  }

  submit() {
    if (this.loginId == "HR" && this.password == "HR") {
      alert("Login Success");
    } else {
      alert("Login Failed");
    }
  }

  validateLogin(loginForm: any) {
    console.log(loginForm);

    if (loginForm.emailId == "HR" && loginForm.password == "HR") {
      alert("Login Success");
    } else {
      alert("Login Failed");
    }
  }
}
