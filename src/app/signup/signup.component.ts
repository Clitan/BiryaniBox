import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email=new FormControl('',
  [Validators.required,Validators.email]);
  passFormControl = new FormControl('', [
    Validators.required,
    ]);
    phone=new FormControl('',
    [Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern(/^[6-9]\d{9}$/),
  ]);
usrname = new FormControl('', [
  Validators.required,
  Validators.pattern("[a-zA-Z ]*"),

]);




  constructor(  private router: Router) { }

  ngOnInit() {
  }
  registration()
  {
    alert('registration is success');
    this.router.navigate(['/Login']);
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getError() {
    return this.phone.hasError('required') ? 'You must enter a value' :
        this.phone.hasError('pattern') ? 'Must enter 10 digit phone nuumber' :
            '';
  }
  getusr() {
    return this.usrname.hasError('required') ? 'You must enter a name' :
        this.usrname.hasError('pattern') ? 'Must enter a valid user name' :
            '';
  }
  
}
