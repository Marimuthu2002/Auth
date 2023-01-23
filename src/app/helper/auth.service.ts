import { environment } from './../../enviroment/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

enum Roll {
  Admin = 1,
  user = 2
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // apiUrl: any = environment.apiURL;
  private isRole: any = new BehaviorSubject<number>(Roll.Admin);
  isRoleStore = this.isRole.asObservable();

  constructor(private http: HttpClient) { }

  // getToken(body: any): Observable<any> {
  //   return this.http.post("http://192.168.0.21/api/Auth/Login", body).pipe(map((res: any) => {
  //     if (res[0].token) {
  //       let jwtData = res[0].token.split('.')[1];
  //       let decodedJwtJsonData = window.atob(jwtData)
  //       let decodedJwtData = JSON.parse(decodedJwtJsonData)
  //       for (const key in decodedJwtData) {
  //         if (Object.prototype.hasOwnProperty.call(decodedJwtData, key)) {
  //           let element: any = decodedJwtData[key];
  //           switch (key) {
  //             case "role":
  //               element == "Admin" ? this.isRole.next(Role.Admin) : this.isRole.next(Role.user);
  //               break;
  //           }
  //         }
  //       }
  //       console.log(decodedJwtData);
  //     }
  //     return res;
  //   }))
  // }

  getTokens(user: any): Observable<any> {
    debugger
    return this.http.post("http://192.168.0.21/api/Auth/Login", user, { responseType: 'text' }).pipe(map((res: any) => {
      if (res) {
        debugger
        localStorage.setItem("token", res);
        // localStorage.setItem("userNamne", res.userNamne);
      }
      this.getoken(localStorage.getItem("token"));
      return res;
    },
    ))
  }


  getoken(data: any) {
    debugger
    let jwt: any = data;
    if (jwt) {
      let jwtData = jwt.split('.')[1];
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      // for (const key in decodedJwtData) {
      //   if (Object.prototype.hasOwnProperty.call(decodedJwtData, key)) {
      //     let element: any = decodedJwtData[key];
      //     switch (key) {
      //       case "role":
      //         element == "Admin" ? this.isRole.next(Role.Admin) : this.isRole.next(Role.user);
      //         break;
      //     }
      //   }
      // }
    }
  }

  ////////////////////////////////////////////////////
  // getToken(body: any): Observable<any> {
  //   return this.http.get("./../../assets/token.json").pipe(map((res: any) => {
  //     if (res[0].token) {
  //       let jwtData = res[0].token.split('.')[1];
  //       let decodedJwtJsonData = window.atob(jwtData)
  //       let decodedJwtData = JSON.parse(decodedJwtJsonData)
  //       if (decodedJwtData) {
  //         if (decodedJwtData.name == body.userNamne) {
  //           localStorage.setItem("name", decodedJwtData.name);
  //         } else {
  //           alert("Username Incorrect")
  //           return false;
  //         }
  //         if (decodedJwtData.password == body.password) {
  //         } else {
  //           alert("Password Incorrect")
  //           return false;
  //         }
  //         decodedJwtData.Role == 1 ? alert("admin") : decodedJwtData.Role == 2 ? alert("User") : alert("Others");
  //         localStorage.setItem("token", res[0].token);
  //       }
  //     } return res;
  //   }))
  // }
  ////////////////////////////////////////////////////
  IsloggerOut() {
    localStorage.clear();
  }
}
