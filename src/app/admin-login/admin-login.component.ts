import { Component, OnInit} from '@angular/core';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// declare const validate:any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  userAddressValidations: FormGroup;
  email=new FormControl('',
  [Validators.required,Validators.email]);
  phone=new FormControl('',
  [Validators.required,
  Validators.maxLength(10),
  Validators.minLength(10),
  Validators.pattern(/^[6-9]\d{9}$/),
]);
  passFormControl=new FormControl('',
  [Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
    // Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
    // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
   

  ]);
  hide=true;
  
  constructor(private router:Router,private formBuilder: FormBuilder) { 
    
  }
  
  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9]\d{9}$')]]
    });
    
  }
 
 
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' :
            '';
  //           this.email.hasError('required') ? 'You must enter a value' :
   }
  getError() {
    return  this.phone.hasError('pattern') ? 'Not a valid number' :
            '';
            // this.phone.hasError('required') ? 'You must enter a value' :
  }
  getpass() {
    return this.passFormControl.hasError('required') ? 'You must enter password' :
         this.passFormControl.hasError('minlength') ? 'minimum length must be 8 character' :
         this.passFormControl.hasError('maxLength') ? 'maximum length must be 8 character' :
            '';
  }
  login()
  {

    this.router.navigate(['/dashboard']);
  }
    
  
 

}
