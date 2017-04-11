const MoodPage = require('../../src/js/pages/moodPage');
const eventHub = require('watch_framework').EventHub;
const storage = require('../../src/storage');

let page;

describe('The Mood Page', () => {
  beforeEach(() => {
    page = new MoodPage();
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should take the user to the response page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('response');
      });
      it('should read default mood values from storage', () => {
        expect(storage.myData.mood[0]).toEqual(100);
      });
      it('should read the last mood variable as 0', () => {
        expect(storage.myData.mood[storage.myData.mood.length - 1]).toEqual(0);
      });
      // it('should append number to mood array', () => {
      //   spyOn(window.App, 'navigate');
      //   page.configureButtons();
      //   eventHub.trigger('right');
      //   mood = storage.myData.mood;
      //   const length = mood.length;
      //   expect(mood[length - 1] == 2);
      // });
    });
    describe('bottom', () => {
      it('should take the user to the response page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('response');
      });
      it('should read default mood values from storage', () => {
        expect(storage.myData.mood[0]).toEqual(100);
      });
      it('should read the last mood variable as 1', () => {
        expect(storage.myData.mood[storage.myData.mood.length - 1]).toEqual(1);
      });
    });
    describe('left', () => {
      it('should take the user to the response page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('response');
      });
      it('should read default mood values from storage', () => {
        expect(storage.myData.mood[0]).toEqual(100);
      });
      it('should read the last mood variable as 2', () => {
        expect(storage.myData.mood[storage.myData.mood.length - 1]).toEqual(2);
      });
    });
    describe('top', () => {
      it('should take the user to the response page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('response');
      });
      it('should read default mood values from storage', () => {
        expect(storage.myData.mood[0]).toEqual(100);
      });
      it('should read the last mood variable as 3', () => {
        expect(storage.myData.mood[storage.myData.mood.length - 1]).toEqual(3);
      });
    });
    describe('face', () => {
      it('should take the user to the response page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('response');
      });
      it('should read default mood values from storage', () => {
        expect(storage.myData.mood[0]).toEqual(100);
      });
      it('should read the last mood variable as 4', () => {
        expect(storage.myData.mood[storage.myData.mood.length - 1]).toEqual(4);
      });
    });
  });


  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
    });
  });
});
