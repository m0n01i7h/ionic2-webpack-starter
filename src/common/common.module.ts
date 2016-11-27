import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';

@NgModule({
  exports: [
    IonicModule,
    BrowserModule,
    FormsModule,
  ]
})
export class CommonModule { }