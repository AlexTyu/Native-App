import { NativePage } from './app.po';

describe('native App', () => {
  let page: NativePage;

  beforeEach(() => {
    page = new NativePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
