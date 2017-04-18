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
      expect(page.$el).toContainHtml('<h1>organisation 1</h1>');
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
});
