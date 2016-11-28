import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { SignInPage, StartPage } from '../../../pages';

@Component({
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild(Nav) public nav: Nav;

  public rootPage = StartPage;

  public StartPage = StartPage;
  public SignInPage = SignInPage;

  constructor(
  ) { }

  public setRoot(page) {
    this.rootPage = page;
  }

}
