import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IonicModule } from 'ionic-angular';

@NgModule({
  exports: [
    IonicModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule
  ]
})
export class CommonModule { }