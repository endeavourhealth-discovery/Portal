import { AngularPage } from './app.po';
import {$, browser, by, element, protractor} from "protractor";

describe('angular App', () => {
  let page: AngularPage;

  beforeEach(() => {
    page = new AngularPage();
  });

  it ('Initialize', () => {
    page.navigateTo();

    // Wait for login.
    browser.wait(browser.ExpectedConditions.urlContains('/auth/realms/endeavour/protocol/openid-connect'));
  });

  it ('Perform login', () => {
    element(by.name('username')).sendKeys('e2etest');
    element(by.name('password')).sendKeys('e2eTestPass');
    element(by.name('login')).click();

    // Wait for main app page
    browser.wait(() => $('#content').isPresent());
  });

  it ('Check page loaded', done => {
    element(by.className('title-text')).getText()
      .then(msg => expect(msg).toEqual('Discovery Health Launch Vehicle'))
      .then(done, done.fail);
  });

  it ('Check button role access', done => {
    element(by.buttonText('Dashboard')).isEnabled()
      .then(msg => expect(msg).toBeTruthy())
      .then(done, done.fail);

    element(by.buttonText('Library')).isEnabled()
      .then(msg => expect(msg).toBeFalsy())
      .then(done, done.fail);

  });

  it ('Test navigation', () => {
    element(by.buttonText('Dashboard')).click().then(function () {

      browser.getAllWindowHandles().then((handles) => {

        let newWindowHandle = handles[1]; // this is your new window
        browser.switchTo().window(newWindowHandle).then(() => {
          // fill in the form here
          expect(browser.driver.getCurrentUrl()).toMatch('http://localhost:8080/compass/app/dashboard');
        });
      });
    });
  });


});
