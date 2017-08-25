import { AngularPage } from './app.po';
import {$, browser, by, element, protractor} from "protractor";

describe('angular App', () => {
  let page: AngularPage;

  beforeEach(() => {
    page = new AngularPage();
  });

  it ('should load login', () => {
    page.navigateTo();
    browser.wait(function() {
      return $('#content').isPresent(); // keeps waiting until this statement resolves to true
    });
  });

  it ('should load main page', done => {
    element(by.className('title-text')).getText()
      .then(msg => expect(msg).toEqual('Discovery Health Launch Vehicle'))
      .then(done, done.fail);
  });

});
