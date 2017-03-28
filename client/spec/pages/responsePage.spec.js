const ResponsePage = require('../../src/js/pages/responsePage');

let page;

describe('The Response Page', () => {
  beforeEach(() => {
    page = new ResponsePage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      // expect(page.$el).toContainHtml('<h1>response 0</h1>');
    });
  });
});
