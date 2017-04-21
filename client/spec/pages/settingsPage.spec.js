const SettingsPage = require('../../src/js/pages/settingsPage');
const eventHub = require('watch_framework').EventHub;
const storage = require('../../src/storage');

let page;

describe('The settings page', () => {
  beforeEach(() => {
    page = new SettingsPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      // expect(page.$el).toContainHtml('<h1>response 0</h1>');
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

  describe('selecting a gender', () => {
    it('should go back to the tap page', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('tap');
    });

    it('should push the default gender index to storage', () => {
      page.configureButtons();
      page.pickGender();
      const genderSize = storage.settings.gender.length;
      expect(storage.settings.gender[genderSize - 1]).toEqual(3);
    });

    it('should push the male gender index to storage', () => {
      page.configureButtons();
      page.scrollDown();
      page.pickGender();
      const genderSize = storage.settings.gender.length;
      expect(storage.settings.gender[genderSize - 1]).toEqual(0);
    });

    it('should push the female gender index to storage', () => {
      page.configureButtons();
      page.scrollDown();
      page.pickGender();
      const genderSize = storage.settings.gender.length;
      expect(storage.settings.gender[genderSize - 1]).toEqual(1);
    });

    it('should push the non-binary gender index to storage', () => {
      page.configureButtons();
      page.scrollDown();
      page.pickGender();
      const genderSize = storage.settings.gender.length;
      expect(storage.settings.gender[genderSize - 1]).toEqual(2);
    });

    it('should wrap around and push the default gender index to storage', () => {
      page.configureButtons();
      page.scrollDown();
      page.pickGender();
      const genderSize = storage.settings.gender.length;
      expect(storage.settings.gender[genderSize - 1]).toEqual(3);
    });

    it('should push the non-binary gender index to storage', () => {
      page.configureButtons();
      page.scrollUp();
      page.pickGender();
      const genderSize = storage.settings.gender.length;
      expect(storage.settings.gender[genderSize - 1]).toEqual(2);
    });
  });
});
