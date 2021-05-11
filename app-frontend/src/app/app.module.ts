import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { ChatService } from './chat.service';
import { SocialLoginModule } from 'angularx-social-login';
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedInLoginProvider,
} from 'angularx-social-login';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { SecondLoginComponent } from './second-login/second-login.component';
import { SignupComponent } from './signup/signup.component';

const config = new AuthServiceConfig([
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
]);
export function provideConfig() {
  return config;
}

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
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
