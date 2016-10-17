import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  template: require('./signIn.page.html'),
})
export class SignInPage {

  public email: string = '';
  public password: string = '';

  constructor(
    private nav: NavController,
  ) { }

  public signIn(email: string, password: string) {
  }
}
