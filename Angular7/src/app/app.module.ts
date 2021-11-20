import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AgentPanelComponent } from './agent-panel/agent-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PlatsComponent } from './home/plats/plats.component';
import { ProfilComponent } from './home/profil/profil.component';
import { AjouterplatsComponent } from './home/ajouterplats/ajouterplats.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterDrinkComponent } from './home/ajouter-drink/ajouter-drink.component';
import { DrinksComponent } from './home/drinks/drinks.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AgentPanelComponent,
    ForbiddenComponent,
    PlatsComponent,
    ProfilComponent,
    AjouterplatsComponent,
    AccueilComponent,
    AjouterDrinkComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
