import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyFormComponent } from './my-form/my-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const APP_ROUTES: Routes = [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'preguntas', component: QuestionsComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'perfil', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: '**', component: WelcomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
