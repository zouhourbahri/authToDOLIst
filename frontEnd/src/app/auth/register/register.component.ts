import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { registerFormValidation } from 'src/app/validations/passwordValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  registerForm = this.fb.group({
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    password: ['',[Validators.required,Validators.minLength(5)]],
    confirmPassword:['',Validators.required]
  }, {validator: registerFormValidation})

  ngOnInit(): void {
  }
  registerUser(){
    console.log(this.registerForm.value);
    
  }

}
