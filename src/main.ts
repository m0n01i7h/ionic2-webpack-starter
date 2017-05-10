import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

require('./styles/main.scss');
platformBrowserDynamic().bootstrapModule(AppModule);
