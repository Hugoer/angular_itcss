import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CNavbarTopComponent } from './components/c-navbar-top/c-navbar-top.component';
import { CNavbarBottomComponent } from './components/c-navbar-bottom/c-navbar-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    CNavbarTopComponent,
    CNavbarBottomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
