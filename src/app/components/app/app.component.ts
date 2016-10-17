import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav } from 'ionic-angular';

// pages
import { SignInPage } from '../../../pages/signIn/signIn.page';
import { StartPage } from '../../../pages/start/start.page';


@Component({
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {

  @ViewChild(Nav) private nav: Nav;

  public rootPage = StartPage;

  public StartPage = StartPage;
  public SignInPage = SignInPage;

  constructor(
  ) { }

  public ngOnInit() {
    console.log('init');
  }

  public setRoot(page) {
    this.rootPage = page;
  }

}
