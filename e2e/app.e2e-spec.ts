import { HealthnetPage } from './app.po';

describe('healthnet App', () => {
  let page: HealthnetPage;

  beforeEach(() => {
    page = new HealthnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
