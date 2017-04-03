import { MohitapmPage } from './app.po';

describe('mohitapm App', () => {
  let page: MohitapmPage;

  beforeEach(() => {
    page = new MohitapmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
