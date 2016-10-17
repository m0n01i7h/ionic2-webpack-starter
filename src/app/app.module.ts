import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { CommonModule } from '../common.module';
import { PagesModule } from '../pages/pages.module';
import { ServicesModule } from '../services/services.module';

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
