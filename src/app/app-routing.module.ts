import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form3Component } from './form3/form3.component';

const routes: Routes = [
  {
    path: '', component: Form3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
