import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  maxDate;

  constructor(private authService: AuthService) {}

  public ageValidation() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  ngOnInit() {
    this.ageValidation();
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.authService.regusterUser({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
