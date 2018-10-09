import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

/* NgRx */
import { StoreModule } from '@ngrx/store';

import { WelcomeModule } from './components/welcome/welcome.module';
import { QuestionsModule } from './components/questions/questions.module';
import { ContactModule } from './components/contact/contact.module';
import { ProfileModule } from './components/profile/profile.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    QuestionsModule,
    ContactModule,
    ProfileModule,
    RegisterModule,
    LoginModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
