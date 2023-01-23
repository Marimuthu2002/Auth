import { HttpClient } from '@angular/common/http';
import { AuthGuard } from './../helper/auth.guard';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../helper/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myData: any = [] = [];
  Data: any = [] = [];
  isSubmitted: boolean = false;
  isValidUser: boolean = false;
  response!: Observable<any>;
  constructor(private authService: AuthService, private hello: AuthGuard, private routes: Router, private http: HttpClient) { }
  SignupForm: FormGroup | any;
  ngOnInit(): void {
    this.formValid();
    // this.mock();
    this.authService.IsloggerOut();
  }

  formValid() {
    this.SignupForm = new FormGroup({
      userNamne: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    })
  }

  // loginToken() {
  //   this.myData = {
  //     userNamne: this.SignupForm.value.userNamne,
  //     Password: this.SignupForm.value.password
  //   }
  //   this.authService.postMoveies(this.myData).subscribe({
  //     next: () => {
  //       console.log(this.myData);

  //     }
  //   })
  // }

  // loginToken() {
  //   let yData = {
  //     Username: this.SignupForm.value.userName,
  //     Password: this.SignupForm.value.password
  //   }
  //   this.authService.getToken(yData).subscribe({
  //     next: ((res: any) => {
  //       // this.yData = res;
  //       console.log(res)
  //       this.routes.navigate(["das"]);
  //     })
  //   })
  //   // const url = 'https://63183522ece2736550c35b92.mockapi.io/Auth';
  //   // this.response = this.http.get(url, {observe: 'body'});
  // }

  loginToken() {
    debugger
    let Data = {
      userNamne: this.SignupForm.value.userNamne,
      password: this.SignupForm.value.password
    }
    this.authService.getTokens(Data).subscribe({
      next: ((res: any) => {
        if (res) {
          this.routes.navigate(['\das']);
          alert("Login Sucess");
        }
        else
          alert("Login Faild");
      }),
      error: (err: any) => {
        alert("Login Faild");
      }
    })

  }

}
  // mock() {
  //   this.authService.interceptor().subscribe({
  //     next: ((res: any) => {
  //       this.Data = res;
  //     })
  //   })
  // }

  // loginToken() {
  //   debugger
  //   this.myData = {
  //     Username: this.SignupForm.value.userName,
  //     Password: this.SignupForm.value.password
  //   }
  //   this.authService.getToken(this.myData).subscribe({
  //     next: ((res: any) => {
  //       this.myData = res;
  //       this.routes.navigate(["das"]);
  //     })
  //   })
  //   // const url = 'https://63183522ece2736550c35b92.mockapi.io/Auth';
  //   // this.response = this.http.get(url, {observe: 'body'});
  // }

