import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: './signIn.page.html',
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
