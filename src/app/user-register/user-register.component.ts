import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../validator';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerForm: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
}
get f() { return this.registerForm.controls; }

onSubmit()
{
this.submitted=true;
this.router.navigate([`./login`])
if (this.registerForm.invalid) {
  return;
}
console.log(this.registerForm.value);
  localStorage.setItem('form-data', JSON.stringify(this.registerForm.value)); 

}
}