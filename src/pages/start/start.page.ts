import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: './start.page.html',
})
export class StartPage {

  constructor(
    private nav: NavController
  ) {
  }
}
