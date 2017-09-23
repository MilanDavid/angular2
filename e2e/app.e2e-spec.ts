import { CookbookPage } from './app.po';

describe('cookbook App', () => {
  let page: CookbookPage;

  beforeEach(() => {
    page = new CookbookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
