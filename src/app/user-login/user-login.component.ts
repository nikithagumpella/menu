import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  member = new User();
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const user = this.authService.login(this.member);
    if (user) {
      alert('Successfully logged in');
      this.router.navigate(['/home']);
      form.reset();

    } else {
      alert('User ID or password is wrong');
    }
  }

}
