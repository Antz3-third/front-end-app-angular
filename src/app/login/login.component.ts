import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private readonly loginForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    }); 

}

  ngOnInit(): void {
    
  }

  get email() {return this.loginForm.get('email');}

  get password() {return this.loginForm.get('password');}
}
