const TapPage = require('../../src/js/pages/tapPage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;


let page;

window.App = App;


describe('The Tap Page', () => {
  beforeEach(() => {
    page = new TapPage();
  });

  describe('button event handlers', () => {
    describe('face', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });

    describe('bottom', () => {
      it('should take the user to the reporting selection page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('reporting');
      });
    });

    describe('top', () => {
      it('should take the user to the mood diary page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('mood');
      });
    });

    describe('right', () => {
      it('should take the user to the settings page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('settings');
      });
    });
  });
  // describe('rendering', () => {
  //   it('should produce the correct HTML', () => {
  //     page.render();
  //
  //     expect(page.$el).toContainText('Tap Me');
  //   });
  // });
});
