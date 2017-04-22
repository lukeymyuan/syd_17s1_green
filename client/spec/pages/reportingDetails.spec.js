const ReportingDetailsPage = require('../../src/js/pages/reportingDetailsPage');
const eventHub = require('watch_framework').EventHub;

let page;

describe('The Reporting Selection Page', () => {
  beforeEach(() => {
    page = new ReportingDetailsPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      const sampleOrg = {
        name: 'Emergency Contact',
        phone: '1234567890',
        email: 'sample@email.com',
        address: 'http://organisation1.com',
      };
      page.render({ organisation: sampleOrg });
      // expect(page.$el).toContainHtml('<h1 id="org-name">Emergency Contact</div>');
    });
  });
  describe('clicking the left button', () => {
    it('should go to reporting selection', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('reporting');
    });
  });
});
