import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { AdminContributionComponent } from './admin-contribution/admin-contribution.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ContributionsComponent,
    AdminContributionComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
