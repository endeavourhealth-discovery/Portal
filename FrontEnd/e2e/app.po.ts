import { browser, by, element } from 'protractor';

export class AngularPage {
  navigateTo() {
    browser.ignoreSynchronization = true;
    browser.get('/');

    browser.getCurrentUrl().then(url => {
      if (url.includes('/auth/realms/endeavour/protocol/openid-connect')) {
        element(by.name('username')).sendKeys('e2etest');
        element(by.name('password')).sendKeys('e2eTestPass');
        element(by.name('login')).click();
      }
      browser.ignoreSynchronization = false;

    });
  }

  getParagraphText() {
    return element(by.id('pre-bootstrap')).getText();
  }

  waitUntilURLContains(waitForUrl, timeout) {
    return browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then((url) => {
        return url.includes(waitForUrl);
      });
    }, timeout);
  }
}

