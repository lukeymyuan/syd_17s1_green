const ReportingSelectionPage = require('../../src/js/pages/reportingSelectionPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Reporting Selection Page', () => {
  beforeEach(() => {
    page = new ReportingSelectionPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render({ organisation: 'Kids Helpline' });
      expect(page.$el).toContainHtml('<div id="org-name">Kids Helpline</div>');
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

  describe('selecting an organisation', () => {
    it('should go to the default reporting details page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('reportingDetails');
    });

    it('should go to the next organisation\'s reporting details page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      page.scrollDown();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('reportingDetails');
    });

    it('should go to the previous organisation\'s reporting details page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      page.scrollUp();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('reportingDetails');
    });
  });
});
