import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = new FormGroup({
    formEmailAdd: new FormControl(''),
    formPassword: new FormControl(''),
  });

  constructor() {     
  }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.signInForm.value);
  }

  resetForm() {
    this.signInForm.reset();
  }
}
