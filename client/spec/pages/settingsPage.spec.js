const SettingsPage = require('../../src/js/pages/settingsPage');
// const eventHub = require('watch_framework').EventHub;

let page;

describe('The settings page', () => {
  beforeEach(() => {
    page = new SettingsPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      // expect(page.$el).toContainHtml('<h1>response 0</h1>');
    });
  });
});
