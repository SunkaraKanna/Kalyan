import { Component} from '@angular/core';


@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.css']
})
export class EmployerRegisterComponent {
  
  getUserLoggedStatus(): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error('Method not implemented.');
  }
  
  employer: any;
 

  constructor() {
    this.employer = {
      name:"",
      emailId:"",
      password: "",
      gender:"",
      location:"",
      mobile:"",
      serviceOffering:"",
      address:""
    };
  }

  employerRegister(regForm: any) {
    this.employer.name=regForm.name;
    this.employer.emailId=regForm.emailId;
    this.employer.password=regForm.password;
    this.employer.gender=regForm.gender;
    this.employer.location=regForm.location;
    this.employer.mobile=regForm.mobile;
    this.employer.serviceOffering=regForm.serviceOffering;
    this.employer.address=regForm.address;

    // console.log(regForm);
    // this.service.employeeRegister(this.employer).subscribe((data: any) => {
      
    //   console.log(data);
    // });
  }
  validateMail(mail:any):boolean{
    return /[@]/.test(mail);
  }

  validateMobile(mobile: string): boolean {
    return mobile.length == 10 && /[6-9]/.test(mobile[0]);
  }

  validatePassword(password: string): boolean {
    return password.length >= 3 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]/.test(password);
  }
}