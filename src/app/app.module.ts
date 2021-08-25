import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/shared/header/header.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DominicodeComponent } from './Pages/domicode/dominicode/dominicode.component';
@NgModule({
  //se declrar los componente que queremos exportat
  declarations: [
    AppComponent,
    HeaderComponent,
    DominicodeComponent
  ],
  //se importan los modulos de nuestra apliacacion
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  //se inyentan dependencias
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
