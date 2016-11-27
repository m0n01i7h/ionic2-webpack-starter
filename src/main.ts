/// <reference path="./typings/typings.d.ts" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

require('./styles/main.scss');

platformBrowserDynamic().bootstrapModule(AppModule);