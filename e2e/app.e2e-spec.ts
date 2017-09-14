import { AngularElectronPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular-electron App', () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  it('should display the homepage correctly', () => {
    expect(element(by.css('app-home h1')).getText()).toMatch('One framework');
  });
});
