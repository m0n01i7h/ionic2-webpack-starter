import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../ngfactory/src/app/app.module.ngfactory';

require('./styles/main.scss');

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);