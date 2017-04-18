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
/*
    describe('face', () => {
      it('should load message 0', () => {
        spyOn(page, 'updateMessage');
        page.configureButtons();
        eventHub.trigger('face');
        expect(page.$el).toContainHtml('Message 0');
      });
    });
*/
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      // expect(page.$el).toContainText('Positive Message');
    });

    it('should pass a variable message', () => {
      page.render();
      expect(page.$el).toContainHtml('Variable Positive Message');
    });

    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });
});
