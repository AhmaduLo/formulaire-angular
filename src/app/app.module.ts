import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component'
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
