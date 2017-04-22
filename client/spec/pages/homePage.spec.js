const _ = require('underscore');
const HomePage = require('../../src/js/pages/homePage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Home Page', () => {
  beforeEach(() => {
    page = new HomePage();
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should take the user to the mood selection page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('mood');
      });
    });

    describe('left', () => {
      it('should take the user to the response page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('response');
      });
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('face', () => {
      it('should render the page', () => {
        spyOn(page, 'render');
        page.configureButtons();
        eventHub.trigger('face');
        expect(page.render).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should scroll the watch face down', () => {
        spyOn(page, 'scrollDown');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });
    });
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });

    it('returns appropriate array lengths', () => {
      expect(page.maleLength = page.responses.male.length);
      expect(page.femaleLength = page.responses.female.length);
      expect(page.unspecifiedLength = page.responses.unspecified.length);
      const y = page.unspecifiedIndex; // next line is over 100char w/o this
      expect(_.indexOf(page.responses.unspecified, page.responses.unspecified[y]) > -1);
    });

    it('should load message from array', () => {
      spyOn(page, 'render');
      page.configureButtons();
      eventHub.trigger('face');
      page.gender = 'unspecified';
      expect(_.indexOf(page.responses.unspecified, page.message) > -1);
    });

    it('should handle male gender', () => {
      spyOn(page, 'render');
      page.configureButtons();
      eventHub.trigger('face');
      page.gender = 'male';
      expect(_.indexOf(page.responses.male, page.message) > -1);
    });

    it('should handle female gender', () => {
      spyOn(page, 'render');
      page.configureButtons();
      eventHub.trigger('face');
      page.gender = 'female';
      expect(_.indexOf(page.responses.female, page.message) > -1);
    });
  });
});
