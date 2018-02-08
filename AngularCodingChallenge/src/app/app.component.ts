import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  genders = ['Male', 'Female'];
  countryName;
  user = {
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    gender: '',
    countryName: '',
    dob: '',
    companyname: '',
    industry: '',
    about: '',
    newsletter: '',
    privacy: ''
  };
  submitted = false;


  onSubmit() {
    this.submitted = true;
    this.user.firstName = this.signupForm.value.userData.firstName;
    this.user.lastName = this.signupForm.value.userData.lastName;
    this.user.email = this.signupForm.value.userData.email;
    this.user.confirmEmail = this.signupForm.value.userData.confirmEmail;
    this.user.countryName = this.signupForm.value.countryName;
    this.user.companyname = this.signupForm.value.companyname;
    this.user.industry = this.signupForm.value.industry;
    this.user.dob = this.signupForm.value.dob;
    this.user.about = this.signupForm.value.about;
    this.user.newsletter = this.signupForm.value.newsletter;
    this.user.gender = this.signupForm.value.gender;
    this.user.privacy = this.signupForm.value.privacy;
    console.log(this.user);
    this.signupForm.reset();
  }
}
