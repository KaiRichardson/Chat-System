import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatService } from './chat.service';
import {
  SocialAuthServiceConfig,
  SocialLoginModule,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { DataService } from './data.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { SecondLoginComponent } from './second-login/second-login.component';

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
    SecondLoginComponent,
    SignupComponent,
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
