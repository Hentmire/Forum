import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;

  constructor(
    public authService: AuthService
    //private fb: FormBuilder
  ) {
    //this.createForm();
  }

  /*createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }*/

  ngOnInit() {
  }

}
