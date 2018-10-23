import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { PaymentsComponent } from '../../components/welcome/shared/payments/payments.component';
import { ReferencesComponent } from '../../components/welcome/shared/references/references.component';
import { SmartComponent } from './smart-component/smart.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/welcome.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WelcomeEffects } from '../state/welcome.effects';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    StoreModule.forFeature('welcome', reducer), // Redux: el segundo parármetro es un reductor.
    EffectsModule.forFeature([WelcomeEffects]) // Redux: efectos.
  ],
  declarations: [
    WelcomeComponent,
    SmartComponent,
    // ReferencesShellComponent,
    // PaymentsShellComponent,
    ReferencesComponent,
    PaymentsComponent
  ]
})
export class WelcomeModule { }


