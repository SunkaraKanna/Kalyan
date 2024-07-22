import { Component } from '@angular/core';

@Component({
  selector: 'app-jobseeker-register',
  templateUrl: './jobseeker-register.component.html',
  styleUrls: ['./jobseeker-register.component.css']
})
export class JobseekerRegisterComponent {

  employee: any;

  constructor() {
    this.employee = {
      name:"",
      emailId:"",
      password: "",
      gender:"",
      location:"",
      mobile:"",
      serviceType:"",
      address:""
    };
  }

  jobseekerRegister(regForm: any) {
    this.employee.name=regForm.name;
    this.employee.emailId=regForm.emailId;
    this.employee.password=regForm.password;
    this.employee.gender=regForm.gender;
    this.employee.location=regForm.location;
    this.employee.mobile=regForm.mobile;
    this.employee.serviceType=regForm.serviceType;
    this.employee.address=regForm.address;

    // console.log(regForm);
    // this.service.jobseekerRegister(this.employee).subscribe((data: any) => {
      
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