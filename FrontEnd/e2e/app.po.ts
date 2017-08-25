import {browser, by, element, protractor} from 'protractor';

export class AngularPage {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    browser.get('/');

    // browser.getCurrentUrl().then(url => {
    //   if (url.includes('/auth/realms/endeavour/protocol/openid-connect')) {
    //     element(by.name('username')).sendKeys('e2etest');
    //     element(by.name('password')).sendKeys('e2eTestPass');
    //     element(by.name('login')).click();
    //   }
    // });
  }
}

