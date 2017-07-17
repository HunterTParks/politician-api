import { PoliticianLookupPage } from './app.po';

describe('politician-lookup App', () => {
  let page: PoliticianLookupPage;

  beforeEach(() => {
    page = new PoliticianLookupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
