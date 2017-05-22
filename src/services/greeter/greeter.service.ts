import { Injectable } from '@angular/core';

@Injectable()
export class Greeter {
  async greet(who: string) {
    let greetings = await `Hello, ${who}!`;
    return greetings;
  }
}