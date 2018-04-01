import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingsComponent } from './dashboard/listings/listings.component';
import { CreateComponent } from './dashboard/listings/create/create.component';
import { EditComponent } from './dashboard/listings/edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BicycleService } from './bicycle.service';
import { SecurityContext } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BrowseComponent,
    ListingsComponent,
    CreateComponent,
    EditComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AppRoutingModule,
    BicycleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
