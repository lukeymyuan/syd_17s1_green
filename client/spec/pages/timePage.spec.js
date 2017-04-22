const TimePage = require('../../src/js/pages/timePage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;


let page;

window.App = App;


describe('The Tap Page', () => {
  beforeEach(() => {
    page = new TimePage();
  });

  describe('button event handlers', () => {
    describe('face', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('tap');
      });
    });
    describe('top', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('tap');
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
