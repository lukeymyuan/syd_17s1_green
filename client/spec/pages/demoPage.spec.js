const DemoPage = require('../../src/js/pages/demoPage');

let page;

describe('The Demo Page', () => {
  beforeEach(() => {
    page = new DemoPage();
  });
  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();

      expect(page.$el).toContainText('This is a demo');
      expect(page.$el).toContainHtml('<p>What a great page!</p>');
    });
  });
  describe('Pass data to templates', () => {
    it('should pass a variable to the template', () => {
      page.render();
      expect(page.$el).toContainHtml('<h2>Welcome, John Smith!</h2>');
    });
  });
});
