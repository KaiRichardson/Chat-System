import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { ChatService } from './chat.service';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
  SocialAuthServiceConfig,
  SocialLoginModule,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { ChatInboxComponent } from './components/chat-inbox/chat-inbox.component';

// const config = new SocialAuthServiceConfig([
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider(
//       '663302841536-pqlvbekggnmb05301rr9g3r0rm0e44pb.apps.googleusercontent.com'
//     ),
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('524954454603212'),
//   },
// ]);
// export function provideConfig() {
//   return config;
// }

@NgModule({
  declarations: [
    AppComponent,
    ChatInboxComponent,
    LoginComponent,
    SignupComponent,
    Login2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
  ],
  providers: [
    ChatService,
    DataService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '663302841536-pqlvbekggnmb05301rr9g3r0rm0e44pb.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('524954454603212'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
