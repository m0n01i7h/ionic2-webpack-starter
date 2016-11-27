/// <reference path="./typings/typings.d.ts" />

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../ngfactory/src/app/app.module.ngfactory';

require('./styles/main.scss');

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
enableProdMode();