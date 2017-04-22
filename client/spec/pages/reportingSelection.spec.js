const ReportingSelectionPage = require('../../src/js/pages/reportingSelectionPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Reporting Selection Page', () => {
  beforeEach(() => {
    page = new ReportingSelectionPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render({ organisation: 'organisation 1' });
      expect(page.$el).toContainHtml('<div id="org-name">organisation 1</div>');
    });
  });

  describe('clicking the watch face', () => {
    it('should go to a reporting details page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('reportingDetails');
    });
  });
  describe('clicking the left button', () => {
    it('should go to tap page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('tap');
    });
  });
});
