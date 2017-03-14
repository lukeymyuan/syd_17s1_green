const TeamPage = require('../../src/js/pages/teamPage');

let page;

describe('Check-in dance', () => {
  beforeEach(() => {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', () => {
    it('should include the text "Made by:"', () => {
      expect(page.$el).toContainText('Made by:');
    });

    it('should include the text "Dominic Fung"', () => {
      expect(page.$el).toContainText('Dominic Fung');
    });
    it('should include the text "Elena"', () => {
      expect(page.$el).toContainText('Elena');
    });

    it('should include the text "Bea"', () => {
      expect(page.$el).toContainText('Bea');
    });

    it('should include the text "Matthew"', () => {
      expect(page.$el).toContainText('Matthew');
    });
    // TODO: Add a test to check for your name
  });
});
