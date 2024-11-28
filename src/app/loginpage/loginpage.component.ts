import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
public loginForm: FormGroup=new FormGroup(
  {
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.min(5),Validators.max(12)]),
  }
);
 constructor(private _LoginService: LoginService, private router: Router){

 }
 login(){
   this._LoginService.userService(this.loginForm.value).subscribe(
    (data:any) => {
      alert("Login successful")
      this.router.navigateByUrl('/dashboard');
      sessionStorage.setItem('token',data.token);

    },
    (err:any) => {
      alert("invalid credentials");
    }
   )
  
 }

}
