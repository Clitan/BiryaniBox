import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router,NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';
import { request } from 'https';
import { promise } from 'protractor';
import { resetFakeAsyncZone } from '@angular/core/testing';



@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.scss']
})
export class AdminSignupComponent implements OnInit {
  submitted = false;
  email = new FormControl('',
    [Validators.required, Validators.email]);
  passFormControl = new FormControl('', [
    Validators.required,
  ]);
  phone = new FormControl('',
    [Validators.required,
    Validators.maxLength(10),
    Validators.minLength(10),
    Validators.pattern(/^[6-9]\d{9}$/),
    ]);
  usrname = new FormControl('', [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*"),

  ]);


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  

    
    
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
  submit() {

    if (this.usrname.status == 'VALID' && this.email.status === 'VALID' && this.phone.status === 'VALID' && this.passFormControl.status === 'VALID') {
     

      const postObject = {
        name: this.usrname.value,
        phoneNumber: this.phone.value,
        email: this.email.value,
        password: this.passFormControl.value,


      }

      console.log(this.loginApi(postObject))
  
    }

    }


    async loginApi(post)
     {
      
      try {
       
        const response =await  this.http.post('http://localhost:3000/api/admin', post).subscribe((res =response)=> {
        // console.log(res);
        const data=res;
        if(data['success']==true)
        {
          alert("regestraion is  success");
         
          const navigationEXTRAS: NavigationExtras = {
            state: data
          

            
          }
          
          this.router.navigate(['/login'],navigationEXTRAS);
          
        }
        else
        {
          alert("User already exists");

        }
        return res
         
        });
      
        
      } 
      catch (err)
       {
       
        return err
      }
     
    }
  }




