import { AngularPage } from './app.po';
import {browser, by, element, protractor} from "protractor";

describe('angular App', () => {
  let page: AngularPage;

  beforeEach(() => {
    page = new AngularPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    element(by.id('pre-bootstrap')).getText()
      .then(msg => expect(msg).toEqual('Please wait...\nYour Endeavour Health application is loading!'))
      .then(done, done.fail);
  });

  it ('should load main page', done => {
    page.waitUntilURLContains('app/', 10000);
    element(by.className('title-text')).getText()
      .then(msg => expect(msg).toEqual('Discovery Health Launch Vehicle'))
      .then(done, done.fail);
  });

});
