import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: require('./start.page.html'),
})
export class StartPage {

  constructor(
     private nav: NavController
  ) {
  }
}
