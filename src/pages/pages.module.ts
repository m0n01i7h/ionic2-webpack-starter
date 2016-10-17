import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '../common.module';
import { ServicesModule } from '../services/services.module';

import { SignInPage } from './signIn/signIn.page';
import { StartPage } from './start/start.page';

const components = [
  SignInPage,
  StartPage
];

@NgModule({
  imports: [
    CommonModule,
    ServicesModule
  ],
  declarations: components,
  entryComponents: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
