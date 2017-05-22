import { TestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { expect } from 'chai';
import { Greeter } from './greeter.service';

describe('Greeter service', () => {

  before(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Greeter]
    });
  });

  it('should greet', inject([Greeter], async (greeter: Greeter) => {
    let greetings = await greeter.greet('World');
    expect(greetings).to.be.equal('Hello, World!');
  }));
});

