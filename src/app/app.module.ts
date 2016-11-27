import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { CommonModule } from 'common';
import { PagesModule } from 'pages';
import { ServicesModule } from 'services';

import { AppComponent } from './components/app/app.component';

@NgModule({
  imports: [
    IonicModule.forRoot(AppComponent),
    CommonModule,
    ServicesModule,
    PagesModule
  ],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  bootstrap: [IonicApp],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
