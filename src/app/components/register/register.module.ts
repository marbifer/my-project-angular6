import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../../app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

// import { SharedModule } from '../shared/shared.module';

import { RegisterComponent } from '../../components/register/register.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
// import { reducer } from '../../state/product.reducer';
// import { EffectsModule } from '@ngrx/effects';
// import { ProductEffects } from '/state/product.effects';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
    // SharedModule,
    // RouterModule.forChild(productRoutes),
    // StoreModule.forFeature('products', reducer), // Redux: el segundo parármetro es un reductor.
    // EffectsModule.forFeature([ProductEffects]) // Redux: efectos.
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
