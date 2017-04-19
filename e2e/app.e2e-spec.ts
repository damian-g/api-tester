import { ApiTesterPage } from './app.po';

describe('api-tester App', () => {
  let page: ApiTesterPage;

  beforeEach(() => {
    page = new ApiTesterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
