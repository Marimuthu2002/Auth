import { InterceptorInterceptor } from './helper/interceptor.interceptor';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DasbordComponent } from './dasbord/dasbord.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DasbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
