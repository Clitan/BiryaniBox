import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import{Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
import { send } from 'q';
import { stringify } from '@angular/compiler/src/util';
import { Navigation } from 'selenium-webdriver';
import { state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from 'app/admin-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  hide=true;
  loading=false;
  navigation:any={};
  data:any={};
  submitted=false;
  email=new FormControl('',
  [Validators.required,Validators.email,
// Validators.pattern("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"),
]);
  phone=new FormControl('',
  [Validators.required,
  Validators.maxLength(10),
  Validators.minLength(10),
  Validators.pattern(/^[6-9]\d{9}$/),
    // Validators.pattern("/^(?:\d{10}|\w+@\w+\.\w{2,3})$/"),
  
]);
  passFormControl=new FormControl('',
  [Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8),
    // Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
    // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),
   

  ]);
  
  constructor(private http: HttpClient,private router:Router,private _Activatedroute:ActivatedRoute) { 
    this.navigation=this.router.getCurrentNavigation();
    

  }

  ngOnInit(){

    
    
    console.log(this.navigation);

    if(this.navigation.extras.state) {
      this.email.setValue(this.navigation.extras.state.payload['email']);
      console.log(this.email.value, this.navigation.extras.state.payload['email'])

      this.phone.setValue(this.navigation.extras.state.payload['phoneNumber']);
    }
   
   }
  getErrorMessage() {
    return this.email.hasError('email') ? 'Not a valid email' :
            '';
          
   }
  getError() {
    
       return this.phone.hasError('pattern') ? 'Must enter 10 digit phone number' :
         
            '';
            
  }
  getpass() {
       return this.passFormControl.hasError('required') ? 'You must enter password' :
         this.passFormControl.hasError('minlength') ? 'minimum length must be 8 character' :
         this.passFormControl.hasError('maxLength') ? 'maximum length must be 8 character' :
            '';
  }
  onSubmit() {
    if((this.email.status === 'VALID' || this.phone.status === 'VALID') && this.passFormControl.status === 'VALID') {
      const myKey = this.email.status === 'VALID' ? "email" : "phoneNumber"
      const myValue =  this.email.status === 'VALID' ? this.email.value:this.phone.value;
      const postObject = {
        [myKey]:myValue,
        password: this.passFormControl.value
      
      }

      this.loginApi(postObject);


    

    }
    
  }
 
  

  async loginApi (postdata) {
   
    try {
      const response = await this.http.post('http://localhost:3000/api/login', postdata).subscribe((res :Response)=> {
        
        console.log(res);
      const  data=res;
      //  var xhr=new XMLHttpRequestEventTarget();
      //  xhr.onload=function()
      //  console.log('xhr');


    this.loading=true;
   if(data['success']==true)
   
   {
    this.router.navigate['/dashboard'];
   }
   else{
   alert(data['payload']) ; 
      }
  
      });
    
      return response;
     
    }
    catch(err) {
      return err;
    }
    
    
  }
  
  


}
