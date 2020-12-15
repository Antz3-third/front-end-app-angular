import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private readonly registerForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      retypePassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      birthYear: new FormControl(null, [Validators.required, Validators.maxLength(4)])
    });
  }

  ngOnInit(): void {
  }

  get email() {return this.registerForm.get('email');}

  get password() {return this.registerForm.get('password');}

  get retypePassword() {return this.registerForm.get('retypePassword');}

  get birthYear() {return this.registerForm.get('birthYear');}
}

