import { UdemyCourseProjectPage } from './app.po';

describe('udemy-course-project App', () => {
  let page: UdemyCourseProjectPage;

  beforeEach(() => {
    page = new UdemyCourseProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
