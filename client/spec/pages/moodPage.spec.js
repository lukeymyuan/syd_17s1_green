const MoodPage = require('../../src/js/pages/moodPage');
// const eventHub = require('watch_framework').EventHub;
let page;

describe('The Mood Page', () => {
  beforeEach(() => {
    page = new MoodPage();
  });


  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
    });
  });
});
