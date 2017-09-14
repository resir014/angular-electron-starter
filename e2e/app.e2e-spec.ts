import { AngularElectronPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('angular-electron-starter', () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  it('should display the homepage correctly', () => {
    expect(element(by.css('app-home h1')).getText()).toContain('One framework.');
    expect(element(by.css('app-home h1')).getText()).toContain('Mobile & desktop.');
  });
});
