import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHatsComponent } from './my-hats/my-hats.component';
import { DetailsComponent } from './details/details.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHatsComponent,
    DetailsComponent,
    AppNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
