import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormGroupName,Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm = new FormGroup({
    firstname:new FormControl(null,{validators:[Validators.required]}),
    lastname:new FormControl(null,{validators:[Validators.required]}),
    phonenumber:new FormControl(null,{validators:[Validators.required]}),
    email:new FormControl(null,{validators:[Validators.required,Validators.email]}),
    password:new FormControl(null,{validators:[Validators.required]}),
  })
  signupdata(){

    console.log(this.signupForm.value);
  }
  get checkSignup(){
    // HttpClient.c
    // this.apiService.callAPI("post", body, "user/user_login").subscribe(data => {
    return this.signupForm.controls
  }

  ngOnInit(): void {
  }

}
